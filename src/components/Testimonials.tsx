import React from 'react';
import { Star, MessageSquare, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/interiorData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0c0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Words from Our <span className="gold-gradient-text">Delighted Clients</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Read real experiences from families and business owners who entrusted their interior design to Khan Interior Bhiwadi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#12151c] border border-white/10 relative overflow-hidden flex flex-col justify-between space-y-4 shadow-xl hover:border-[#c59d5f]/40 transition-all"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 pointer-events-none" />

              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">{item.date}</span>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-[#e0b875] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#c59d5f]" />
                    {item.location}
                  </p>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
