'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, Users, MessageSquare, Clock, ArrowUpRight, 
  ArrowDownRight, LayoutDashboard, KanbanSquare, DollarSign, 
  ShieldCheck, Building2, RefreshCw, Zap 
} from 'lucide-react';

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState('30_days');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex font-sans antialiased">
      
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between shrink-0 sticky top-0 h-screen">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 bg-[#0057D9] rounded-xl flex items-center justify-center shadow-md shadow-[#0057D9]/20">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#111827]">
              HayP <span className="text-[#0057D9]">Flow AI</span>
            </span>
          </div>

          <nav className="space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-blue-50 text-[#0057D9] text-sm font-semibold text-left">
              <LayoutDashboard className="h-4 w-4" />
              <span>Analytics Hub</span>
            </button>
            <a href="/inbox" className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-[#111827] hover:bg-gray-50 text-sm font-medium transition-all text-left block">
              <MessageSquare className="h-4 w-4" />
              <span>Smart Inbox</span>
            </a>
            <a href="/crm" className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-[#111827] hover:bg-gray-50 text-sm font-medium transition-all text-left block">
              <KanbanSquare className="h-4 w-4" />
              <span>Lead Pipeline</span>
            </a>
          </nav>
        </div>

        <div className="p-4 m-4 bg-slate-900 rounded-2xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-1 bg-[#00B894]/20 border border-[#00B894]/30 px-2 py-0.5 rounded-full w-max mb-2">
              <ShieldCheck className="h-3 w-3 text-[#00B894]" />
              <span className="text-[10px] text-[#00B894] font-bold tracking-wider uppercase">ALAT Ecosystem</span>
            </div>
            <p className="text-xs font-bold text-white">Wema Open Banking</p>
            <p className="text-[11px] text-gray-400 mt-1 leading-normal">
              Merchant account feeds are fully unified for instant alternative risk evaluation scoring.
            </p>
          </div>
        </div>
      </aside>

      {/* 2. MAIN HUB */}
      <main className="flex-1 overflow-y-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-5 mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-[#111827]">Business Analytics Dashboard</h1>
            <p className="text-xs text-gray-500 mt-1">Real-time performance metrics tracking pipeline growth for your SME.</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 focus:outline-none shadow-sm cursor-pointer"
            >
              <option value="7_days">Last 7 Days</option>
              <option value="30_days">Last 30 Days</option>
              <option value="all_time">All Time</option>
            </select>
            <button onClick={handleRefresh} className="bg-white border border-gray-200 p-2 rounded-xl text-gray-500">
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </header>

        {/* METRICS ROW */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-blue-50 text-[#0057D9] p-2.5 rounded-xl"><DollarSign className="h-4 w-4" /></div>
              <span className="text-[10px] font-bold text-[#00B894] bg-emerald-50 px-2 py-0.5 rounded-full">+14.2%</span>
            </div>
            <span className="text-xs text-gray-400 font-semibold block mt-4 uppercase tracking-wider">Gross Revenue</span>
            <span className="text-xl font-black text-[#111827] block mt-1">₦3,420,500.00</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-emerald-50 text-[#00B894] p-2.5 rounded-xl"><Users className="h-4 w-4" /></div>
              <span className="text-[10px] font-bold text-[#00B894] bg-emerald-50 px-2 py-0.5 rounded-full">+8.6%</span>
            </div>
            <span className="text-xs text-gray-400 font-semibold block mt-4 uppercase tracking-wider">Active Leads</span>
            <span className="text-xl font-black text-[#111827] block mt-1">1,248 Customers</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl"><Clock className="h-4 w-4" /></div>
              <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">-32.5%</span>
            </div>
            <span className="text-xs text-gray-400 font-semibold block mt-4 uppercase tracking-wider">AI Response Speed</span>
            <span className="text-xl font-black text-[#111827] block mt-1">1.4 Minutes</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-purple-50 text-purple-600 p-2.5 rounded-xl"><TrendingUp className="h-4 w-4" /></div>
              <span className="text-[10px] font-bold text-[#00B894] bg-emerald-50 px-2 py-0.5 rounded-full">+4.1%</span>
            </div>
            <span className="text-xs text-gray-400 font-semibold block mt-4 uppercase tracking-wider">Pipeline Conversion</span>
            <span className="text-xl font-black text-[#111827] block mt-1">28.4% Average</span>
          </div>
        </section>

        {/* BOTTOM WEMA CREDIT SCORE BLOCK */}
        <section className="bg-blue-50 border border-blue-200/60 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="h-10 w-10 bg-[#0057D9] text-white rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827]">Wema Alternative Credit Lending Bridge</h3>
              <p className="text-xs text-gray-600 mt-0.5 max-w-2xl leading-relaxed">
                By organizing daily operational invoice trails and transactional messaging metrics safely into structured data logs, this entity builds credit scoring value to access commercial lines automatically.
              </p>
            </div>
          </div>
          <div className="bg-white px-5 py-3 rounded-xl border border-blue-100 text-center shrink-0">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Underwriting Health Index</span>
            <span className="text-xl font-black text-[#0057D9] block mt-0.5">842 / 900</span>
          </div>
        </section>
      </main>
    </div>
  );
}
