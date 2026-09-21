import React, { useState } from 'react';
import { X, MapPin, Clock, ShieldCheck, Check, MessageCircle, Phone, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { BUSINESS_INFO } from '../data/interiorData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const images = [project.imageUrl, ...(project.additionalImages || [])];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Khan Interior! I really liked your project "${project.title}" (${project.location}). I would like to discuss a similar woodwork/interior design for my property.`
  )}`;

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#101319] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141822]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#c59d5f]/15 text-[#f0d49a] border border-[#c59d5f]/30">
                {project.type} • {project.categoryLabel}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#c59d5f]" />
                {project.location}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1 font-display">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Display */}
          <div className="relative rounded-xl overflow-hidden bg-black/50 aspect-video max-h-[380px] shadow-inner group">
            <img
              src={images[activeImageIdx]}
              alt={`${project.title} - View ${activeImageIdx + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-xs text-white font-medium backdrop-blur-sm">
                  {activeImageIdx + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails if multiple images */}
          {images.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIdx === idx ? 'border-[#c59d5f] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="text-sm text-gray-300 leading-relaxed">
            <p>{project.description}</p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Scope of Work */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2.5">
              <h3 className="text-xs font-bold text-[#f1d092] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Scope of Work Executed
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials & Hardware */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2.5">
              <h3 className="text-xs font-bold text-[#f1d092] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Materials & Hardware Spec
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {project.materials.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#c59d5f] mt-0.5 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-between p-3.5 rounded-xl bg-[#141822] border border-white/5 text-xs text-gray-300 gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c59d5f]" />
              <span>Project Handover: <strong className="text-white">{project.completionTime}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Warranty: <strong className="text-white">10 Years Termite Guarantee</strong></span>
            </div>
            {project.instagramPostRef && (
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-1"
              >
                <span>{project.instagramPostRef}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-white/10 bg-[#141822] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            <span>Want a customized quotation for this exact design?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>Call 9012098820</span>
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
