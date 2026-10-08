export const siteConfig = {
  name: "DiaSam Smart Solutions",
  tagline: "Smart living, dependable security.",
  description: "Family-owned smart home automation, high-definition security cameras, and 24/7 monitoring across San Antonio, Austin, and Corpus Christi.",
  phone: "+1 (210) 971-4545",
  phoneRaw: "+12109714545",
  email: "info@diasamsolutions.com",
  serviceAreas: ["San Antonio", "Austin", "Corpus Christi", "Surrounding Central Texas"],
  social: {
    facebook: "https://www.facebook.com/share/1JDAh8YavV/?mibextid=wwXIfr",
  },
  established: "2020",
  founder: "Sam G"
};

export const trustStats = [
  { value: "100%", label: "Direct Owner Accountability", sublabel: "Honest local installation" },
  { value: "24/7", label: "Round-The-Clock Dispatch", sublabel: "Immediate response monitoring" },
  { value: "4K UHD", label: "True Optical Clarity", sublabel: "Day & night license plate capture" },
  { value: "0", label: "Long-Term Lock-in Traps", sublabel: "Equipment you actually own" }
];

export const servicesData = [
  {
    id: "smart-home",
    title: "Smart Home",
    icon: "Home",
    badge: "Control & Energy",
    shortDesc: "Complete control of your lighting, thermostats, and access from a single phone app.",
    fullDesc: "Take control of your entire home with clean automation routines. Control climate, deadbolts, and ambient lighting seamlessly from your phone or with simple voice commands, all configured for peak energy efficiency.",
    images: [
      "/images/portfolio/Daytime1.jpg",
      "/images/portfolio/Daytime2.jpg",
      "/images/portfolio/Daytime3.jpg",
      "/images/portfolio/Daytime4.jpg"
    ],
    features: [
      "Works with Alexa, Google Home, and Apple ecosystems",
      "One-touch remote access from anywhere in the world",
      "Automated energy schedules that lower Texas utility bills",
      "Smart scene configuration for morning, away, and bedtime"
    ]
  },
  {
    id: "home-security",
    title: "Home Security",
    icon: "Shield",
    badge: "Intrusion Defense",
    shortDesc: "Commercial-grade sensors and intelligent deterrence protecting every door and window.",
    fullDesc: "A complete security system built with perimeter sensors, motion detectors, and active sirens. Connected directly to professional monitoring dispatch so help is already on the way when an alert trips.",
    images: [
      "/images/portfolio/Daytime5.jpg",
      "/images/portfolio/Daytime6.jpg",
      "/images/portfolio/Daytime7.jpg",
      "/images/portfolio/Daytime8.jpg"
    ],
    features: [
      "Smart human and vehicle motion verification",
      "Instant push alerts and sirens to deter intruders immediately",
      "Smart deadbolt lockouts with remote family access codes",
      "Cellular backup links that work even if home Wi-Fi drops"
    ]
  },
  {
    id: "surveillance",
    title: "Surveillance",
    icon: "Video",
    badge: "Retinal 4K Cameras",
    shortDesc: "Ultra HD optical cameras capturing crisp faces, license plates, and backyard zones in true color.",
    fullDesc: "Commercial 4K camera arrays engineered with radar-based 3D motion zones. High-power spotlights and starlight night sensors illuminate pitch-black areas without grainy digital fuzz.",
    images: [
      "/images/portfolio/Night1.jpg",
      "/images/portfolio/Night2.jpg",
      "/images/portfolio/Night3.jpg",
      "/images/portfolio/Night4.jpg"
    ],
    features: [
      "4K Ultra HD optical resolution with optical zoom",
      "Full color starlight night vision plus motion-activated floodlights",
      "Customizable perimeter tripwires that prevent nuisance alerts",
      "Private encrypted local hard drive storage or cloud backup"
    ]
  },
  {
    id: "protection",
    title: "24/7 Protection",
    icon: "ShieldAlert",
    badge: "Live Monitoring",
    shortDesc: "Always-on emergency monitoring center coordinating police, fire, and medical response.",
    fullDesc: "Continuous live monitoring guarding apartments, residential estates, and commercial storefronts. Whether you are asleep upstairs or traveling overseas, licensed operators verify alarms and dispatch emergency responders.",
    images: [
      "/images/portfolio/Night5.jpg",
      "/images/portfolio/Night6.jpg",
      "/images/portfolio/Night7.jpg",
      "/images/portfolio/Night8.jpg"
    ],
    features: [
      "Perimeter door and window trip sensors",
      "Acoustic glass-break and shock detectors",
      "Dedicated cellular transmitter independent of home power",
      "Direct priority Texas emergency responder dispatch"
    ]
  }
];

export const teamMembers = [
  {
    name: "Sam G",
    role: "CEO & Founder",
    bio: "Focused on installing dependable security hardware that works every single day, without locking homeowners into inflated contracts.",
    image: "/images/fafa.jpeg"
  },
  {
    name: "Killian S",
    role: "Systems Specialist",
    bio: "Hands-on specialist managing field installations, network wiring, camera angles, and sensor calibrations across Central Texas properties.",
    image: "/images/killian.jpeg"
  }
];

// Curated 3x2 Sets (6 images per set) matching original site layout
export const portfolioSets = [
  {
    setName: "Daytime Installs",
    images: [
      { id: 1, src: "/images/portfolio/Daytime1.jpg", title: "Smart Video Entryway", tag: "Daytime" },
      { id: 2, src: "/images/portfolio/Daytime2.jpg", title: "Perimeter Camera Mount", tag: "Daytime" },
      { id: 3, src: "/images/portfolio/Daytime3.jpg", title: "Driveway Angle Coverage", tag: "Daytime" },
      { id: 4, src: "/images/portfolio/Daytime4.jpg", title: "Corner Motion Sensor", tag: "Daytime" },
      { id: 5, src: "/images/portfolio/Daytime5.jpg", title: "Front Approach Sentinel", tag: "Daytime" },
      { id: 6, src: "/images/portfolio/Daytime6.jpg", title: "Clean Conduit Wall Mount", tag: "Daytime" },
    ]
  },
  {
    setName: "Perimeter & Approach",
    images: [
      { id: 7, src: "/images/portfolio/Daytime7.jpg", title: "Courtyard Surveillance", tag: "Daytime" },
      { id: 8, src: "/images/portfolio/Daytime8.jpg", title: "Architectural Exterior Mount", tag: "Daytime" },
      { id: 9, src: "/images/portfolio/Daytime9.jpg", title: "Entryway Integration", tag: "Daytime" },
      { id: 10, src: "/images/portfolio/Daytime10.jpg", title: "Multi-Zone Perimeter", tag: "Daytime" },
      { id: 11, src: "/images/portfolio/Night1.jpg", title: "Night Spotlight Sentinel", tag: "Night Vision" },
      { id: 12, src: "/images/portfolio/Night2.jpg", title: "Infrared Night Monitoring", tag: "Night Vision" },
    ]
  },
  {
    setName: "Nighttime Security",
    images: [
      { id: 13, src: "/images/portfolio/Night3.jpg", title: "Full-Color Starlight View", tag: "Night Vision" },
      { id: 14, src: "/images/portfolio/Night4.jpg", title: "Perimeter Gate Night Feed", tag: "Night Vision" },
      { id: 15, src: "/images/portfolio/Night5.jpg", title: "Motion Floodlight Trigger", tag: "Night Vision" },
      { id: 16, src: "/images/portfolio/Night6.jpg", title: "Zero Blindspot Array", tag: "Night Vision" },
      { id: 17, src: "/images/portfolio/Night7.jpg", title: "Backyard Night Security", tag: "Night Vision" },
      { id: 18, src: "/images/portfolio/Night8.jpg", title: "High-Lumen Barrier Defense", tag: "Night Vision" },
    ]
  },
  {
    setName: "Night Highlights",
    images: [
      { id: 19, src: "/images/portfolio/Night9.jpg", title: "Architectural Night View", tag: "Night Vision" },
      { id: 11, src: "/images/portfolio/Night1.jpg", title: "Night Spotlight Sentinel", tag: "Night Vision" },
      { id: 12, src: "/images/portfolio/Night2.jpg", title: "Infrared Night Monitoring", tag: "Night Vision" },
      { id: 13, src: "/images/portfolio/Night3.jpg", title: "Full-Color Starlight View", tag: "Night Vision" },
      { id: 14, src: "/images/portfolio/Night4.jpg", title: "Perimeter Gate Night Feed", tag: "Night Vision" },
      { id: 15, src: "/images/portfolio/Night5.jpg", title: "Motion Floodlight Trigger", tag: "Night Vision" },
    ]
  }
];

export const valueProps = [
  {
    title: "No Corporate Markups",
    desc: "Direct, transparent quotes with zero hidden equipment leasing traps or sudden fee jumps.",
    icon: "BadgeDollarSign"
  },
  {
    title: "Texas Local Technicians",
    desc: "Based locally in San Antonio, serving Austin and Corpus Christi with fast hands-on service.",
    icon: "MapPin"
  },
  {
    title: "Unified In One App",
    desc: "Your cameras, doorbell, locks, and sensors all controlled together from a clean mobile app.",
    icon: "Cpu"
  },
  {
    title: "Always-On Monitoring",
    desc: "Certified emergency monitoring standing by 24/7 to dispatch local first responders immediately.",
    icon: "Activity"
  }
];
