import React, { useState } from "react";
import { servicesData, siteConfig } from "../data/siteData";
import ServiceModal from "./ServiceModal";
import { Home, Shield, Video, ShieldAlert } from "lucide-react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Services({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);
  const [ref, isVisible] = useSectionReveal(0.2);

  const iconMap = {
    Home,
    Shield,
    Video,
    ShieldAlert
  };

  return (
    <section
      ref={ref}
      id="services"
      className="snap-slide min-h-screen lg:ml-[72px] relative flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      {/* Background Image with Original Deep Services Teal/Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/our service bg.jpg"
          alt="DiaSam Smart Solution Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-services" />
      </div>

      {/* Content Container Aligned Exactly Like Original Slide 2 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        {/* Section Heading - Slide in from Left */}
        <div
          className={`mb-4 sm:mb-6 lg:mb-4 xl:mb-6 2xl:mb-8 text-center lg:text-left transition-all duration-300 ${
            isVisible ? "anim-slide-left opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            DiaSam Smart Solution
          </h2>
        </div>

        {/* 4 Feature Boxes (Clickable to open Modal) - Staggered Zoom In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-6 mb-4 sm:mb-6 lg:mb-4 xl:mb-6 2xl:mb-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Shield;
            const delays = ["0.1s", "0.25s", "0.4s", "0.55s"];
            return (
              <div
                key={service.id}
                onClick={() => setActiveModal(service)}
                style={{ animationDelay: isVisible ? delays[idx] : "0s" }}
                className={`feature-card-original p-4 sm:p-5 xl:p-6 2xl:p-7 flex flex-col justify-between cursor-pointer group hover:scale-[1.02] transition-all ${
                  isVisible ? "anim-zoom-in opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 xl:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 xl:w-6 xl:h-6 text-white" />
                  </div>
                  <h3 className="text-base xl:text-xl font-bold text-white tracking-tight mb-1.5 xl:mb-2 font-['Montserrat']">
                    {service.title}
                  </h3>
                  <p className="text-xs xl:text-sm text-slate-200 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-3.5 xl:mt-4 pt-2.5 xl:pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-300 font-medium">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform font-mono">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Original "Let's Get Started" CTA Box - Fade in Upward */}
        <div
          style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
          className={`feature-card-original p-4 sm:p-6 xl:p-7 2xl:p-8 relative overflow-hidden transition-all duration-300 ${
            isVisible ? "anim-fade-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 xl:gap-6 text-center lg:text-left">
            <div className="max-w-3xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1.5 xl:mb-2 font-['Montserrat']">
                Let's Get Started
              </h3>
              <p className="text-xs xl:text-sm text-slate-200 leading-relaxed">
                We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces.
              </p>
              <div className="mt-2 xl:mt-3 text-xs xl:text-sm text-slate-300">
                <strong className="text-white">Service Locations:</strong> San Antonio, Austin, Corpus Christi and surrounding areas
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="btn-original-trans"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModal && (
        <ServiceModal
          service={activeModal}
          onClose={() => setActiveModal(null)}
          onSelectService={onSelectService}
        />
      )}
    </section>
  );
}
