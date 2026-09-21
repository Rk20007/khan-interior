import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

interface FloatingCTAProps {
  onOpenConsultation: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenConsultation }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Khan Interior! I am browsing your website and would like to get a quote for my flat/office in Bhiwadi.'
  )}`;

  if (!show) return null;

  return (
    <>
      {/* Desktop Floating Right Action Widget */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-5">
        <button
          onClick={onOpenConsultation}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#edd097] to-[#c59d5f] text-black font-bold text-xs shadow-xl shadow-[#c59d5f]/25 hover:scale-105 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-black" />
          <span>Book Free Site Visit</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="w-12 h-12 rounded-full bg-[#161a22] border border-white/20 text-[#e0b875] flex items-center justify-center shadow-xl hover:scale-110 hover:border-[#c59d5f] transition-all"
            title="Call 9012098820"
          >
            <Phone className="w-5 h-5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-950/60 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f14]/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex-1 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/50"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 py-2.5 rounded-xl bg-[#c59d5f] text-black text-xs font-bold flex items-center justify-center gap-1"
        >
          <span>Free Visit</span>
        </button>
      </div>
    </>
  );
};
