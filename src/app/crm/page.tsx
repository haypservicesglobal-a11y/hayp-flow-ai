'use client';

import React, { useState } from 'react';
import { 
  Users, 
  ArrowLeft, 
  Plus, 
  MoreHorizontal, 
  FileText, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface Lead {
  id: string;
  company: string;
  contact: string;
  value: string;
  source: 'WhatsApp' | 'Web Form' | 'Email';
  date: string;
}

export default function CRMPage() {
  // Mock CRM Pipelines representing an African SME's deal stream
  const [pipeline, setPipeline] = useState<{ [key: string]: Lead[] }>({
    new_inquiry: [
      { id: '1', company: "Alaba Electronics Ltd", contact: "Chidi Kola", value: "₦1,500,000", source: "WhatsApp", date: "Today" },
      { id: '2', company: "Adebayo Fashion Hub", contact: "Funmi Adebayo", value: "₦450,000", source: "WhatsApp", date: "Today" }
    ],
    proposal_sent: [
      { id: '3', company: "Lekki Reality Partners", contact: "Tunde Mensah", value: "₦8,200,000", source: "Email", date: "Yesterday" }
    ],
    won_invoiced: [
      { id: '4', company: "Gbagada Logistics Corp", contact: "Amara O.", value: "₦3,100,000", source: "Web Form", date: "3 days ago" }
    ]
  });

  // Simple state machine simulation to advance deals across the pipeline instantly
  const advanceLead = (leadId: string, currentStage: string, nextStage: string) => {
    const leadToMove = pipeline[currentStage].find(l => l.id === leadId);
    if (!leadToMove) return;

    setPipeline({
      ...pipeline,
      [currentStage]: pipeline[currentStage].filter(l => l.id !== leadId),
      [nextStage]: [...pipeline[nextStage], leadToMove]
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans antialiased h-screen">
      
      {/* HEADER CONTROLS */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <a href="/dashboard" className="text-gray-400 hover:text-[#111827] transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </a>
          <div>
            <h1 className="text-base font-black tracking-tight flex items-center space-x-2">
              <span>Visual Lead Management</span>
            </h1>
            <p className="text-[11px] text-gray-400">Track and advance high-value small business deals effortlessly.</p>
          </div>
        </div>

        {/* ALAT Loan Scoring Synergy Widget */}
        <div className="hidden sm:flex items-center space-x-2 bg-blue-50 border border-blue-100 text-xs px-3 py-1.5 rounded-xl">
          <ShieldCheck className="h-3.5 w-3.5 text-[#0057D9]" />
          <span className="font-bold text-[#0057D9] text-[11px]">Wema Credit Readiness Tracker Active</span>
        </div>
      </header>

      {/* PIPELINE KANBAN BOARD CANVAS */}
      <div className="flex-1 overflow-x-auto p-6 flex items-start space-x-5 h-full max-w-7xl mx-auto w-full">
        
        {/* COLUMN 1: NEW INQUIRY */}
        <div className="w-80 bg-gray-100/70 border border-gray-200/50 rounded-2xl p-4 shrink-0 flex flex-col max-h-[90%]">
          <div className="flex justify-between items-center mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <h3 className="text-xs font-black text-gray-700 uppercase tracking-wide">New Inquiries</h3>
            </div>
            <span className="text-[10px] font-bold bg-white text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
              {pipeline.new_inquiry.length}
            </span>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1">
            {pipeline.new_inquiry.map((lead) => (
              <div key={lead.id} className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm relative group hover:border-blue-400 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded uppercase">{lead.source}</span>
                  <span className="text-xs font-extrabold text-[#0057D9]">{lead.value}</span>
                </div>
                <h4 className="text-xs font-black text-[#111827] mt-2 truncate">{lead.company}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">{lead.contact}</p>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 font-medium">{lead.date}</span>
                  <button 
                    onClick={() => advanceLead(lead.id, 'new_inquiry', 'proposal_sent')}
                    className="text-xs font-bold text-[#0057D9] hover:text-blue-700 flex items-center space-x-0.5 bg-blue-50 px-2 py-1 rounded-lg"
                  >
                    <span>Send Proposal</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: PROPOSAL SENT */}
        <div className="w-80 bg-gray-100/70 border border-gray-200/50 rounded-2xl p-4 shrink-0 flex flex-col max-h-[90%]">
          <div className="flex justify-between items-center mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              <h3 className="text-xs font-black text-gray-700 uppercase tracking-wide">Proposals Engaged</h3>
            </div>
            <span className="text-[10px] font-bold bg-white text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
              {pipeline.proposal_sent.length}
            </span>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1">
            {pipeline.proposal_sent.length === 0 ? (
              <div className="text-center py-8 text-[11px] text-gray-400 border border-dashed border-gray-300 rounded-xl">Empty stage</div>
            ) : (
              pipeline.proposal_sent.map((lead) => (
                <div key={lead.id} className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded uppercase">{lead.source}</span>
                    <span className="text-xs font-extrabold text-[#0057D9]">{lead.value}</span>
                  </div>
                  <h4 className="text-xs font-black text-[#111827] mt-2 truncate">{lead.company}</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">{lead.contact}</p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 font-medium">{lead.date}</span>
                    <button 
                      onClick={() => advanceLead(lead.id, 'proposal_sent', 'won_invoiced')}
                      className="text-xs font-bold text-[#00B894] hover:text-emerald-700 flex items-center space-x-0.5 bg-emerald-50 px-2 py-1 rounded-lg"
                    >
                      <span>Collect Invoice</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* COLUMN 3: CLOSED / INVOICED WON */}
        <div className="w-80 bg-gray-100/70 border border-gray-200/50 rounded-2xl p-4 shrink-0 flex flex-col max-h-[90%]">
          <div className="flex justify-between items-center mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-[#00B894]"></span>
              <h3 className="text-xs font-black text-gray-700 uppercase tracking-wide">Closed & Invoiced</h3>
            </div>
            <span className="text-[10px] font-bold bg-white text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
              {pipeline.won_invoiced.length}
            </span>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1">
            {pipeline.won_invoiced.map((lead) => (
              <div key={lead.id} className="bg-emerald-50/40 p-4 rounded-xl border border-[#00B894]/30 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[9px] font-bold bg-[#00B894]/10 text-[#00B894] px-1.5 py-0.5 rounded uppercase">{lead.source}</span>
                  <span className="text-xs font-black text-[#00B894]">{lead.value}</span>
                </div>
                <h4 className="text-xs font-black text-[#111827] mt-2 truncate relative z-10">{lead.company}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5 relative z-10">{lead.contact}</p>

                <div className="mt-4 pt-3 border-t border-[#00B894]/10 flex justify-between items-center relative z-10">
                  <span className="text-[9px] text-[#00B894] font-bold uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Settled via ALAT
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">{lead.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
