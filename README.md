# PitchPerfect AI 🚀

PitchPerfect AI is an intelligent freelance proposal and cover letter generator designed to help freelancers win more clients and earn more revenue (USD) on platforms like Upwork, Fiverr, and LinkedIn. Instead of using generic AI that produces fluffy, easily noticeable "Dear Hiring Manager" cover letters, PitchPerfect uses targeted sales psychology frameworks to map a freelancer's specific skills directly to the client's explicit pain points.

## ✨ Current Features

- **1-Click Proposal Generation:** Paste the job description, paste your resume or profile, and instantly get a highly-targeted, conversion-focused pitch.
- **Bonus Interview Intel:** Automatically generates 3 probable interview questions the client might ask based on the job description, along with strategic tips on how to answer them.
- **Tone Control:** Choose from various tones (Professional & Direct, Enthusiastic & Creative, Confident & Authoritative, Conversational & Friendly) to match the client's vibe.
- **Copy-to-Clipboard:** Instantly copy the generated markdown proposal for quick pasting into job boards.
- **Full-Stack Architecture:** Built with a React frontend and an Express backend to keep API keys secure and enable future scalability.

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Framer Motion (for animations), Lucide React (for icons)
- **Backend:** Node.js, Express, esbuild
- **AI Integration:** Google Gemini API (`@google/genai`) 
  - `gemini-3.1-pro-preview` for complex proposal copywriting.
  - `gemini-3-flash-preview` for rapidly generating interview questions.
- **Build Tool:** Vite

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Setup:**
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The app will start on port 3000. Access it at `http://localhost:3000`.

## 🗺 Roadmap to a Full SaaS Product

While the core AI generation engine is fully functional, to transform PitchPerfect AI into a profitable SaaS product, the following systems need to be implemented:

### 1. User Authentication & Accounts
- **Implementation:** Integrate Auth (e.g., Firebase Authentication, Supabase, or Auth0) to support Google OAuth and Email/Password logins.
- **Why:** To save user preferences, tie proposals to specific users, and manage access limits.

### 2. Database & Data Persistence
- **Implementation:** Integrate a NoSQL (Firestore) or SQL (PostgreSQL via Prisma/Supabase) database.
- **Features to build:**
  - **Saved Profiles:** Allow users to save multiple "Resumes" or "Bios" (e.g., one for Web Dev, one for UI Design) so they don't have to paste it every time.
  - **Proposal History:** Save all generated proposals so users can refer back to them or refine them later.

### 3. Payment Processing & Subscriptions 
- **Implementation:** Integrate Stripe (Stripe Billing / Checkout).
- **Why:** To gate access behind the pricing tiers showcased on the Landing Page ("Hustler" at $15/mo, "Pro Closer" at $29/mo). Implement credit-based usage (e.g., 50 generations/month for standard, unlimited for Pro).

### 4. Chrome Extension (The "Killer Feature")
- **Implementation:** Build a browser extension that injects directly into the Upwork and Fiverr job posting pages.
- **Why:** Instead of copy-pasting back and forth between tabs, users could click a button right on Upwork to generate and autofill the proposal text area.

### 5. Advanced Customization & AI Context
- Allow users to upload full PDF resumes (requires parsing them before sending to the AI).
- Add specific instruction inputs (e.g., "Mention that I can start immediately").
- Implement "Continuous Learning": Let users mark which proposals won them the job, and use that data to fine-tune the prompts dynamically.
