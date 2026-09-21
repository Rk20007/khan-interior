import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Khan Interior! I am interested in getting an interior design and woodwork quote for my home/office in Bhiwadi.'
  )}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0a0c0f]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c59d5f] to-[#7f5d23] p-[2px] shadow-lg shadow-[#c59d5f]/20">
              <div className="w-full h-full rounded-full bg-[#12151c] flex flex-col items-center justify-center text-center p-0.5">
                <span className="text-[10px] font-bold tracking-widest text-[#d4af37] leading-none">KHAN</span>
                <span className="text-[7px] tracking-wider text-white/80 font-medium leading-none mt-0.5">INTERIOR</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#c59d5f] transition-colors font-display">
                  Khan Interior
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-[#c59d5f]/15 text-[#e0b875] border border-[#c59d5f]/30">
                  <MapPin className="w-2.5 h-2.5" /> Bhiwadi
                </span>
              </div>
              <p className="text-[11px] text-gray-400 tracking-wide">Woodwork & Interior Design</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            <a href="#gallery" className="hover:text-[#c59d5f] transition-colors">
              Project Gallery
            </a>
            <a href="#services" className="hover:text-[#c59d5f] transition-colors">
              Services
            </a>
            <a href="#estimator" className="hover:text-[#c59d5f] transition-colors flex items-center gap-1.5 text-[#e0b875]">
              <Sparkles className="w-3.5 h-3.5 text-[#c59d5f]" />
              Cost Estimator
            </a>
            <a href="#instagram-feed" className="hover:text-[#c59d5f] transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              Instagram Showcase
            </a>
            <a href="#why-us" className="hover:text-[#c59d5f] transition-colors">
              Factory & Quality
            </a>
            <a href="#contact" className="hover:text-[#c59d5f] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              id="nav-call-btn"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 rounded-lg border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenConsultation}
              id="nav-consultation-btn"
              className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-[#e5c07b] via-[#c59d5f] to-[#aa803c] hover:brightness-110 rounded-lg shadow-md shadow-[#c59d5f]/20 transition-all cursor-pointer"
            >
              Free Site Visit
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-2.5 py-1.5 text-[11px] font-bold text-black bg-[#c59d5f] rounded-md"
            >
              Free Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e1117] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2.5 text-sm text-gray-200">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5"
            >
              Project Gallery
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5"
            >
              Services & Woodwork
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 text-[#e0b875] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Cost Estimator
            </a>
            <a
              href="#instagram-feed"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              Instagram (@{BUSINESS_INFO.instagramHandle})
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5"
            >
              Factory & 10-Yr Warranty
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-white/10 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              Call Now
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
