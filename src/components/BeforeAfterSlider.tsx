import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, MapPin } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-[#0a0c0f] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c59d5f]/10 border border-[#c59d5f]/30 text-xs text-[#e0b875] mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Transformation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            From Raw Bare-Shell to <span className="gold-gradient-text">Finished Luxury</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Drag the slider horizontally to see the actual transformation delivered by Khan Interior craftsmen in Bhiwadi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Frame */}
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-2xl border border-white/10"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* "After" Image (Complete Luxury Finished by Khan Interior) */}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
              alt="Khan Interior After: Completed Luxury Living and Woodwork"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-lg flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AFTER: Khan Interior Handover</span>
            </div>

            {/* "Before" Image (Raw Unfurnished Structure) clipped */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1600&q=85"
                alt="Before: Raw Unfinished Apartment Space"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-gray-300 text-xs font-bold shadow-lg">
                BEFORE: Raw Site
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#f0d49a] shadow-[0_0_15px_rgba(240,212,154,0.8)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#12151c] border-2 border-[#f0d49a] flex items-center justify-center shadow-xl text-[#f0d49a]">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Location & Project Details Footer */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-gray-400 px-2 gap-2">
            <div className="flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>Actual Handover at Ashiana Town, Bhiwadi (3BHK Flat)</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Duration: <strong className="text-white">35 Days</strong></span>
              <span>•</span>
              <span>Scope: <strong className="text-[#e0b875]">Kitchen + 3 Wardrobes + False Ceiling</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
