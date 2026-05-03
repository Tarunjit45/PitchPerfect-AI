import React from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Target, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl w-full mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#F27D26] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight">PitchPerfect</span>
        </div>
        <button 
          onClick={onStart}
          className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-medium text-sm"
        >
          Open App
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 text-center max-w-5xl mx-auto mt-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#F27D26]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-white/70">Win More Freelance Jobs</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white title-wrapper">
            Stop Guessing.<br/>
            <span className="text-[#F27D26]">Earn Dollars.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
            Instantly generate perfectly tailored freelance proposals that close international clients and boost your USD revenue.
          </p>

          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[#F27D26] rounded-full overflow-hidden transition-transform active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2 text-lg">
              Generate Winning Proposal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="mt-4 text-sm text-white/40 font-mono">No credit card required for preview</p>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="bg-[#111] py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">Why not just use ChatGPT?</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Because general AI sounds like an AI. PitchPerfect is a specialized engine built to close deals.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white/5 border border-red-500/20">
              <div className="text-red-400 font-mono text-sm tracking-widest uppercase mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Standard AI Output
              </div>
              <ul className="space-y-4 text-white/60">
                <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Starts with "Dear Hiring Manager..."</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Requires you to write a complex 500-word prompt every time.</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Uses generic, fluffy language that clients spot instantly.</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Focuses on you, not the client's problem.</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl bg-[#F27D26]/10 border border-[#F27D26]/30">
              <div className="text-[#F27D26] font-mono text-sm tracking-widest uppercase mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span> PitchPerfect Framework
              </div>
              <ul className="space-y-4 text-white">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#F27D26]" /> Aggressive, problem-solving hooks that grab attention.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#F27D26]" /> 1-Click generation. Paste the job, paste your skills. Done.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#F27D26]" /> Uses proven sales psychology and direct-response copywriting.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#F27D26]" /> Generates interview intelligence and response tips as a bonus.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-[#F27D26]" />}
              title="Hyper-Targeted"
              description="Maps your exact skills to the client's explicit and implicit needs hidden in the job posting."
            />
            <FeatureCard 
              icon={<FileText className="w-6 h-6 text-[#F27D26]" />}
              title="Proven Frameworks"
              description="Uses high-converting psychological structures designed to get you the initial interview call."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-[#F27D26]" />}
              title="Instant Delivery"
              description="Stop staring at a blank page. Go from finding a job to applying in under 60 seconds."
            />
          </div>
        </div>
      </section>

      {/* Pricing / Monetization Concept */}
      <section className="py-24 max-w-5xl mx-auto px-6 w-full text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Start Earning More</h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto">One extra job won pays for a year. Turn your proposals into an automated closing machine.</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Hustler</h3>
            <div className="text-4xl font-black mb-6">$15<span className="text-lg text-white/40 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <PricingFeature text="50 Proposals per month" />
              <PricingFeature text="Basic tone control" />
              <PricingFeature text="Email support" />
            </ul>
            <button onClick={onStart} className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold">
              Start Free Trial
            </button>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#221005] to-[#111] border border-[#F27D26]/30 flex flex-col relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#F27D26] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#F27D26]">Pro Closer</h3>
            <div className="text-4xl font-black mb-6">$29<span className="text-lg text-white/40 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <PricingFeature text="Unlimited Proposals" />
              <PricingFeature text="Advanced interview intel" />
              <PricingFeature text="Custom profile saving" />
              <PricingFeature text="Priority support" />
            </ul>
            <button onClick={onStart} className="w-full py-3 rounded-full bg-[#F27D26] text-black hover:bg-[#ff8a33] transition-colors font-bold shadow-[0_0_20px_rgba(242,125,38,0.3)]">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F27D26]/10 blur-[120px] pointer-events-none"></div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/50 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-white/80">
      <CheckCircle2 className="w-5 h-5 text-[#F27D26]" />
      <span>{text}</span>
    </li>
  );
}
