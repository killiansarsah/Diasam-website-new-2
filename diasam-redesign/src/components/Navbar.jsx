import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteData";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Our Works", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <img
              src="/images/logo_bottom.png"
              alt="DiaSam Smart Solutions"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
              DiaSam
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200 ml-1 font-mono font-semibold">
                Solutions
              </span>
            </span>
            <span className="block text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">
              Smart Automation & Security
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-cyan-600 transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-600" />
            <span>(210) 971-4545</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <span>Get Free Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs shadow-md"
              >
                <span>Request Free Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
