import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteData";
import { Home, Cog, Users, Image as ImageIcon, Mail, Menu, X, Phone, ArrowRight } from "lucide-react";

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "portfolio", "contact"];
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  const navItems = [
    { id: "home", name: "Home", href: "#home", icon: Home },
    { id: "services", name: "Our Services", href: "#services", icon: Cog },
    { id: "about", name: "About Us", href: "#about", icon: Users },
    { id: "portfolio", name: "Our Works", href: "#portfolio", icon: ImageIcon },
    { id: "contact", name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Navbar (<1024px) - Clean Light Mode matching original */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 py-3 flex items-center justify-between shadow-xs">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src="/images/logo_bottom.png"
            alt="DiaSam Smart Solutions"
            className="w-8 h-8 object-contain"
          />
          <span className="font-extrabold text-base text-slate-900 tracking-tight font-['Montserrat']">
            DiaSam <span className="text-[#1e73be]">Solutions</span>
          </span>
        </a>

        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="p-2 rounded-lg bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Desktop Fixed Left Navigation Strip (>=1024px) */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[76px] bg-white/80 backdrop-blur-xl border-r border-slate-200/80 z-40 flex-col items-center justify-between py-7 shadow-xl select-none transition-all duration-300">
        {/* Top Interactive Stepped Hamburger Toggle (Matching Original #my_tog:hover) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="hamburger-stepped w-11 h-11 rounded-2xl bg-white/90 hover:bg-white border border-slate-200 shadow-sm hover:shadow-md flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95 group"
          aria-label="Open side menu"
          title="Open menu"
        >
          <span className="w-5 h-0.5 bg-slate-900 rounded-full"></span>
          <span className="w-5 h-0.5 bg-[#1e73be] rounded-full"></span>
          <span className="w-5 h-0.5 bg-slate-900 rounded-full"></span>
        </button>

        {/* Center Vertical Icon Bar: Floating Frosted-Glass Pill (Exact Original Geometric Design) */}
        <nav
          className={`flex flex-col items-center gap-3.5 p-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/80 shadow-lg shadow-black/5 transition-all duration-500 ${
            drawerOpen ? "opacity-0 -translate-x-6 pointer-events-none scale-95" : "opacity-100 translate-x-0 scale-100"
          }`}
          aria-label="Section navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative group w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#1e73be] to-[#155a96] text-white shadow-lg shadow-[#1e73be]/40 scale-110 ring-4 ring-[#1e73be]/15"
                    : "text-slate-500 hover:text-[#1e73be] hover:bg-slate-100/90 hover:scale-105"
                }`}
                aria-label={item.name}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-105" : "group-hover:scale-110"}`} />

                {/* Enhanced Tooltip on right (White card with dark text, arrow & shadow) */}
                <div className="absolute left-14 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl font-['Montserrat'] flex items-center gap-1.5 z-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e73be]" />
                  <span>{item.name}</span>
                </div>
              </a>
            );
          })}
        </nav>

        {/* Bottom DiaSam Logo on light strip */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="w-10 h-10 flex items-center justify-center group cursor-pointer transition-transform hover:scale-110 active:scale-95"
          title="DiaSam Smart Solutions"
        >
          <img
            src="/images/logo_bottom.png"
            alt="DiaSam Logo"
            className="w-8 h-8 object-contain drop-shadow-sm group-hover:rotate-6 transition-transform duration-300"
          />
        </a>
      </aside>

      {/* Slide-out Full Side Menu Drawer - Enhanced Sliding Animation */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop with smooth blur and fade-in */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel: Smooth slide-in from left with cubic-bezier curve */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white/98 backdrop-blur-2xl border-r border-slate-200 h-full p-8 flex flex-col justify-between z-10 shadow-2xl anim-drawer-slide">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("home");
                  }}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <img
                    src="/images/logo_bottom.png"
                    alt="DiaSam Smart Solutions"
                    className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h2 className="font-extrabold text-lg text-slate-900 font-['Montserrat'] tracking-tight">
                      DiaSam <span className="text-[#1e73be]">Solutions</span>
                    </h2>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wide">
                      Smart Automation & Security
                    </span>
                  </div>
                </a>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-all duration-300 cursor-pointer hover:rotate-90 active:scale-90"
                  aria-label="Close menu"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Staggered Cascading Slide-In Animation */}
              <nav className="flex flex-col space-y-2" aria-label="Expanded Navigation">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      style={{ animationDelay: `${0.06 + idx * 0.07}s` }}
                      className={`anim-drawer-item group py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 font-['Montserrat'] cursor-pointer ${
                        isActive
                          ? "bg-slate-50 text-[#1e73be] font-bold shadow-xs border-l-4 border-[#1e73be]"
                          : "text-slate-700 hover:text-[#1e73be] hover:bg-slate-50/80 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "text-[#1e73be]" : "text-slate-400 group-hover:text-[#1e73be] group-hover:scale-110"}`} />
                        <span className={`drawer-line-anim text-base uppercase tracking-wider text-sm ${isActive ? "active" : ""}`}>
                          {item.name}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-[#1e73be] translate-x-1" : "text-slate-300 group-hover:text-[#1e73be] group-hover:translate-x-1"}`} />
                    </a>
                  );
                })}
              </nav>

              {/* Simple, Refined Call Button */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-3 px-5 rounded-full bg-[#1e73be] hover:bg-[#155a96] text-white font-semibold text-xs tracking-wider uppercase font-['Montserrat'] shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group active:scale-[0.98]"
                >
                  <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Bottom Centered Branded Social Media Icons & Copyright */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-600 flex flex-col items-center justify-center">
              {/* Social Media Icons (Facebook, Twitter/X, LinkedIn, Instagram) Centered */}
              <div className="flex items-center justify-center gap-3 mb-3.5">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1877f2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-black text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0077b5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#e4405f] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-400 font-mono">
                &copy; {new Date().getFullYear()} DiaSam Smart Solutions.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
