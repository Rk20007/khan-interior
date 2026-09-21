import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Check, MessageCircle, RefreshCw, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/interiorData';

type PropertyType = '1bhk' | '2bhk' | '3bhk' | '4bhk' | 'villa' | 'office';
type FinishTier = 'essential' | 'premium' | 'ultra';

interface ScopeOption {
  id: string;
  name: string;
  category: string;
  baseCost: number; // in INR
  description: string;
}

const SCOPE_ITEMS: ScopeOption[] = [
  {
    id: 'kitchen',
    name: 'Modular Kitchen (BWP Marine Ply)',
    category: 'Kitchen',
    baseCost: 135000,
    description: 'L-shape / Parallel layout, soft-close Blum/Hettich tandem boxes, cutlery trays & under-cabinet LED'
  },
  {
    id: 'master-wardrobe',
    name: 'Master Bedroom Wardrobe (Full Height)',
    category: 'Wardrobe',
    baseCost: 85000,
    description: 'Floor-to-ceiling sliding or glass profile with loft storage, integrated drawers & vanity'
  },
  {
    id: 'guest-wardrobe',
    name: 'Guest / Kids Bedroom Wardrobe',
    category: 'Wardrobe',
    baseCost: 65000,
    description: 'Full-height 2-door or 3-door customized wardrobe with lockable drawers'
  },
  {
    id: 'tv-unit',
    name: 'Living Room TV Console & Feature Wall',
    category: 'Living',
    baseCost: 45000,
    description: 'Charcoal louvers or marble sheet backdrop, floating media console with hidden wire raceways'
  },
  {
    id: 'mandir',
    name: 'Vastu Mandir with CNC Jali',
    category: 'Pooja',
    baseCost: 32000,
    description: 'Teak/HDMR carved temple with backlit acrylic cutwork, bells, and sacred drawers'
  },
  {
    id: 'false-ceiling',
    name: 'Designer Gypsum False Ceiling & Cove',
    category: 'Ceiling',
    baseCost: 55000,
    description: 'Gyproc boards, perimeter ambient cove lighting and magnetic track light channels'
  },
  {
    id: 'wall-moulding',
    name: 'French Wall Wainscoting & Panelling',
    category: 'Walls',
    baseCost: 35000,
    description: 'Polyurethane neoclassical mouldings, accent paints & brass sconces'
  },
  {
    id: 'doors-fittings',
    name: 'Custom Flush Doors & Main Door Panelling',
    category: 'Woodwork',
    baseCost: 40000,
    description: 'High-gloss laminate flush doors, fluted handle grips and Yale/Godrej locksets'
  }
];

export const CostEstimator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<PropertyType>('3bhk');
  const [finishTier, setFinishTier] = useState<FinishTier>('premium');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'kitchen',
    'master-wardrobe',
    'tv-unit',
    'false-ceiling'
  ]);

  // Adjust multiplier based on property scale
  const propertyMultiplier = useMemo(() => {
    switch (propertyType) {
      case '1bhk': return 0.85;
      case '2bhk': return 1.0;
      case '3bhk': return 1.25;
      case '4bhk': return 1.5;
      case 'villa': return 1.85;
      case 'office': return 1.2;
      default: return 1.0;
    }
  }, [propertyType]);

  // Finish tier multiplier
  const finishMultiplier = useMemo(() => {
    switch (finishTier) {
      case 'essential': return 0.9; // Matt Laminates, standard hardware
      case 'premium': return 1.15; // High-Gloss Acrylic, soft-close Blum/Hettich
      case 'ultra': return 1.45; // PU Duco, Bronze Glass profiles, Veneer polish
      default: return 1.0;
    }
  }, [finishTier]);

  // Calculate estimated total
  const estimatedTotal = useMemo(() => {
    const rawSum = selectedItems.reduce((acc, itemId) => {
      const item = SCOPE_ITEMS.find((s) => s.id === itemId);
      return acc + (item ? item.baseCost : 0);
    }, 0);

    return Math.round(rawSum * propertyMultiplier * finishMultiplier);
  }, [selectedItems, propertyMultiplier, finishMultiplier]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedItems(SCOPE_ITEMS.map((s) => s.id));
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  // Format currency
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // WhatsApp link with structured pre-filled text
  const getWhatsAppEstimateUrl = () => {
    const selectedNames = selectedItems
      .map((id) => SCOPE_ITEMS.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hello Khan Interior! I used your online Cost Estimator on your website:
- Property: ${propertyType.toUpperCase()}
- Finish Tier: ${finishTier.toUpperCase()}
- Selected Scope: ${selectedNames}
- Estimated Total: ${formatINR(estimatedTotal)}

Can we schedule a free site visit in Bhiwadi to verify measurements and get an exact quote?`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="py-24 bg-[#0d0f12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Transparent <span className="gold-gradient-text">Interior Cost Estimator</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Get an instant realistic woodwork and interior estimate for your apartment in Bhiwadi. No hidden markups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Property Type + Finish Tier + Checklist */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Property Type */}
            <div className="p-5 rounded-2xl bg-[#12151c] border border-white/10 space-y-3">
              <label className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
                1. Select Property Type:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {(['1bhk', '2bhk', '3bhk', '4bhk', 'villa', 'office'] as PropertyType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setPropertyType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                      propertyType === type
                        ? 'bg-[#c59d5f] text-black shadow-md shadow-[#c59d5f]/20'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality & Finish Tier */}
            <div className="p-5 rounded-2xl bg-[#12151c] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                  2. Select Material & Finish Tier:
                </label>
                <span className="text-[11px] text-gray-400">All tiers include 10-Yr Ply Warranty</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setFinishTier('essential')}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    finishTier === 'essential'
                      ? 'bg-[#c59d5f]/15 border-[#c59d5f] text-white'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <p className="text-xs font-bold text-[#f1d092]">Essential Quality</p>
                  <p className="text-[11px] text-gray-300 mt-1">Century MR Plywood + Textured Matte Laminates + Hafele hinges</p>
                </button>

                <button
                  onClick={() => setFinishTier('premium')}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    finishTier === 'premium'
                      ? 'bg-[#c59d5f]/20 border-[#c59d5f] text-white shadow-lg'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#f1d092]">Premium Acrylic (Most Popular)</p>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-1">BWP 710 Marine Ply + Anti-Scratch High-Gloss Acrylic + Hettich soft-close</p>
                </button>

                <button
                  onClick={() => setFinishTier('ultra')}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    finishTier === 'ultra'
                      ? 'bg-[#c59d5f]/15 border-[#c59d5f] text-white'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <p className="text-xs font-bold text-[#f1d092]">Ultra Luxe Architect</p>
                  <p className="text-[11px] text-gray-300 mt-1">Action TESA HDHMR + PU Duco Paint + Tinted Glass Profiles + Blum Servo</p>
                </button>
              </div>
            </div>

            {/* Step 3: Scope Checklist */}
            <div className="p-5 rounded-2xl bg-[#12151c] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                  3. Select Rooms & Woodwork Scope:
                </label>
                <div className="flex gap-3 text-xs">
                  <button onClick={selectAll} className="text-[#c59d5f] hover:underline">
                    Select All
                  </button>
                  <button onClick={clearAll} className="text-gray-400 hover:underline">
                    Clear
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {SCOPE_ITEMS.map((item) => {
                  const isChecked = selectedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-white/10 border-[#c59d5f]/50 text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#c59d5f] border-[#c59d5f] text-black font-bold'
                              : 'border-gray-600 bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className={`text-xs font-bold ${isChecked ? 'text-white' : 'text-gray-300'}`}>
                            {item.name}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-semibold text-[#f1d092] shrink-0">
                        {formatINR(Math.round(item.baseCost * propertyMultiplier * finishMultiplier))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card (Sticky summary) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#161a24] to-[#10131a] border border-[#c59d5f]/30 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c59d5f]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59d5f]">
                  Estimated Investment
                </span>
                <div className="mt-1 text-3xl sm:text-4xl font-bold text-white font-display">
                  {formatINR(estimatedTotal)}
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Includes material, fabrication, 3D design, hardware, transport & installation.
                </p>
              </div>

              {/* Breakdown metrics */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Configuration:</span>
                  <span className="font-semibold text-white uppercase">{propertyType} Flat</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Finish:</span>
                  <span className="font-semibold text-[#f1d092] capitalize">{finishTier} Grade</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Selected Items:</span>
                  <span className="font-semibold text-white">{selectedItems.length} components</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Warranty:</span>
                  <span className="font-semibold text-emerald-400">10 Years Termite Guarantee</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Delivery:</span>
                  <span className="font-semibold text-white">45 Days Guaranteed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={getWhatsAppEstimateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <p className="text-[10px] text-gray-400 text-center leading-normal">
                  *This estimate is an indicative reference based on standard apartment sizes in Bhiwadi. 
                  Exact quote confirmed after complimentary on-site laser measurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
