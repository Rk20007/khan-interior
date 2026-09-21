import React from 'react';
import { Instagram, Heart, Play, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../data/interiorData';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram-feed" className="py-24 bg-[#0a0c0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-xs text-pink-300 mb-3">
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Official Instagram Feed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Follow Our Craft on <span className="gold-gradient-text">Instagram</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Watch daily site progress reels, behind-the-scenes factory carpentry, and live client handovers in Bhiwadi.
          </p>
        </div>

        {/* Profile Card Header (Matching the actual Instagram profile) */}
        <div className="max-w-3xl mx-auto mb-10 p-5 rounded-2xl bg-[#12151c] border border-white/10 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          {/* Circular Logo */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f59e0b] via-[#ec4899] to-[#8b5cf6]">
              <div className="w-full h-full rounded-full bg-[#161a22] flex flex-col items-center justify-center text-center p-1 border-2 border-black">
                <span className="text-[12px] font-extrabold text-[#e0b875] leading-none">KHAN</span>
                <span className="text-[8px] font-semibold text-gray-300 tracking-wider mt-0.5">INTERIOR</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-[#12151c]" title="Verified Interior Studio">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Profile Bio Details */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center sm:justify-start">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5 justify-center sm:justify-start">
                <span>@{BUSINESS_INFO.instagramHandle}</span>
              </h3>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:brightness-110 shadow-md transition-all self-center sm:self-auto"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 justify-center sm:justify-start text-xs text-gray-300">
              <span><strong className="text-white font-bold">31</strong> posts</span>
              <span><strong className="text-white font-bold">{BUSINESS_INFO.followersCount}</strong> followers</span>
              <span><strong className="text-white font-bold">5</strong> following</span>
            </div>

            {/* Bio line items */}
            <div className="text-xs text-gray-300 space-y-0.5 pt-1">
              <p className="font-semibold text-[#f1d092]">Interior | Woodwork & Design</p>
              <p className="text-gray-400">Modular Kitchen | Wardrobes | Office Interior</p>
              <p className="text-gray-400">📍 Bhiwadi [Rajasthan] • Serving All Over India</p>
              <p className="text-emerald-400 font-medium">📞 Call/WhatsApp: {BUSINESS_INFO.rawPhone}</p>
            </div>
          </div>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#151922] border border-white/5 hover:border-pink-500/50 transition-all shadow-md flex flex-col"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Video Indicator */}
              {post.isVideo && (
                <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white backdrop-blur-xs">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-white backdrop-blur-[2px]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-pink-300">
                    <Heart className="w-3 h-3 fill-current" />
                    {post.likes}
                  </span>
                </div>

                <p className="text-[11px] text-gray-200 line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <span className="text-[10px] text-pink-400 font-medium flex items-center gap-1">
                  <span>View on Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View Profile Banner */}
        <div className="mt-8 text-center">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Explore all 30+ project videos on Instagram @{BUSINESS_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
