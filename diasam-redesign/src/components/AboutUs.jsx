import React, { useState } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function AboutUs() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [ref, isVisible] = useSectionReveal(0.2);

  const team = [
    {
      name: "Sam G",
      role: "CEO",
      image: "/images/fafa.jpeg"
    },
    {
      name: "Killian S",
      role: "Team Member",
      image: "/images/killian.jpeg"
    }
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="snap-slide min-h-screen lg:ml-[72px] relative flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      {/* Background Image with Original Deep Warm Brown Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/about-us-bg.jpg"
          alt="DiaSam About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-brown" />
      </div>

      {/* Content Container Aligned Exactly Like Original Slide 3 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        {/* Section Heading with Center Underline */}
        <div
          className={`text-center mb-4 sm:mb-6 lg:mb-4 xl:mb-8 transition-all duration-300 ${
            isVisible ? "anim-slide-down opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            About Us
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-2 xl:mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Side: Company Information - Slide In From Left */}
          <div
            className={`lg:col-span-7 space-y-3 sm:space-y-4 xl:space-y-6 text-center lg:text-left transition-all duration-300 ${
              isVisible ? "anim-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white mb-1 xl:mb-2 font-['Montserrat']">
                Who We Are
              </h3>
              <p className="text-xs sm:text-sm xl:text-base text-slate-200 leading-relaxed font-normal">
                We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces. With a specialization in automation and smart home solutions, we combine cutting-edge technology with personalized service to deliver innovative, efficient, and user-friendly systems that is affordable.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white mb-1 xl:mb-2 font-['Montserrat']">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm xl:text-base text-slate-200 leading-relaxed font-normal">
                To make home security and smart living affordable by delivering reliable security and modern technology without the inflated prices of big-name companies. Our goal is to save you money while giving you dependable, energy-efficient solutions tailored to your needs - proving that top-tier technology does not have to come with a premium price tag.
              </p>
            </div>
          </div>

          {/* Right Side: Meet Our Team - Slide In From Right (Converging) */}
          <div
            className={`lg:col-span-5 transition-all duration-300 ${
              isVisible ? "anim-slide-right opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center mb-3 sm:mb-4 xl:mb-6">
              <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white font-['Montserrat']">
                Meet Our Team
              </h3>
              {/* Title Underline with Dot */}
              <div className="relative w-14 sm:w-16 h-2 mx-auto my-1.5 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent" />
                <div className="absolute w-2 h-2 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                Leadership & Innovation
              </p>
            </div>

            {/* Desktop Team Cards: Side-by-side */}
            <div className="hidden sm:grid grid-cols-2 gap-3 xl:gap-4 max-w-[360px] xl:max-w-[440px] mx-auto">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl xl:rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
                >
                  <div className="w-full h-44 sm:h-48 xl:h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2.5 xl:p-4 text-center bg-white flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 text-sm xl:text-base font-['Montserrat']">
                      {member.name}
                    </h4>
                    <span className="inline-block mt-1 px-2.5 py-0.5 xl:px-3 xl:py-1 rounded-full text-[10px] xl:text-xs font-semibold bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-xs mx-auto">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Team Carousel: Single Card with Indicators */}
            <div className="sm:hidden max-w-[240px] mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="w-full h-60 overflow-hidden">
                  <img
                    src={team[mobileIndex].image}
                    alt={`${team[mobileIndex].name} - ${team[mobileIndex].role}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3.5 text-center bg-white">
                  <h4 className="font-bold text-slate-900 text-base font-['Montserrat']">
                    {team[mobileIndex].name}
                  </h4>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-xs mx-auto">
                    {team[mobileIndex].role}
                  </span>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {team.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === mobileIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`View team member ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
