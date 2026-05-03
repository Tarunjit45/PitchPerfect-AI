import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Check API key
  let ai: GoogleGenAI | null = null;
  const initGemini = () => {
    if (!ai) {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing");
      }
      ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return ai;
  };

  // API Route for proposals
  app.post("/api/generate-proposal", async (req, res) => {
    try {
      const { jobDescription, resume, tone } = req.body;
      const genAI = initGemini();

      const prompt = `You are an expert freelance copywriter, sales strategist, and proposal architect.
Your goal is to write a highly converting freelance proposal based on the provided Job Description and User Resume.

### INSTRUCTIONS:
1.  Study the **Job Description** to understand the client's explicit needs, implied pain points, and desired outcomes.
2.  Review the **User Resume/Skills** to identify the most relevant experience and strengths.
3.  Draft a proposal that bridges the gap. Focus on what the user can do FOR the client. Avoid generic fluff.
4.  Use a tone that is: ${tone}.
5.  Structure the proposal as follows:
    *   **Hook**: A strong opening sentence that shows immediate understanding of their problem (do not use "Hi I read your job...").
    *   **Value Proposition**: Why you are uniquely qualified for this specific task (mention 1-2 highly relevant projects or skills).
    *   **Proposed Approach**: Briefly outline the first 2-3 steps you would take to solve their problem. This proves competence.
    *   **Call to Action**: A low-friction next step (e.g., a quick 10-min chat to discuss a specific detail).

### INPUTS:

**Job Description:**
${jobDescription}

**User Resume/Skills/Profile:**
${resume}
`;

      const response = await genAI.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: { temperature: 0.7 }
      });

      res.json({ proposal: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate proposal" });
    }
  });

  app.post("/api/generate-questions", async (req, res) => {
    try {
      const { jobDescription } = req.body;
      const genAI = initGemini();

      const prompt = `Based on the following Job Description, generate 3 highly probable interview questions the client might ask to vet a freelancer, and provide a brief tip on how to answer each.

**Job Description:**
${jobDescription}
`;

      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING, description: "The interview question" },
                tip: { type: Type.STRING, description: "A tip on how to answer" }
              },
              required: ["question", "tip"]
            }
          }
        }
      });

      res.json({ questions: JSON.parse(response.text || "[]") });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate interview questions" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
