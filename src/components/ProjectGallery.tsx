import React, { useState, useMemo } from 'react';
import { Sparkles, MapPin, Search, Eye, MessageCircle, ArrowUpRight, Building2, Home } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS, BUSINESS_INFO } from '../data/interiorData';
import { ProjectModal } from './ProjectModal';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeType, setActiveType] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'wardrobe', label: 'Luxury Wardrobes' },
    { id: 'living', label: 'Living & TV Units' },
    { id: 'commercial', label: 'Commercial & Office' },
    { id: 'mandir', label: 'Mandir & Woodwork' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      // Type match (Residential / Commercial)
      const matchesType = activeType === 'All' || project.type === activeType;
      // Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.scope.some((s) => s.toLowerCase().includes(q)) ||
        project.materials.some((m) => m.toLowerCase().includes(q));

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [activeCategory, activeType, searchQuery]);

  return (
    <section id="gallery" className="py-24 bg-[#0d0f12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-xs text-[#f1d092] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Design Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
              Latest Residential & <span className="gold-gradient-text">Commercial Projects</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Real execution photos from our client handovers across Ashiana Town, Terra Elegance, BDI Sunshine, 
              and corporate offices in the Bhiwadi-Dharuhera industrial belt.
            </p>
          </div>

          {/* Quick Filter: Residential vs Commercial */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveType('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeType === 'All' ? 'bg-[#c59d5f] text-black shadow-md' : 'text-gray-300 hover:text-white'
              }`}
            >
              All Designs ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveType('Residential')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                activeType === 'Residential' ? 'bg-[#c59d5f] text-black shadow-md' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-3 h-3" />
              Residential
            </button>
            <button
              onClick={() => setActiveType('Commercial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                activeType === 'Commercial' ? 'bg-[#c59d5f] text-black shadow-md' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Building2 className="w-3 h-3" />
              Commercial & Office
            </button>
          </div>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by society or scope..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c59d5f] transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm text-gray-400">No projects found matching your selection.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveType('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#c59d5f] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-[#12151c] border border-white/10 hover:border-[#c59d5f]/50 transition-all duration-300 flex flex-col shadow-xl hover:-translate-y-1"
              >
                {/* Visual Thumbnail */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#f0d49a] border border-white/10">
                      {project.categoryLabel}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border backdrop-blur-md ${
                      project.type === 'Commercial'
                        ? 'bg-blue-950/80 text-blue-300 border-blue-500/30'
                        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                    }`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Inspect CTA overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c59d5f] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-base font-bold text-white group-hover:text-[#f0d49a] transition-colors cursor-pointer line-clamp-1 font-display"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Scope Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.scope.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5 truncate max-w-[180px]"
                        >
                          {item}
                        </span>
                      ))}
                      {project.scope.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-gray-400">
                          +{project.scope.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-[#c59d5f] hover:text-[#f0d49a] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Khan Interior, I am inquiring about the ${project.title} (${project.location}). Please provide cost details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-1 text-[11px] font-semibold"
                      title="Quick WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
