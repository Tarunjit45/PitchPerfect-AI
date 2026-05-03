import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Copy, Check, Target, Lightbulb, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { generateProposal, generateInterviewQuestions } from "../lib/gemini";
import { cn } from "../lib/utils";

interface DashboardProps {
  onBack: () => void;
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [tone, setTone] = useState("Professional and direct");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [proposal, setProposal] = useState("");
  const [interviewQuestions, setInterviewQuestions] = useState<any[]>([]);
  
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!jobDescription || !resume) return;
    
    setIsGenerating(true);
    setProposal("");
    setInterviewQuestions([]);
    
    try {
      // Run both generations in parallel
      const [proposalText, questions] = await Promise.all([
        generateProposal(jobDescription, resume, tone),
        generateInterviewQuestions(jobDescription)
      ]);
      
      setProposal(proposalText);
      setInterviewQuestions(questions);
    } catch (e) {
      alert("Something went wrong generating the proposal. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#E4E3E0] text-[#141414] font-sans">
      {/* LEFT COLUMN: Input Panel */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col h-screen overflow-y-auto border-r border-[#141414] bg-[#E4E3E0]">
        <div className="p-6 border-b border-[#141414] flex items-center justify-between sticky top-0 bg-[#E4E3E0] z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="text-[10px] uppercase font-mono tracking-widest opacity-50 font-bold">
            Project Config
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1">
          <div className="mb-8">
            <h2 className="font-serif italic text-3xl mb-2">Proposal Architect</h2>
            <p className="text-sm opacity-60 font-mono">Fill in the targets to generate a high-conversion pitch.</p>
          </div>

          <div className="space-y-6 flex-1">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4" />
                Client Job Description
              </label>
              <textarea 
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the Upwork/Fiverr job description here..."
                className="w-full h-48 bg-white border border-[#141414] p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F27D26] focus:border-transparent transition-all shadow-[4px_4px_0_#141414]"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <FileTextIcon />
                Your Profile / Resume
              </label>
              <textarea 
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="Paste your resume, past experience, or standard profile bio here..."
                className="w-full h-48 bg-white border border-[#141414] p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F27D26] focus:border-transparent transition-all shadow-[4px_4px_0_#141414]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest">
                Desired Tone
              </label>
              <select 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-white border border-[#141414] p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#F27D26] shadow-[4px_4px_0_#141414] cursor-pointer"
              >
                <option value="Professional and direct">Professional & Direct</option>
                <option value="Enthusiastic and creative">Enthusiastic & Creative</option>
                <option value="Confident and authoritative">Confident & Authoritative</option>
                <option value="Conversational and friendly">Conversational & Friendly</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!jobDescription || !resume || isGenerating}
            className="mt-8 w-full py-4 bg-[#141414] text-[#E4E3E0] font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-[#141414] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-transparent hover:border-[#141414]"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Architecting Pitch...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Proposal
              </>
            )}
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: Output Panel */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-white relative">
        <div className="p-6 border-b border-[#141414] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="text-[10px] uppercase font-mono tracking-widest opacity-50 font-bold">
            Generated Output
          </div>
          {proposal && (
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 border border-[#141414] text-xs font-bold uppercase tracking-wider hover:bg-[#141414] hover:text-white transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Proposal"}
            </button>
          )}
        </div>

        <div className="flex-1 p-8 lg:p-12">
          {!proposal && !isGenerating && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
              <Lightbulb className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-mono max-w-sm">Ready to generate. Input your target parameters on the left to synthesize a proposal.</p>
            </div>
          )}

          {isGenerating && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-4 border-[#141414]/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#F27D26] rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="font-mono text-sm animate-pulse tracking-widest uppercase">Analyzing Parameters...</p>
            </div>
          )}

          {proposal && !isGenerating && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6 border-b border-[#141414] pb-2">The Pitch</h3>
                <div className="prose prose-neutral max-w-none font-serif text-lg leading-relaxed whitespace-pre-wrap">
                  <ReactMarkdown>{proposal}</ReactMarkdown>
                </div>
              </div>

              {interviewQuestions.length > 0 && (
                <div className="mt-16 pt-12 border-t border-[#141414]/10">
                  <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6 border-b border-[#141414] pb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Interview Intel
                  </h3>
                  <div className="grid gap-6">
                    {interviewQuestions.map((q, i) => (
                      <div key={i} className="p-6 bg-[#E4E3E0] border border-[#141414]">
                        <div className="font-bold text-lg mb-3 break-words">Q: {q.question}</div>
                        <div className="font-mono text-sm opacity-80 border-l-2 border-[#F27D26] pl-4">
                          <span className="uppercase text-xs font-bold text-[#F27D26] block mb-1">Response Strategy:</span>
                          {q.tip}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function FileTextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}
