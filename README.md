# 🎯 PitchPerfect AI — High-Converting Freelance Proposal Generator

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Express](https://img.shields.io/badge/Backend-Express%20Vite-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**PitchPerfect AI** is an intelligent freelance proposal and cover letter generator tailored for platforms like **Upwork, Fiverr, and LinkedIn**. It analyzes client job descriptions, identifies underlying client pain points, and crafts high-converting, tailored proposals with persuasive openers, relevant portfolio highlights, and strategic closing questions.

---

## ✨ Features

* 🎣 **Attention-Grabbing Hooks:** Eliminates boilerplate generic openers (*"Dear Hiring Manager"*) in favor of problem-first solutions that grab client attention in the first 2 lines.
* 💡 **Client Pain-Point Diagnosis:** Extracts the true business problem behind the technical requirements.
* 💰 **Pricing & Scope Framing:** Helps structure milestone proposals and rate recommendations (hourly / fixed-price).
* ⚡ **Full-Stack Integrated Backend:** Node.js Express server (`server.ts`) with Vite integration ensuring fast generation without exposing client API keys.

---

## 🛠️ Architecture & Tech Stack

```
+-------------------------------------------------------------+
|                  PitchPerfect React Client                  |
|          (React 18, TypeScript, Tailwind CSS, Lucide)       |
+-------------------------------------------------------------+
                              |
                              v  REST API
+-------------------------------------------------------------+
|                  Express Server (`server.ts`)               |
|            Handles API proxying, rate-limiting, CORS        |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                   Google Gemini AI Engine                   |
|           `@google/genai` Structured Proposal Prompts       |
+-------------------------------------------------------------+
```

---

## 📁 Repository Structure

```text
PitchPerfect-AI/
├── server.ts              # Express server with Vite middleware & Gemini API integration
├── src/                   # React application source code
│   ├── App.tsx            # Main proposal dashboard & editor
│   ├── components/        # Proposal forms, tone selectors, preview panes
│   └── lib/               # API clients & copy utilities
├── metadata.json          # Project manifest
├── package.json           # Dependencies & scripts
├── LICENSE                # MIT License
└── README.md
```

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/Tarunjit45/PitchPerfect-AI.git
cd PitchPerfect-AI

npm install
```

### 2. Configure Environment
Create a `.env` file:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
