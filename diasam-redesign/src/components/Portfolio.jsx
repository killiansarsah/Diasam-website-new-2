import React, { useState, useEffect } from "react";
import { portfolioSets } from "../data/siteData";
import Lightbox from "./Lightbox";
import { ChevronLeft, ChevronRight, Pause, Play, ZoomIn } from "lucide-react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Portfolio() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [ref, isVisible] = useSectionReveal(0.2);

  const allImages = React.useMemo(() => {
    const seen = new Set();
    const list = [];
    portfolioSets.forEach((set) => {
      set.images.forEach((img) => {
        if (!seen.has(img.src)) {
          seen.add(img.src);
          list.push(img);
        }
      });
    });
    return list;
  }, []);

  const totalSets = portfolioSets.length;
  const currentSet = portfolioSets[currentSetIndex];

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      triggerNextSet();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSetIndex, isAutoPlaying, isHovered]);

  const triggerNextSet = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSetIndex((prev) => (prev + 1) % totalSets);
      setTransitioning(false);
    }, 200);
  };

  const triggerPrevSet = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSetIndex((prev) => (prev - 1 + totalSets) % totalSets);
      setTransitioning(false);
    }, 200);
  };

  const handleSelectSet = (idx) => {
    if (idx === currentSetIndex) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSetIndex(idx);
      setTransitioning(false);
    }, 200);
  };

  const handleCardClick = (img) => {
    const globalIdx = allImages.findIndex((i) => i.src === img.src);
    setLightboxImageIndex(globalIdx !== -1 ? globalIdx : 0);
  };

  return (
    <section
      ref={ref}
      id="portfolio"
      className="snap-slide min-h-screen lg:ml-[72px] relative flex items-center justify-center overflow-hidden py-10 sm:py-14 lg:py-6 xl:py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Original Dark Overlay (40%) & Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/our-works-bg.jpg"
          alt="DiaSam Our Works Background"
          className="w-full h-full object-cover filter blur-[5px] scale-105"
        />
        <div className="absolute inset-0 bg-overlay-portfolio" />
      </div>

      {/* Content Container: Vertically distributed so Heading is at top, Images enlarged in center, Arrows at bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between h-full max-h-[96vh] lg:max-h-[92vh]">
        {/* Heading: All Caps Title (Slide in Down) + Subtitle (Fade in Up) - Positioned at Top */}
        <div className="text-center pt-2 sm:pt-3 lg:pt-1 mb-2 lg:mb-3 xl:mb-5 shrink-0">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wider font-['Montserrat'] uppercase transition-all duration-300 ${
              isVisible ? "anim-slide-down opacity-100" : "opacity-0"
            }`}
          >
            OUR WORKS
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-base text-slate-300 mt-1 font-['Roboto'] font-normal transition-all duration-300 ${
              isVisible ? "anim-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Recent Projects
          </p>
        </div>

        {/* 3x2 Grid (Strictly Image-Only: Enlarged to showcase work prominently in center) */}
        <div className="w-full my-auto flex-1 flex items-center justify-center py-2 lg:py-1">
          <div
            className={`w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 xl:gap-6 transition-all duration-300 ${
              transitioning ? "opacity-20 scale-[0.99] filter blur-[2px]" : "opacity-100 scale-100 filter-none"
            }`}
          >
            {currentSet.images.map((img, idx) => {
              const delays = ["0.05s", "0.15s", "0.25s", "0.35s", "0.45s", "0.55s"];
              return (
                <div
                  key={img.id}
                  onClick={() => handleCardClick(img)}
                  style={{ animationDelay: isVisible ? delays[idx] : "0s" }}
                  className={`portfolio-card-item aspect-[16/10] bg-slate-900/50 group rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isVisible ? "anim-zoom-in opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img.src}
                    alt="DiaSam Installation Project"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle hover zoom overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls: Positioned down comfortably below enlarged images */}
        <div
          style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
          className={`flex items-center justify-center gap-3 sm:gap-5 pb-2 sm:pb-3 lg:pb-1 mt-2 sm:mt-4 lg:mt-3 xl:mt-5 shrink-0 transition-all duration-300 ${
            isVisible ? "anim-fade-up opacity-100" : "opacity-0"
          }`}
        >
          {/* Previous Set Button */}
          <button
            onClick={triggerPrevSet}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Previous image set"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Container */}
          <div className="flex items-center gap-2.5 sm:gap-3 bg-black/30 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-white/10">
            {portfolioSets.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSet(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSetIndex
                    ? "w-7 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`View set ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Set Button */}
          <button
            onClick={triggerNextSet}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Next image set"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Auto-play toggle button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label={isAutoPlaying ? "Pause auto-swap" : "Resume auto-swap"}
            title={isAutoPlaying ? "Pause auto-swap" : "Resume auto-swap"}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImageIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxImageIndex}
          onClose={() => setLightboxImageIndex(null)}
          onPrev={() =>
            setLightboxImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))
          }
          onNext={() =>
            setLightboxImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
          }
        />
      )}
    </section>
  );
}
