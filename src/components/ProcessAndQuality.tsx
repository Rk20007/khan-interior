import React from 'react';
import { 
  Factory, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Ruler, 
  Box, 
  Truck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/interiorData';

export const ProcessAndQuality: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Free On-Site Laser Measurement',
      desc: 'Our lead carpenter visits your flat in Bhiwadi/NCR to take millimeter-exact laser measurements and discuss your design priorities.',
      icon: Ruler
    },
    {
      step: '02',
      title: '3D Visualization & Transparent Quote',
      desc: 'Receive realistic 3D design renders, material swatches (acrylic, PU, quartz), and an itemized bill of quantities with zero hidden markups.',
      icon: Box
    },
    {
      step: '03',
      title: 'Computerized Factory Woodwork',
      desc: 'Carcase, panels, and shutters are pre-cut and edge-banded in our Bhiwadi factory, minimizing dust and disturbance at your home.',
      icon: Factory
    },
    {
      step: '04',
      title: '45-Day Clean Handover & Warranty',
      desc: 'Professional installation, hardware alignment, deep-cleaning, and issuance of your 10-Year Termite & Ply Warranty card.',
      icon: Truck
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0d0f12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Khan Interior Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Why Homeowners in Bhiwadi <span className="gold-gradient-text">Trust Our Work</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Unlike local unorganized carpenters or middlemen, we own our production machinery, 
            guarantee genuine BWP marine grade plywood, and deliver on exact schedules.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#12151c] border border-white/10 hover:border-[#c59d5f]/40 transition-all group space-y-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c59d5f]/10 border border-[#c59d5f]/30 flex items-center justify-center text-[#e0b875] group-hover:bg-[#c59d5f] group-hover:text-black transition-colors">
                {idx === 0 && <Factory className="w-6 h-6" />}
                {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                {idx === 2 && <Clock className="w-6 h-6" />}
                {idx === 3 && <BadgePercent className="w-6 h-6" />}
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Execution Journey */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141822] to-[#0e1117] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59d5f]">
              Seamless 4-Step Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
              How Your Interior Project Comes to Life
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div key={idx} className="relative space-y-3 p-5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#c59d5f] px-2.5 py-1 rounded bg-[#c59d5f]/10 border border-[#c59d5f]/20">
                      Step {s.step}
                    </span>
                    <IconComp className="w-5 h-5 text-gray-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Societies Served Trust Badge Strip */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center sm:text-left">
              Active Project Handover Experience Across Major Bhiwadi Societies:
            </p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {BUSINESS_INFO.societiesServed.map((soc, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#c59d5f]" />
                  {soc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
