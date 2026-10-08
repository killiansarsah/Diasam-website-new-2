import React, { useEffect } from "react";
import { X, CheckCircle2, Home, Shield, Video, ShieldAlert } from "lucide-react";

export default function ServiceModal({ service, onClose, onSelectService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!service) return null;

  const iconMap = {
    Home,
    Shield,
    Video,
    ShieldAlert
  };
  const Icon = iconMap[service.icon] || Shield;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121824]/95 border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/80 border border-white/20 flex items-center justify-center text-white transition-all hover:rotate-90 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-5 pb-6 border-b border-white/10 mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/10">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Montserrat']">
              {service.title}
            </h2>
            <span className="text-xs sm:text-sm text-cyan-300 font-mono">
              Professional Smart Solutions
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-6">
          {service.fullDesc}
        </p>

        {/* 4 Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {service.images.map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden border border-white/15 shadow-md group"
            >
              <img
                src={imgUrl}
                alt={`${service.title} equipment ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Features Checklist */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-white mb-4 font-['Montserrat']">
            Key Highlights & Capabilities:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-normal">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            San Antonio, Austin, Corpus Christi and surrounding areas.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectService) onSelectService(service.title);
              }}
              className="w-1/2 sm:w-auto btn-original-trans bg-white text-black hover:bg-white/90"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
