import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  DoorClosed, 
  Tv, 
  Briefcase, 
  Flame, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/interiorData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5" />;
      case 'DoorClosed': return <DoorClosed className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0c0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Factory-Finished Woodwork</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Comprehensive Interior & <span className="gold-gradient-text">Carpentry Services</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Every piece is engineered in our dedicated workshop with computerized edging, high-grade adhesives, 
            and branded European hardware for lifelong durability in Rajasthan's climate.
          </p>
        </div>

        {/* Interactive Service Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            {SERVICES.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#151922] border-l-4 border-l-[#c59d5f] border-t border-r border-b border-white/10 shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#c59d5f] text-black font-bold'
                          : 'bg-white/5 text-[#c59d5f] group-hover:bg-[#c59d5f]/20'
                      }`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{service.shortDesc}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#c59d5f] translate-x-1' : 'text-gray-600 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: In-depth Service Showcase Card */}
          <div className="lg:col-span-8 bg-[#12151c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative min-h-[260px] md:min-h-[420px]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151c] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#12151c]" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-[#f1d092] font-semibold">
                  Starts at {activeService.startingPrice}
                </div>
              </div>

              {/* Content Details side */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59d5f]">
                      Specialized Craftsmanship
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {activeService.warranty}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display">
                    {activeService.title}
                  </h3>

                  <p className="text-xs text-gray-300 mt-2.5 leading-relaxed">
                    {activeService.longDesc}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                      Key Highlights & Specs:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {activeService.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c59d5f] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Finishes */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Available Finishes:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.popularFinishes.map((finish, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-medium"
                        >
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-[#c59d5f] hover:bg-[#d8af6f] transition-all text-center cursor-pointer shadow-md"
                  >
                    Get Quote for {activeService.title}
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Khan Interior, I would like to inquire about ${activeService.title} for my house in Bhiwadi.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all text-center"
                  >
                    WhatsApp Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
