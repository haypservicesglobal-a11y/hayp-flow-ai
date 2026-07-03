'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, Send, Sparkles, Zap, CheckCheck, 
  User, Bot, ArrowLeft, Smartphone, ShieldCheck
} from 'lucide-react';

interface Chat {
  id: number;
  customerName: string;
  platform: 'WhatsApp' | 'Email';
  lastMessage: string;
  time: string;
  unread: boolean;
  history: { sender: 'customer' | 'business'; text: string; time: string }[];
  aiSuggestion: string;
}

export default function SmartInboxPage() {
  const [activeChatId, setActiveChatId] = useState<number>(1);
  const [typedMessage, setTypedMessage] = useState<string>('');
  const [isGeneratingAI, setIsGeneratingAI] = useState<boolean>(false);

  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      customerName: "Chidi Kola (Alaba Market)",
      platform: "WhatsApp",
      lastMessage: "I haven't received the updated invoice for the 15 inverter units.",
      time: "10:42 AM",
      unread: true,
      history: [
        { sender: 'customer', text: "Hello, good morning. Regarding the 15 inverter units we discussed.", time: "10:39 AM" },
        { sender: 'customer', text: "I haven't received the updated invoice for the 15 inverter units.", time: "10:42 AM" }
      ],
      aiSuggestion: "Hello Chidi, thank you for reaching out. I have generated your updated invoice for the 15 inverter units via Wema ALAT. You can securely pay using this link: [ALAT Checkout Link]."
    },
    {
      id: 2,
      customerName: "Funmi Adebayo",
      platform: "WhatsApp",
      lastMessage: "Can I book a consultation slot for tomorrow afternoon?",
      time: "09:15 AM",
      unread: false,
      history: [
        { sender: 'customer', text: "Hi, do you have openings this week?", time: "09:00 AM" },
        { sender: 'business', text: "Yes Funmi! We have slots available on Thursday.", time: "09:10 AM" },
        { sender: 'customer', text: "Can I book a consultation slot for tomorrow afternoon?", time: "09:15 AM" }
      ],
      aiSuggestion: "Hi Funmi! I have reserved a 2:00 PM slot for you tomorrow. Click here to confirm your appointment and sync your calendar."
    }
  ]);

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  const applyAISuggestion = () => {
    setIsGeneratingAI(true);
    setTimeout(() => {
      setTypedMessage(activeChat.aiSuggestion);
      setIsGeneratingAI(false);
    }, 400);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const updatedChats = chats.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          lastMessage: typedMessage,
          unread: false,
          history: [...c.history, { sender: 'business' as const, text: typedMessage, time: "Just Now" }]
        };
      }
      return c;
    });

    setChats(updatedChats);
    setTypedMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans antialiased h-screen">
      
      {/* HEADER NAVBAR */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <a href="/dashboard" className="text-gray-400 hover:text-[#111827]">
            <ArrowLeft className="h-5 w-5" />
          </a>
          <div>
            <h1 className="text-base font-black tracking-tight flex items-center space-x-2">
              <span>Smart Customer Inbox</span>
              <span className="bg-blue-100 text-[#0057D9] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center">
                <Smartphone className="h-2.5 w-2.5 mr-1" /> WhatsApp Active
              </span>
            </h1>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl">
          <ShieldCheck className="h-3.5 w-3.5 text-[#00B894]" />
          <span className="font-semibold text-gray-300">Wema API Secured</span>
        </div>
      </header>

      {/* CORE WORKSPACE */}
      <div className="flex-1 flex overflow-hidden w-full max-w-7xl mx-auto">
        
        {/* CHAT QUEUE */}
        <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Active Feeds</span>
          </div>

          <div className="divide-y divide-gray-100">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`w-full p-4 text-left transition-all flex items-start space-x-3 relative ${
                  activeChatId === chat.id ? 'bg-blue-50/70 border-l-4 border-[#0057D9]' : 'hover:bg-gray-50'
                }`}
              >
                <div className="p-2 rounded-xl text-xs font-bold bg-emerald-50 text-[#00B894] shrink-0">WA</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs truncate font-bold text-gray-700">{chat.customerName}</h3>
                    <span className="text-[9px] text-gray-400 ml-1">{chat.time}</span>
                  </div>
                  <p className="text-[11px] truncate mt-1 text-gray-500">{chat.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* CONVERSATION AREA */}
        <section className="flex-1 bg-[#F8FAFC] flex flex-col justify-between overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {activeChat.history.map((msg, idx) => (
              <div key={idx} className={`flex flex-col max-w-[70%] ${msg.sender === 'customer' ? 'mr-auto items-start' : 'ml-auto items-end'}`}>
                <div className={`p-3.5 rounded-2xl text-xs ${msg.sender === 'customer' ? 'bg-white border border-gray-200 shadow-sm' : 'bg-[#0057D9] text-white'}`}>
                  <p>{msg.text}</p>
                </div>
                <span className="text-[9px] text-gray-400 mt-1 flex items-center space-x-1">
                  <span>{msg.time}</span>
                  {msg.sender === 'business' && <CheckCheck className="h-3 w-3 text-[#00B894]" />}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT FORM */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
              <input
                type="text"
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                placeholder="Type your response..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none"
              />
              <button type="submit" disabled={!typedMessage.trim()} className="bg-[#111827] text-white p-3 rounded-xl disabled:opacity-40">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        {/* AI ASISTANT SIDEBAR */}
        <section className="w-80 bg-white border-l border-gray-200 hidden lg:flex flex-col p-5 justify-between shrink-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 bg-blue-50 border border-blue-100 p-3 rounded-xl">
              <Sparkles className="h-4 w-4 text-[#0057D9]" />
              <span className="text-xs font-black text-[#101828]">Flow AI Draft Assistant</span>
            </div>

            <div className="bg-blue-50/40 rounded-xl p-3.5 border border-blue-100 text-xs text-gray-700 leading-relaxed font-medium">
              <p>{activeChat.aiSuggestion}</p>
            </div>
          </div>

          <button
            onClick={applyAISuggestion}
            disabled={isGeneratingAI}
            className="w-full bg-[#0057D9] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>{isGeneratingAI ? 'Drafting...' : 'Insert AI Draft Reply'}</span>
          </button>
        </section>

      </div>
    </div>
  );
}
