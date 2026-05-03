export async function generateProposal(jobDescription: string, userResume: string, tone: string = "Professional and persuasive") {
  try {
    const res = await fetch("/api/generate-proposal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescription, resume: userResume, tone })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data.proposal;
  } catch (error) {
    console.error("Error generating proposal:", error);
    throw new Error("Failed to generate the proposal. Please try again.");
  }
}

export async function generateInterviewQuestions(jobDescription: string) {
  try {
    const res = await fetch("/api/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescription })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data.questions;
  } catch (error) {
    console.error("Error generating interview questions:", error);
    return [];
  }
}
