import React from 'react';
import { Instagram, Phone, MessageCircle, MapPin, Mail, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090b0e] text-gray-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c59d5f] to-[#7f5d23] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#12151c] flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold tracking-widest text-[#d4af37] leading-none">KHAN</span>
                  <span className="text-[6px] tracking-wider text-white/80 font-medium leading-none mt-0.5">INTERIOR</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white font-display">Khan Interior</span>
                <p className="text-[11px] text-[#e0b875]">Bhiwadi • Rajasthan</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Bespoke interior design and factory-finished woodwork studio in Bhiwadi. Specialized in modular kitchens, 
              luxury wardrobes, living lounges, and commercial turnkey spaces.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-8 h-8 rounded-lg bg-[#c59d5f]/10 border border-[#c59d5f]/20 text-[#e0b875] flex items-center justify-center hover:bg-[#c59d5f] hover:text-black transition-all"
                aria-label="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Modular Kitchens (Acrylic & PU)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Floor-to-Ceiling Sliding Wardrobes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bronze Tinted Glass Profile Closets</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Living Room TV Walls & Louvers</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Reception & Boardrooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CNC Laser Jali Mandir Sanctuaries</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">French Wall Moulding & Wainscoting</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Coverage & Locations
            </h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_INFO.serviceAreas.slice(0, 6).map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#c59d5f] shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
              <li className="text-[#f1d092] font-medium pt-1">
                + Pan-India for Turnkey Projects
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-white font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-1.5 text-emerald-400">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Available 24/7</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @{BUSINESS_INFO.instagramHandle}
                </a>
              </p>
              <p className="text-[11px] text-gray-500 pt-2 leading-relaxed">
                {BUSINESS_INFO.fullAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Khan Interior Bhiwadi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>10-Year Termite Warranty</span>
            <span>•</span>
            <span>100% In-House Factory Cutting</span>
            <span>•</span>
            <span>45-Day Handover</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
