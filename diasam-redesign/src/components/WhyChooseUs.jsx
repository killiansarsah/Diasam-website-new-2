import React from "react";
import { valueProps } from "../data/siteData";
import { BadgeDollarSign, MapPin, Cpu, Activity, Check } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap = {
    BadgeDollarSign,
    MapPin,
    Cpu,
    Activity
  };

  return (
    <section className="relative py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-700 mb-2 block">
            The Local Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Property Owners Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            National alarm companies lock clients into overpriced long-term contracts. We deliver better hardware, personalized service, and direct owner accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = iconMap[prop.icon] || Cpu;
            return (
              <div
                key={idx}
                className="liquid-glass liquid-glass-interactive p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-cyan-700 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono font-semibold text-emerald-600">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
