import { Project, ServiceItem, Testimonial, InstagramPost } from '../types';

export const BUSINESS_INFO = {
  name: 'Khan Interior',
  subHeading: 'Interior | Woodwork & Design',
  tagline: 'Crafting Bespoke Living Spaces & Commercial Excellence in Bhiwadi & Beyond',
  phone: '+91 90120 98820',
  rawPhone: '9012098820',
  whatsappNumber: '919012098820',
  email: 'contact@khaninteriorbhiwadi.com',
  instagramHandle: 'khan_interior_bhiwadi',
  instagramUrl: 'https://www.instagram.com/khan_interior_bhiwadi/',
  followersCount: '7,640+',
  projectsCompleted: '550+',
  yearsExperience: '12+',
  warrantyYears: '10 Years',
  location: 'Bhiwadi, Rajasthan',
  fullAddress: 'Plot No. 42, Near Alwar Bypass Road, Bhiwadi Industrial Area, Rajasthan 301019',
  serviceAreas: [
    'Bhiwadi (All Major Societies)',
    'Dharuhera',
    'Neemrana',
    'Rewari',
    'Gurgaon / Gurugram',
    'Manesar',
    'Alwar',
    'Delhi NCR',
    'Serving All Over India'
  ],
  societiesServed: [
    'Ashiana Town',
    'Ashiana Nirmay',
    'Ashiana Tarang',
    'Terra Elegance',
    'BDI Sunshine City',
    'Avalon Regal Homes',
    'Cosmos Greens',
    'Genesis Sky Heights',
    'Krish City Heights',
    'Trehan Vivanta'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'teal-modular-kitchen-ashiana',
    title: 'Dual-Tone Teal & Pearl Acrylic Modular Kitchen',
    category: 'kitchen',
    categoryLabel: 'Modular Kitchen',
    type: 'Residential',
    location: 'Ashiana Town, Bhiwadi',
    scope: ['L-Shaped Modular Kitchen', 'Quartz Stone Countertop', 'Tandem Soft-Close Boxes', 'Under-Cabinet Profile Lighting'],
    materials: ['Century Pro 710 Marine Grade BWP Plywood', 'Anti-Scratch High-Gloss Acrylic', 'Hettich Sensys Hinges', 'Kaff Chimney & Hob'],
    description: 'A bespoke contemporary kitchen executed for a 3BHK residence. Features deep teal lower cabinetry paired with glossy pearl-white overhead hydraulic cabinets, seamless Gola profile handles, and warm 3000K LED under-cabinet illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: ['100% Boiling Water Proof (BWP) Marine Ply', 'Soft-close soft-motion cutlery trays', 'Concealed LED strip profiles', 'Stainless Steel 304 spice pullouts'],
    completionTime: '24 Days',
    featured: true,
    instagramPostRef: 'Featured in latest Instagram Reel #BhiwadiKitchen'
  },
  {
    id: 'fluted-corporate-reception-bhiwadi',
    title: 'Slatted Wood & Marble Corporate Reception',
    category: 'commercial',
    categoryLabel: 'Office & Commercial',
    type: 'Commercial',
    location: 'RIICO Industrial Area, Bhiwadi',
    scope: ['Reception Desk', 'Acoustic Fluted Wall Cladding', 'Backlit Signage', 'Guest Lounge Panelling'],
    materials: ['Action TESA HDHMR', 'Natural Teak Fluted Louvers', 'Backlit Translucent Onyx Sheet', 'Warm Cove Light Bars'],
    description: 'Executive front-desk reception and welcoming lounge designed for a leading manufacturing headquarters in Bhiwadi. Custom slatted wooden fins merge with warm cove illumination and a floating reception counter.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: ['Acoustic sound-dampening louvers', 'Integrated cable management', 'High-durability matte PU finish', 'Backlit company brass emblem'],
    completionTime: '18 Days',
    featured: true,
    instagramPostRef: 'Featured in Instagram Showcase @khan_interior_bhiwadi'
  },
  {
    id: 'tinted-glass-sliding-wardrobe',
    title: 'Floor-to-Ceiling Tinted Glass Sliding Wardrobe',
    category: 'wardrobe',
    categoryLabel: 'Luxury Wardrobe',
    type: 'Residential',
    location: 'Terra Elegance, Bhiwadi',
    scope: ['3-Door Sliding Wardrobe', 'Internal Motion-Sensor Lighting', 'Integrated Dressing Mirror & Vanity', 'Jewelry Drawer Island'],
    materials: ['Slim Aluminum Fluted Profiles', 'Bronze Toughened Reflective Glass', 'Ebony Wood Grain Interior Laminate', 'Blum TopLine Slide Hardware'],
    description: 'Grand master bedroom wardrobe solution that stretches 10 feet high to the ceiling. Custom bronze tinted glass reflects ambient room lighting while illuminating automatically with warm recessed LEDs upon opening.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: ['Anti-jump heavy-duty rollers', 'Internal motion-activated lighting', 'Velvet-lined accessories & watch tray', 'Concealed locker compartment'],
    completionTime: '14 Days',
    featured: true,
    instagramPostRef: 'Featured on @khan_interior_bhiwadi'
  },
  {
    id: 'luxury-tv-unit-charcoal-louvers',
    title: 'Backlit Alabaster & Charcoal Louver TV Wall',
    category: 'living',
    categoryLabel: 'Living & TV Unit',
    type: 'Residential',
    location: 'BDI Sunshine City, Bhiwadi',
    scope: ['Feature TV Wall Cladding', 'Floating Console Unit', 'Indirect Perimeter Lighting', 'Curated Display Shelves'],
    materials: ['Charcoal PVC Louver Panels', 'Backlit Translucent Alabaster', 'Matt PU Lacquered Floating Console', 'Brushed Brass Inlay Strips'],
    description: 'A striking focal point for the main drawing hall. Built with precision charcoal-toned fluted panels flanking a backlit translucent stone slab, topped with a floating media console with hidden wire raceways.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: ['100% wire-free minimalist look', 'Zero-glare indirect warm lighting', 'Heavy-load cantilevered wall mount', 'Scratch-resistant top surface'],
    completionTime: '10 Days',
    featured: true,
    instagramPostRef: 'Popular Post: 15K+ Views on Instagram'
  },
  {
    id: 'sacred-cnc-jali-mandir',
    title: 'Intricate CNC Jali & Teak Sanctum Mandir',
    category: 'mandir',
    categoryLabel: 'Mandir & Woodwork',
    type: 'Residential',
    location: 'Avalon Regal Homes, Bhiwadi',
    scope: ['Traditional Pooja Sanctum', 'Laser-Cut CNC Jali Shutters', 'Backlit Om Acrylic Artwork', 'Bhojan Prasad Pullout Shelf'],
    materials: ['Grade-A Burma Teak Wood Finish', 'High-Density Corian/Acrylic CNC Jali', 'Solid Brass Bells and Hinges', 'Warm LED Backlit Glow'],
    description: 'A deeply peaceful and artistic prayer sanctuary built according to Vastu principles. Designed with dual laser-engraved jali panels that cast intricate geometric shadows when lit from within.',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: ['Vastu Shastra compliant orientation', 'Telescopic drawer runners for havan items', 'Heat and smoke resistant ceiling shield', 'Custom brass bell hangings'],
    completionTime: '12 Days',
    featured: true,
    instagramPostRef: 'Special Mandir Project #KhanInteriorBhiwadi'
  },
  {
    id: 'executive-conference-office-fitout',
    title: 'Modern Executive Conference Room & Boardroom',
    category: 'commercial',
    categoryLabel: 'Office & Commercial',
    type: 'Commercial',
    location: 'Dharuhera Industrial Hub, Haryana / Bhiwadi Border',
    scope: ['16-Seater Executive Conference Table', 'Acoustic Wall Panels', 'Integrated AV False Ceiling', 'Glass Partitions'],
    materials: ['Walnut Veneer with High-Gloss Melamine', 'Sound-absorbing fabric panels', 'Slim Aluminum Grid', 'LED Magnetic Track Lights'],
    description: 'A turnkey boardroom transformation crafted for high-stakes corporate discussions. Includes a monolithic 18-foot conference table with pop-up motorized power sockets and acoustic wall paneling.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Motorized concealed data & power ports', 'NRC 0.85 acoustic wall dampening', 'Magnetic track lighting with dimmer', 'Precision edge-banding'],
    completionTime: '22 Days',
    featured: false,
    instagramPostRef: 'Commercial Portfolio @khan_interior_bhiwadi'
  },
  {
    id: 'master-bedroom-wainscoting-suite',
    title: 'Neo-Classical Wainscoting & Fluted Master Bedroom',
    category: 'living',
    categoryLabel: 'Living & Bedroom',
    type: 'Residential',
    location: 'Genesis Sky Heights, Bhiwadi',
    scope: ['Classical Wall Moulding Panels', 'Custom Fluted Bed Headboard', 'Matching Floating Nightstands', 'Curved Gypsum False Ceiling'],
    materials: ['High-Density Polyurethane Wall Mouldings', 'Suede Velvet Upholstery', 'PU Matt Finished Nightstands', 'Warm Perimeter Cove LED'],
    description: 'Timeless European charm meets modern clean lines. The accent wall is framed with layered French wainscoting and warm ambient wall sconces, anchoring a customized oversized velvet channel bed.',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Zero-crack polyurethane mouldings', 'Seamless hidden junction boxes', 'Luxury touch-sensitive lighting', 'Solid wood bed carcass'],
    completionTime: '16 Days',
    featured: false
  },
  {
    id: 'sage-green-acrylic-kitchen',
    title: 'Sage Green & Champagne Modular Island Kitchen',
    category: 'kitchen',
    categoryLabel: 'Modular Kitchen',
    type: 'Residential',
    location: 'Trehan Vivanta, Alwar Bypass Road, Bhiwadi',
    scope: ['Island Kitchen Layout', 'Breakfast Bar Woodwork', 'Tall Pantry Unit with Servo-Drive', 'Loft Storage'],
    materials: ['Action TESA HDHMR Board', 'Matte Sage Green Acrylic', 'Kalinga Gold Quartz', 'Hafele Soft-Close Hardware'],
    description: 'An airy, modern culinary space featuring an open breakfast bar island, custom ceiling suspended wine and glass rack, and a tall rolling pantry unit for optimal space utilization.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Anti-fingerprint matte acrylic finish', 'Hafele 6-tier pullout tall unit', 'Concealed waste sorting bins', 'Under-island ambient footlights'],
    completionTime: '21 Days',
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchens',
    shortDesc: 'Ergonomic, water-proof, and fire-retardant kitchen solutions tailored to your culinary habits.',
    longDesc: 'From compact L-shaped kitchens in Bhiwadi apartments to grand open-concept island layouts, we manufacture precision modular kitchens in our specialized factory using 100% Boiling Water Proof (BWP) marine ply and European soft-close systems.',
    iconName: 'UtensilsCrossed',
    features: [
      'BWP 710 Grade Marine Plywood (Termite & Borer Proof)',
      'High-Gloss Acrylic, PU Finish & Matte Laminates',
      'Hettich / Blum Soft-Close Tandem Drawers & Hinges',
      'Custom Quartz, Granite & Kalinga Countertops',
      'Built-in Microwave, Hob & Chimney Provision'
    ],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹1,25,000',
    popularFinishes: ['High-Gloss Acrylic', 'PU Duco Paint', 'Anti-Fingerprint Matte', 'Textured Laminate'],
    warranty: '10 Years Termite Guarantee'
  },
  {
    id: 'luxury-wardrobes',
    title: 'Designer Wardrobes & Walk-Ins',
    shortDesc: 'Floor-to-ceiling space-maximizing sliding, glass profile, and walk-in closet systems.',
    longDesc: 'Engineered for optimal organization. We craft full-height sliding wardrobes, tinted reflective glass shutters with integrated internal sensors, jewelry islands, and customized vanity dressers.',
    iconName: 'DoorClosed',
    features: [
      'Sliding, Openable & Aluminum Glass Profile Doors',
      'Toughened Tinted / Fluted / Lacquered Glass',
      'Automatic Motion-Sensor LED Profile Lights',
      'Integrated Dressing Vanity & Concealed Lockers',
      'Heavy-Duty Anti-Derail Roller Mechanisms'
    ],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹75,000',
    popularFinishes: ['Bronze Profile Glass', 'Suede Finish Laminate', 'Veneer with Melamine', 'Acrylic High-Gloss'],
    warranty: '10 Years Hardware & Ply Warranty'
  },
  {
    id: 'living-tv-units',
    title: 'Living Room TV Consoles & Walls',
    shortDesc: 'Showstopping feature walls combining charcoal louvers, marble veneer, and floating consoles.',
    longDesc: 'Transform your drawing hall into a luxurious hotel-grade lounge. We specialize in seamless wire-free TV units accented with acoustic louvers, backlit onyx stone, brass T-profiles, and illuminated floating shelves.',
    iconName: 'Tv',
    features: [
      'Acoustic Charcoal & Wooden Fluted Panelling',
      'Backlit Alabaster & Translucent Marble Slabs',
      'Floating Cantilevered Consoles with Wire Conduits',
      'Display Niches with Spot & Warm Cove Lighting',
      'Soundbar & Gaming Console Integrations'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹38,000',
    popularFinishes: ['Charcoal Louvers', 'PU Matte Console', 'Alabaster Sheet', 'High-Gloss Laminate'],
    warranty: '7 Years Craftsmanship Warranty'
  },
  {
    id: 'commercial-office',
    title: 'Commercial & Office Interiors',
    shortDesc: 'High-impact corporate receptions, executive cabins, retail showrooms, and clinics.',
    longDesc: 'Serving Bhiwadi, Dharuhera, Neemrana, and Gurgaon industrial sectors. We provide turnkey commercial fitouts including bespoke reception desks, boardroom conference tables, acoustic partition systems, and durable staff workstations.',
    iconName: 'Briefcase',
    features: [
      'Modern Reception Desks & Backlit Logo Panelling',
      'Executive Director Desks & Storage Credenzas',
      'Acoustic Boardroom Tables with Built-in Cable Raceways',
      'Toughened Glass & Aluminum Framed Partitions',
      'Fast-Track Handover for Zero Business Downtime'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹1,50,000',
    popularFinishes: ['Commercial Teak Veneer', 'Scratch-Proof Compact Laminate', 'Acoustic Fabric', 'Powder-Coated Aluminum'],
    warranty: '5 Years Commercial Warranty'
  },
  {
    id: 'mandir-pooja-units',
    title: 'Sacred Mandir & CNC Woodwork',
    shortDesc: 'Vastu-aligned custom prayer sanctuaries with intricate laser-cut jali and sacred motifs.',
    longDesc: 'Handcrafted spiritual spaces designed to bring serenity to your home. We merge traditional Indian woodcraft with contemporary CNC laser precision, offering sacred bell insets, brass accents, and custom storage for puja items.',
    iconName: 'Flame',
    features: [
      'Custom CNC Laser-Cut Geometric & Floral Jali',
      'Vastu-Compliant Dimensions & Directional Layout',
      'Solid Teak / Sheesham Wood Trims & Finishes',
      'Telescopic Prasad & Havan Drawer Trays',
      'Warm Sacred Backlighting & Brass Bell Hangings'
    ],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹28,000',
    popularFinishes: ['Burma Teak Polish', 'White Corian Jali', 'Gold Foil Inlays', 'Warm Backlit Acrylic'],
    warranty: 'Lifetime Termite Proofing'
  },
  {
    id: 'ceilings-mouldings',
    title: 'False Ceilings & Wall Mouldings',
    shortDesc: 'Architectural gypsum ceilings, magnetic track lighting, and French wainscoting.',
    longDesc: 'Elevate room volume and aesthetics with perimeter cove ceilings, minimalist wooden rafters, recessed magnetic track lights, and neoclassical wall mouldings that add depth and character to every wall.',
    iconName: 'Layers',
    features: [
      'Saint-Gobain Gypsum Board False Ceilings',
      'Concealed Magnetic Track Lights & COB Downlights',
      'Zero-Crack Polyurethane French Wall Wainscoting',
      'Wooden Rafters & Ceiling Accent Claddings',
      'Damp-Resistant Painting & Premium Textures'
    ],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    startingPrice: '₹95 / sq.ft',
    popularFinishes: ['Saint-Gobain Gyproc', 'Magnetic Track Black', 'French Polyurethane Moulding', 'Warm 3000K Cove'],
    warranty: '5 Years Finish Warranty'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Recent modular kitchen handover in Bhiwadi! Stunning teal acrylic finish with profile handles and LED cove lighting. 📞 9012098820 for inquiries.',
    likes: '842',
    category: 'Modular Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    tag: '#BhiwadiKitchen #KhanInterior',
    isVideo: true
  },
  {
    id: 'ig-2',
    caption: 'Corporate reception desk & acoustic wooden fluted wall done at Bhiwadi Industrial Area. Real factory woodwork finish.',
    likes: '1,204',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    tag: '#OfficeInterior #Bhiwadi',
    isVideo: false
  },
  {
    id: 'ig-3',
    caption: 'Floor to ceiling tinted glass sliding wardrobe with sensor profile light installed at Ashiana Town Bhiwadi. Call 9012098820.',
    likes: '976',
    category: 'Wardrobes',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    tag: '#WardrobeGoals #AshianaTown',
    isVideo: true
  },
  {
    id: 'ig-4',
    caption: 'Backlit alabaster & charcoal fluted TV unit in living room. Clean, wire-free modern look for a 3BHK flat.',
    likes: '1,530',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    tag: '#LivingRoomInterior #TVUnitDesign',
    isVideo: false
  },
  {
    id: 'ig-5',
    caption: 'Handcrafted Mandir unit with CNC laser jali cutting and warm backlight glow. Vastu compliant woodwork by Khan Interior.',
    likes: '890',
    category: 'Mandir Design',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80',
    tag: '#MandirWoodwork #PoojaRoom',
    isVideo: true
  },
  {
    id: 'ig-6',
    caption: 'Luxury master bedroom with French wall mouldings and fluted wooden panel headboard. Handover in 40 days!',
    likes: '1,120',
    category: 'Bedrooms',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    tag: '#InteriorBhiwadi #KhanInteriorBhiwadi',
    isVideo: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Suresh & Preeti Sharma',
    location: 'Ashiana Town, Bhiwadi',
    projectType: '3BHK Complete Woodwork & Modular Kitchen',
    rating: 5,
    comment: 'We saw Khan Interior on Instagram (@khan_interior_bhiwadi) and called Robin ji on 9012098820. Their team visited our flat the next day, took exact laser measurements, and delivered our modular kitchen and three wardrobes in just 32 days. The soft-close fittings and acrylic finish quality is outstanding!',
    date: 'February 2026'
  },
  {
    id: 't-2',
    clientName: 'Vikram Choudhary',
    location: 'RIICO Industrial Area, Bhiwadi',
    projectType: 'Commercial Corporate Office (2,400 sq.ft)',
    rating: 5,
    comment: 'For our factory corporate office, we needed a modern reception counter, boardroom table, and cabins. Khan Interior executed the acoustic wooden slats and reception desk with supreme precision. Very professional, transparent on pricing, and zero delays.',
    date: 'January 2026'
  },
  {
    id: 't-3',
    clientName: 'Dr. Neha & Rajiv Singhal',
    location: 'Terra Elegance, Bhiwadi',
    projectType: 'Living Room TV Unit & Master Wardrobe',
    rating: 5,
    comment: 'The tinted glass sliding wardrobe with motion lights turned out even better than the 3D visual! What impressed us most was that they use genuine BWP marine ply rather than cheap particle boards. Truly the best interior woodwork contractor in Bhiwadi.',
    date: 'December 2025'
  },
  {
    id: 't-4',
    clientName: 'Mohammed Tariq',
    location: 'BDI Sunshine City, Bhiwadi',
    projectType: 'Mandir Unit, False Ceilings & Modular Kitchen',
    rating: 5,
    comment: 'The CNC cut jali work in our puja room and the kitchen storage optimization were executed flawlessly. Robin and his craftsmen are polite, punctual, and keep the site clean. Highly recommended for anyone looking for reliable interior work in Bhiwadi or Dharuhera.',
    date: 'March 2026'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '100% In-House Factory Woodwork',
    description: 'All cabinets, wardrobes, and panels are precision-cut in our dedicated workshop with computerized edge-banding, ensuring zero site mess and millimeter accuracy.',
    icon: 'Factory'
  },
  {
    title: '10-Year Termite & Borer Warranty',
    description: 'We exclusively build on certified Grade-A BWP Marine Plywood & Action TESA HDHMR, backed by a written 10-year warranty.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Strict 45-Day Handover Guarantee',
    description: 'We value your moving-in date. Our phased milestone delivery guarantees on-time project handover with a daily delay compensation clause.',
    icon: 'ClockCheck'
  },
  {
    title: 'Transparent Pricing & Zero Surprises',
    description: 'No hidden charges. Clear itemized quotes with branded hardware specs (Hettich, Hafele, Blum, Century) before signing.',
    icon: 'BadgePercent'
  }
];
