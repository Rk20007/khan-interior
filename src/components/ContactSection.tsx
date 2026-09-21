import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    society: '',
    bhk: '3bhk',
    scope: 'Full Interior & Kitchen',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const getWhatsAppSubmissionUrl = () => {
    const text = `Hello Khan Interior! I am submitting a consultation request from your website:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Society/Location: ${formData.society || 'Bhiwadi'}
- Property Type: ${formData.bhk.toUpperCase()}
- Scope: ${formData.scope}
- Message: ${formData.message || 'Please contact me for site measurement'}`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0f12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Master Craftsmen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Book Your Free <span className="gold-gradient-text">Site Consultation</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Have an apartment in Bhiwadi, Dharuhera, or Neemrana? Call or WhatsApp us directly on 
            <strong className="text-white"> {BUSINESS_INFO.phone}</strong> for free laser site measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#12151c] border border-white/10 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Khan Interior Studio & Workshop
                </h3>
                <p className="text-xs text-[#e0b875] mt-1 font-medium">
                  {BUSINESS_INFO.subHeading}
                </p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-4 text-xs text-gray-300">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#c59d5f]/10 border border-[#c59d5f]/30 flex items-center justify-center text-[#e0b875] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Direct Call & WhatsApp:</span>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-white font-bold text-sm hover:text-[#f1d092] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Available 7 Days a week</span>
                  </div>
                </div>

                {/* WhatsApp button */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-emerald-300 block text-[11px]">Instant WhatsApp Chat:</span>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold hover:underline"
                    >
                      Chat with Project Manager
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#c59d5f]/10 border border-[#c59d5f]/30 flex items-center justify-center text-[#e0b875] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Workshop & Studio Location:</span>
                    <p className="text-white font-medium">
                      {BUSINESS_INFO.fullAddress}
                    </p>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      Bhiwadi, Alwar District, Rajasthan 301019
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Instagram Profile:</span>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 font-semibold hover:underline"
                    >
                      @{BUSINESS_INFO.instagramHandle}
                    </a>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      7,640+ followers • Live project videos
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#c59d5f]/10 border border-[#c59d5f]/30 flex items-center justify-center text-[#e0b875] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Working Hours:</span>
                    <p className="text-white font-medium">Monday - Saturday: 9:30 AM – 8:30 PM</p>
                    <p className="text-gray-400 text-[10px]">Sunday: By Prior Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#12151c] border border-white/10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-display">
                  Request a Free On-Site Measurement
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Fill in your property details and our lead design engineer will contact you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                    Your site consultation request has been received. Our team will contact you shortly on{' '}
                    <strong className="text-white">{formData.phone}</strong>.
                  </p>
                  <div className="pt-2">
                    <a
                      href={getWhatsAppSubmissionUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-950/40"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robin Khan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Mobile Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9012098820"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Society / Sector in Bhiwadi / NCR
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ashiana Town / Terra Elegance"
                        value={formData.society}
                        onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Configuration
                      </label>
                      <select
                        value={formData.bhk}
                        onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#181d27] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c59d5f] transition-colors"
                      >
                        <option value="1bhk">1 BHK Apartment</option>
                        <option value="2bhk">2 BHK Apartment</option>
                        <option value="3bhk">3 BHK Apartment</option>
                        <option value="4bhk">4 BHK / Penthouse</option>
                        <option value="villa">Independent Villa / Kothi</option>
                        <option value="office">Commercial Office / Clinic</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                      Interested Scope
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#181d27] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c59d5f] transition-colors"
                    >
                      <option value="Full Interior & Kitchen">Complete Home Woodwork (Kitchen + Wardrobes + TV Unit)</option>
                      <option value="Modular Kitchen Only">Modular Kitchen Only (Acrylic / PU / Laminate)</option>
                      <option value="Wardrobes Only">Wardrobes & Walk-In Closets Only</option>
                      <option value="Commercial Office Fitout">Commercial Office & Reception Desk</option>
                      <option value="Living Room & TV Console">Living Room TV Wall & False Ceiling</option>
                      <option value="Mandir & Woodwork">Mandir & Specialized Carpentry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                      Specific Requirements / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need quick handover by next month, prefer sage green kitchen..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl text-xs font-bold text-black bg-[#c59d5f] hover:bg-[#d8af6f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c59d5f]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Free Site Measurement</span>
                    </button>

                    <a
                      href={getWhatsAppSubmissionUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-gray-500 text-center pt-1">
                    🔒 Zero obligations. Free site consultation across all sectors in Bhiwadi, Dharuhera & Neemrana.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
