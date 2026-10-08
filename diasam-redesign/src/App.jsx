import React, { useState } from "react";
import SidebarNav from "./components/SidebarNav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { siteConfig } from "./data/siteData";
import { PhoneCall } from "lucide-react";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Animated Follower Ring Cursor for Desktop */}
      <CustomCursor />

      {/* Desktop Fixed Left Bar & Mobile Responsive Header / Drawer */}
      <SidebarNav />

      {/* Main 5 Slides matching 1-to-1 with Original Site */}
      <main className="flex-1 w-full">
        {/* Slide 1: Home Banner */}
        <Hero />

        {/* Slide 2: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Slide 3: About Us */}
        <AboutUs />

        {/* Slide 4: Our Works */}
        <Portfolio />

        {/* Slide 5: Contact */}
        <Contact initialService={selectedService} />
      </main>

      {/* Bottom Floating Social Pill on Desktop & Clean Footer on Mobile */}
      <Footer />

      {/* Floating Quick-Call Button on Mobile */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 sm:hidden">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label="Call DiaSam Smart Solutions"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1e73be] to-[#155a96] text-white font-bold text-xs shadow-xl shadow-[#1e73be]/35 hover:shadow-2xl transition-all active:scale-95 border border-white/20 cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>
      </aside>
    </div>
  );
}
