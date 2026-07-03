'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, Users, FileText, Zap, CheckCircle2, 
  ArrowRight, Menu, X, ShieldCheck, Sparkles, 
  TrendingUp, LayoutDashboard, KanbanSquare 
} from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans antialiased">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 bg-[#0057D9] rounded-xl flex items-center justify-center shadow-md shadow-[#0057D9]/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#111827]">
                HayP <span className="text-[#0057D9]">Flow AI</span>
              </span>
            </div>
            
            {/* Navigation Jump Targets */}
            <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider">
              <Link href="/dashboard" className="text-gray-500 hover:text-[#0057D9] transition-colors flex items-center space-x-1">
                <LayoutDashboard className="h-3.5 w-3.5" /> <span>Dashboard</span>
              </Link>
              <Link href="/inbox" className="text-gray-500 hover:text-[#0057D9] transition-colors flex items-center space-x-1">
                <MessageSquare className="h-3.5 w-3.5" /> <span>Smart Inbox</span>
              </Link>
              <Link href="/crm" className="text-gray-500 hover:text-[#0057D9] transition-colors flex items-center space-x-1">
                <KanbanSquare className="h-3.5 w-3.5" /> <span>CRM Pipeline</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-20 pb-20 text-center z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1.5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#0057D9]"></span>
            <span className="text-xs font-semibold text-[#0057D9] tracking-wider uppercase">Wema Hackaholics 2026 Submission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111827] leading-none">
            The AI Operating System for <span className="text-[#0057D9]">African Businesses</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Stop losing leads to messy WhatsApp chats, lost invoices, and scattered notebooks. Centralize operations, automate workflows, and unlock financial credit scaling.
          </p>
          
          <div className="mt-10 max-w-md mx-auto">
            <form onSubmit={handleWaitlistSubmit} className="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
              <input
                type="email"
                required
                placeholder="Enter business email to launch demo..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 text-sm text-[#111827] focus:outline-none"
              />
              <button type="submit" className="bg-[#0057D9] hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-xl font-bold flex items-center space-x-2 transition-all">
                <span>Enter Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {submitted && <p className="mt-3 text-xs font-bold text-[#00B894] animate-pulse">Authentication verified. Loading analytics workspace...</p>}
          </div>
        </div>
      </header>

      {/* 3. CLICKABLE INTERACTIVE PRODUCT WORKSPACE SELECTIONS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Interactive MVP Canvas</span>
            <p className="text-sm text-gray-500 mt-1">Click any feature block below to dive directly inside that application view workspace layer:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Link 1 -> Smart AI Inbox */}
            <Link href="/inbox" className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/60 hover:border-[#0057D9] hover:shadow-md transition-all group cursor-pointer text-left block">
              <div className="flex justify-between items-start">
                <Sparkles className="h-6 w-6 text-[#0057D9] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-[#0057D9] bg-blue-50 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Launch Inbox →</span>
              </div>
              <h3 className="text-sm font-bold text-[#111827] group-hover:text-[#0057D9] transition-colors">🤖 AI Customer Inbox</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Drafts customer response scripts automatically. Test live contextual automated message injections inside this panel view.</p>
            </Link>

            {/* Card Link 2 -> CRM Dashboard pipeline */}
            <Link href="/crm" className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/60 hover:border-[#0057D9] hover:shadow-md transition-all group cursor-pointer text-left block">
              <div className="flex justify-between items-start">
                <MessageSquare className="h-6 w-6 text-[#0057D9] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-[#0057D9] bg-blue-50 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Open CRM →</span>
              </div>
              <h3 className="text-sm font-bold text-[#111827] group-hover:text-[#0057D9] transition-colors">💬 Visual CRM Pipeline</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Track deals from cold WhatsApp requests down to successful execution checkouts. Click cards to advance states across workflows.</p>
            </Link>

            {/* Card Link 3 -> Business Core analytics metrics */}
            <Link href="/dashboard" className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/60 hover:border-[#0057D9] hover:shadow-md transition-all group cursor-pointer text-left block">
              <div className="flex justify-between items-start">
                <FileText className="h-6 w-6 text-[#0057D9] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-[#0057D9] bg-blue-50 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Open Hub →</span>
              </div>
              <h3 className="text-sm font-bold text-[#111827] group-hover:text-[#0057D9] transition-colors">📄 Performance Analytics</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Inspect incoming gross merchant volume flows, alternative underwriting loan profiles, and automatic operational chart tables.</p>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
