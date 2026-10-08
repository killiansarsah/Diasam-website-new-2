import React from "react";
import { siteConfig } from "../data/siteData";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Hero() {
  const [ref, isVisible] = useSectionReveal(0.2);

  return (
    <section
      ref={ref}
      id="home"
      className="snap-slide min-h-screen lg:ml-[72px] relative flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      {/* Background Video with Original Deep Royal Blue Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="/videos/Hue-Secure-Functional-Video-16x9-low-res-HQ1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-overlay-blue" />
      </div>

      {/* Content Container Aligned Exactly Like Original */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Headline, Copy & Transparent Button (Sliding in from Left) */}
          <div
            className={`lg:col-span-6 text-center lg:text-left transition-all duration-300 ${
              isVisible ? "anim-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 xl:mb-5 font-['Montserrat']">
              Smart Solutions <br />
              <span className="block font-medium text-slate-200 mt-1">that fit your lifestyle.</span>
            </h1>

            <p className="text-sm sm:text-base xl:text-lg text-slate-200 font-light mb-5 sm:mb-6 xl:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the convenience of a connected home with our innovative smart devices.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#services"
                className="btn-original-trans inline-block"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="btn-original-trans inline-block bg-white/10 hover:bg-white text-white hover:text-black"
              >
                Get a Quote
              </a>
            </div>

            {/* Service Location tags */}
            <div className="mt-6 xl:mt-10 pt-3 xl:pt-4 border-t border-white/15 text-xs text-slate-300 font-['Montserrat']">
              <span className="text-cyan-400 font-semibold mr-2">Service Locations:</span>
              <span>San Antonio • Austin • Corpus Christi</span>
            </div>
          </div>

          {/* Right Column: Original SVG Morph Shape (Sliding in from Right to meet left) */}
          <div
            className={`lg:col-span-6 flex items-center justify-center transition-all duration-300 ${
              isVisible ? "anim-slide-right opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[460px] 2xl:max-w-[500px] aspect-square flex items-center justify-center">
              <svg
                className="w-full h-full drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 700 700"
              >
                <g>
                  {/* Outer Morphing Background Layers with Opacity */}
                  <path
                    fill="#ffffff"
                    d="M355.43 45.1C398 31.19 442.59 29 484 39.88c55.11 14.5 117.25 54.91 134.57 160.78 0 0 18.6 99.41-12.78 232 0 0-38.65 142.61-90.66 192 0 0-59 61.95-148.78 59.18 0 0-42.15 0-102.34-27.17 0 0-184-88.78-240.17-199S11 211.81 150.69 135.43C241.1 86 314.73 58.41 355.43 45.1z"
                    opacity=".15"
                  />
                  <path
                    fill="#ffffff"
                    d="M105.78 387.15c-15.76-38.08-21-79.83-14.15-120.46C100.79 212.61 133 148.14 228 116.38c0 0 89-32 211.88-21.76 0 0 132.5 15.66 181.18 57.51 0 0 60.65 46.59 64.69 131.66 0 0 3.11 39.73-17.22 100.45 0 0-67.27 186.43-163.35 255.44S282.55 687.58 202.89 567c-51.57-78-82.04-143.42-97.11-179.85z"
                    opacity=".18"
                  />
                  <path
                    id="hero-shape"
                    d="M129.39 153.77C146.74 117 173.73 85.35 208 63.38c45.59-29.25 114.09-48.57 200.42-.28 0 0 82.56 43.75 156.7 140.31 0 0 76.61 107.2 78.4 170.57 0 0 6.27 75.26-53.19 134.75 0 0-27 28.67-84.82 54.17 0 0-180.89 74.76-295.15 50.43S27.41 482.55 62.52 344.24c22.74-89.52 50.27-155.24 66.87-190.47z"
                    fill="none"
                  />
                  <clipPath id="hero-clip">
                    <use href="#hero-shape" style={{ overflow: "visible" }} />
                  </clipPath>
                </g>
                <image
                  clipPath="url(#hero-clip)"
                  height="100%"
                  width="100%"
                  href="/images/slider-img.png"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
