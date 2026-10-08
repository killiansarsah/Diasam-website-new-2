import React from "react";
import { trustStats } from "../data/siteData";
import { ShieldCheck, Clock, Eye, MapPin } from "lucide-react";

export default function TrustBadges() {
  const icons = [ShieldCheck, Clock, Eye, MapPin];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {trustStats.map((stat, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={index}
              className="liquid-glass p-5 rounded-2xl border border-slate-200/90 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-cyan-700">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {stat.value}
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                {stat.label}
              </h3>
              <p className="text-[11px] text-slate-500 font-normal">
                {stat.sublabel}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
