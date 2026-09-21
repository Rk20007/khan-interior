import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [society, setSociety] = useState('');
  const [bhk, setBhk] = useState('3bhk');
  const [scope, setScope] = useState('Modular Kitchen + Wardrobes');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Khan Interior! I would like to book a Free On-Site Measurement in Bhiwadi:
- Name: ${name}
- Phone: ${phone}
- Society/Area: ${society || 'Bhiwadi'}
- Property: ${bhk.toUpperCase()}
- Scope: ${scope}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#12151c] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Site Visit Requested!
            </h3>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              We have noted your details. Our master carpenter will call you on{' '}
              <strong className="text-white">{phone}</strong> to confirm your convenient timing.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1 text-[#c59d5f] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Service</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Book Free Site Measurement
            </h3>
            <p className="text-xs text-gray-400 mt-1 mb-5">
              Available across all residential societies and commercial zones in Bhiwadi & Dharuhera.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robin Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Contact Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9012098820"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Society / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ashiana Town"
                    value={society}
                    onChange={(e) => setSociety(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Property Size
                  </label>
                  <select
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#171a23] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c59d5f]"
                  >
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK / Villa</option>
                    <option value="office">Commercial Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Primary Scope
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#171a23] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c59d5f]"
                >
                  <option value="Modular Kitchen + Wardrobes">Modular Kitchen + Wardrobes</option>
                  <option value="Full Apartment Woodwork">Complete 360° Interior Handover</option>
                  <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                  <option value="Commercial Reception / Office">Commercial Office Fitout</option>
                  <option value="Living Room TV Unit & Ceiling">Living Room TV Unit & Ceiling</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-black bg-[#c59d5f] hover:bg-[#d8af6f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c59d5f]/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Free Site Visit</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-gray-400">Prefer direct call? </span>
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-[#f1d092] font-semibold text-[11px] hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
