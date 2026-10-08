import React, { useState } from "react";
import { siteConfig } from "../data/siteData";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Contact({ initialService = "" }) {
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userMessage: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, isVisible] = useSectionReveal(0.2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="snap-slide min-h-screen lg:ml-[72px] relative flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      {/* Background Image with Original Deep Crimson/Red Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/contact-new-bg.jpg"
          alt="DiaSam Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-red" />
      </div>

      {/* Content Container Aligned Exactly Like Original Slide 5 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Glass Card Form - Slide In From Left */}
          <div
            className={`lg:col-span-7 transition-all duration-300 ${
              isVisible ? "anim-slide-left opacity-100" : "opacity-0"
            }`}
          >
            <div className="feature-card-original p-4 sm:p-6 xl:p-8 2xl:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-white mb-3 sm:mb-4 xl:mb-6 text-center lg:text-left font-['Montserrat'] leading-tight">
                Questions? <span className="block text-slate-200 font-semibold text-lg sm:text-xl xl:text-2xl 2xl:text-3xl mt-1">How Can we help?</span>
              </h3>

              {submitted ? (
                <div className="py-6 xl:py-8 text-center">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-cyan-400 mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 xl:w-8 xl:h-8" />
                  </div>
                  <h4 className="text-lg xl:text-xl font-bold text-white mb-2 font-['Montserrat']">
                    Thank You! We Received Your Message.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-4 xl:mb-6">
                    Our team will get back to you right away to discuss your home security and smart automation requirements.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-original-trans text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 xl:space-y-4">
                  <div>
                    <input
                      type="text"
                      name="userName"
                      required
                      placeholder="Name"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="w-full px-3.5 py-2.5 xl:py-3 rounded-lg xl:rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs xl:text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
                    <input
                      type="tel"
                      name="userPhone"
                      required
                      placeholder="Contact No"
                      value={formData.userPhone}
                      onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 xl:py-3 rounded-lg xl:rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs xl:text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-inner"
                    />

                    <input
                      type="email"
                      name="userEmail"
                      required
                      placeholder="Email"
                      value={formData.userEmail}
                      onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 xl:py-3 rounded-lg xl:rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs xl:text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <textarea
                      name="userMessage"
                      rows={3}
                      placeholder="Type Your Message Here"
                      value={formData.userMessage}
                      onChange={(e) => setFormData({ ...formData, userMessage: e.target.value })}
                      className="w-full px-3.5 py-2.5 xl:py-3 rounded-lg xl:rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs xl:text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all resize-none shadow-inner"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-white-pill text-center justify-center cursor-pointer disabled:opacity-50 py-2.5 xl:py-3"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Information"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details - Slide In From Right (Converging) */}
          <div
            className={`lg:col-span-5 text-center lg:text-left transition-all duration-300 ${
              isVisible ? "anim-slide-right opacity-100" : "opacity-0"
            }`}
          >
            <h4 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-white mb-2 xl:mb-3 font-['Montserrat']">
              Office Location
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 xl:mb-6 font-light">
              We are closer than you think, contact us at your convenience with any questions or enquiries. We look forward to serving you!
            </p>

            <div className="space-y-2.5 xl:space-y-3.5">
              {/* Service Locations Item */}
              <div className="btn-glass-contact text-left p-3 xl:p-4">
                <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 block font-['Montserrat']">
                    Service Locations
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    San Antonio, Austin, Corpus Christi and surrounding areas
                  </span>
                </div>
              </div>

              {/* Call Us Item */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="btn-glass-contact text-left group p-3 xl:p-4"
              >
                <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 block font-['Montserrat']">
                    Call Us
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium font-mono">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              {/* Contact Us Email Item */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-glass-contact text-left group p-3 xl:p-4"
              >
                <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 block font-['Montserrat']">
                    Contact Us
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {siteConfig.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
