import React from 'react';
import { Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Khan Interior! I saw your interior work in Bhiwadi and would like a quote for my apartment/office.'
  )}`;

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cinematic Background with Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Khan Interior Luxury Interior Living and Woodwork Design"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/60 to-[#0d0f12]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-[#c59d5f]/15 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Location & Instagram Trust Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c59d5f]/30 text-xs text-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-[#f1d092]">Khan Interior Bhiwadi</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">Modular Kitchen • Wardrobes • Office Interior</span>
              <span className="text-gray-400">|</span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1d092] hover:underline font-medium"
              >
                @{BUSINESS_INFO.instagramHandle} ({BUSINESS_INFO.followersCount})
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Architectural Luxury & <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Precision Factory Woodwork</span> <br />
              Tailored for Bhiwadi Living.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Transform your apartment or commercial office with 100% in-house manufactured modular kitchens, 
              sliding glass wardrobes, feature TV lounges, and sacred mandir woodwork. Crafted with certified BWP 710 marine ply.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs sm:text-sm text-gray-300 max-w-xl">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0" />
                <span>10-Yr Termite Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0" />
                <span>45-Day Handover</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0" />
                <span>Free On-Site 3D Quote</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenConsultation}
                id="hero-book-visit-btn"
                className="px-6 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-[#edd097] via-[#c59d5f] to-[#a37936] hover:brightness-110 shadow-lg shadow-[#c59d5f]/25 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Book Free Site Measurement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#gallery"
                className="px-5 py-3.5 rounded-xl font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center text-sm"
              >
                View Latest Projects
              </a>
            </div>
          </div>

          {/* Quick Consultation Highlight Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c59d5f]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c59d5f]/20 border border-[#c59d5f]/40 flex items-center justify-center text-[#e5c07b]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Consultation</h3>
                  <p className="text-xs text-gray-400">Available across Bhiwadi & Dharuhera</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Planning interiors for an apartment in <strong className="text-white">Ashiana, BDI, Terra, Avalon, or Genesis</strong>? 
                Get our interior master craftsmen to visit your site with laminate swatches & hardware catalogs.
              </p>

              <div className="space-y-2.5 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Direct Contact:</span>
                  <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-[#f1d092] font-semibold hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Workshop:</span>
                  <span className="text-gray-200">Near Alwar Bypass, Bhiwadi</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Design Timeline:</span>
                  <span className="text-emerald-400 font-medium">3D render in 48 hrs</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-lg text-xs font-bold text-black bg-[#c59d5f] hover:bg-[#d8af6f] transition-all cursor-pointer"
              >
                Schedule Site Visit Now
              </button>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-display">550+</p>
              <p className="text-xs text-gray-400">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-display">10 Years</p>
              <p className="text-xs text-gray-400">Termite & Ply Warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-display">45 Days</p>
              <p className="text-xs text-gray-400">Guaranteed Handover</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-display">7,640+</p>
              <p className="text-xs text-gray-400">Instagram Community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#gallery"
        aria-label="Scroll down to gallery"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#c59d5f] transition-colors flex-col items-center gap-1 text-[11px]"
      >
        <span>Explore Designs</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
