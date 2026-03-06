"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const services = [
  {
    name: "Trainings & Certifications",
    slug: "trainings-certifications",
    children: [
      { name: "Lean Basics – Principles/tools", slug: "lean-basics-principles-tools" },
      { name: "Value Stream Mapping Theory", slug: "value-stream-mapping-theory" },
      { name: "5S Methodology | Visual Workplace", slug: "5s-methodology-visual-workplace-management" },
      { name: "Lean Layout Design", slug: "lean-layout-design" },
      { name: "Cellular Manufacturing & One-Piece Flow", slug: "cellular-manufacturing-one-piece-flow" },
      { name: "Flexible Manufacturing through SMED", slug: "flexible-manufacturing-smed" },
      { name: "7QC Tools", slug: "7qc-tools" },
      { name: "Kanban", slug: "kanban" },
      { name: "Standardised Work", slug: "standardised-work" },
      { name: "Process Mapping", slug: "process-mapping" },
      { name: "Mistake Proofing – Poke Yoke", slug: "mistake-proofing-poke-yoke" },
    ],
  },
  {
    name: "Practical 5s",
    slug: "practical-5s",
    children: [
      { name: "SCFC – Search Find Count Free", slug: "scfc-search-find-count-free" },
      { name: "Visual Management", slug: "visual-management" },
    ],
  },
  {
    name: "MPO – Manpower Optimisation",
    slug: "mpo-manpower-optimisation",
    children: [
      { name: "RBA – Result Based Appreciation", slug: "rba-result-based-appreciation" },
      { name: "Four Layer Management Structure", slug: "four-layer-management-structure" },
      { name: "Automation", slug: "automation" },
    ],
  },
  {
    name: "Culture Building Excellence",
    slug: "culture-building-excellence",
    children: [
      { name: "R&R System", slug: "rr-system" },
      { name: "EEA – Employee Engagement Activities", slug: "eea-employee-engagement-activities" },
    ],
  },
  {
    name: "OPI – Overall Productivity Improvement",
    slug: "opi-overall-productivity-improvement",
    children: [
      { name: "I-OMQH", slug: "i-omqh" },
      { name: "Safety", slug: "safety" },
    ],
  },
  {
    name: "Lean Manufacturing",
    slug: "lean-manufacturing",
    children: [
      { name: "VAM – Value Added Manufacturing", slug: "vam-value-added-manufacturing" },
      { name: "VSM – Value Stream Mapping", slug: "vsm-value-stream-mapping" },
      { name: "Kanban System", slug: "kanban-system" },
      { name: "LFD – Lean Facility Design", slug: "lfd-lean-facility-design" },
    ],
  },
  {
    name: "Supply Chain Management",
    slug: "supply-chain-management",
    children: [
      { name: "SORT – Sales Order Real Time Tracking", slug: "sort-sales-order-real-time-tracking" },
      { name: "Inventory Management", slug: "inventory-management" },
      { name: "TAT – Turn Around Times", slug: "tat-turn-around-times" },
    ],
  },
  { name: "Daily Work Management", slug: "daily-work-management" },
  { name: "Automation", slug: "automation" },
];

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Helper to determine if a link is active
function isActive(href: string, pathname: string, match: "exact" | "prefix" = "exact"): boolean {
  if (match === "exact") return pathname === href;
  // prefix match: href is parent, check if pathname starts with href and next char is / or end
  return pathname === href || (pathname.startsWith(href) && (pathname[href.length] === '/' || pathname.length === href.length));
}

// Active link component for desktop
function NavLink({ href, label, match = "exact" }: { href: string; label: string; match?: "exact" | "prefix" }) {
  const pathname = usePathname();
  const active = isActive(href, pathname, match);
  return (
    <Link
      href={href}
      onClick={scrollToTop}
      className={`relative group transition ${active ? 'text-emerald-400' : ''}`}
    >
      <span className="group-hover:text-emerald-400 transition duration-300">
        {label}
      </span>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Active link component for mobile
function MobileLink({ href, label, closeMenu, match = "exact" }: { href: string; label: string; closeMenu: () => void; match?: "exact" | "prefix" }) {
  const pathname = usePathname();
  const active = isActive(href, pathname, match);
  const handleClick = () => {
    scrollToTop();
    closeMenu();
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block hover:text-emerald-400 transition ${active ? 'text-emerald-400' : ''}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
const aboutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeMenu = () => setMobileOpen(false);

  const clearServicesTimer = () => {
    if (servicesTimerRef.current) {
      clearTimeout(servicesTimerRef.current);
      servicesTimerRef.current = null;
    }
  };

  const handleServicesMouseEnter = () => {
    clearServicesTimer();
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 100);
  };

  const handleLinkClick = () => {
    scrollToTop();       // Scroll to top
    setServicesOpen(false);
    closeMenu();
  };

  const pathname = usePathname();

  return (
    <nav className="bg-[#0F172A] text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Brand */}
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-4">
          <Image
            src="/lean-logo.webp"
            alt="Leantycoon Logo"
            width={70}
            height={70}
            priority
          />
          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-wide">
              <TypingText text="Leantycoon Consulting Group..!" speed={35} />
            </h1>
            <p className="text-xs text-emerald-400 font-medium tracking-wider">
              <TypingText text="Targeting Excellence" speed={60} delay={1500} />
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink href="/" label="Home" />
          {/* About Dropdown */}
<div
  className="relative"
  onMouseEnter={() => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    setAboutOpen(true);
  }}
  onMouseLeave={() => {
    aboutTimerRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 150);
  }}
>
  <button
    onClick={() => setAboutOpen(!aboutOpen)}
    className={`flex items-center gap-1 hover:text-emerald-400 transition duration-300 ${
      pathname.startsWith("/about-us") ? "text-emerald-400" : ""
    }`}
  >
    About Us <ChevronDown size={16} />
  </button>

  {aboutOpen && (
    <div className="absolute left-0 top-10 bg-[#111827] border border-white/10 shadow-2xl rounded-xl w-56 p-3 space-y-2 z-50">
      <Link
        href="/about-us/who-are-we"
        onClick={handleLinkClick}
        className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition text-sm"
      >
        Who Are We
      </Link>

      <Link
        href="/about-us/management"
        onClick={handleLinkClick}
        className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition text-sm"
      >
        Management
      </Link>
    </div>
  )}
</div>

          {/* Services Dropdown with hover + click handling */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              className={`flex items-center gap-1 hover:text-emerald-400 transition duration-300 ${
                services.some(s => isActive(`/services/${s.slug}`, pathname, "prefix")) ? 'text-emerald-400' : ''
              }`}
            >
              Services <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="absolute left-0 top-10 bg-[#111827] border border-white/10 shadow-2xl rounded-xl w-80 p-4 space-y-2 z-50"
              >
                {services.map((service) => {
                  const href = `/services/${service.slug}`;
                  const active = isActive(href, pathname, "prefix");
                  return (
                    <div key={service.slug} className="group/sub relative">

                      <Link
                        href={href}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition text-sm ${
                          active ? 'text-emerald-400 bg-white/5' : ''
                        }`}
                      >
                        {service.name}
                        {service.children && <ChevronRight size={14} />}
                      </Link>

                      {service.children && (
                        <div className="absolute left-full top-0 opacity-0 invisible
                                      group-hover/sub:opacity-100 group-hover/sub:visible
                                      transition-all duration-300
                                      bg-[#111827]
                                      border border-white/10
                                      shadow-2xl rounded-xl w-80 p-4 space-y-2">
                          {service.children.map((child) => {
                            const childHref = `/services/${service.slug}/${child.slug}`;
                            const childActive = isActive(childHref, pathname, "exact");
                            return (
                              <Link
                                key={child.slug}
                                href={childHref}
                                onClick={handleLinkClick}
                                className={`block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition text-sm ${
                                  childActive ? 'text-emerald-400 bg-white/5' : ''
                                }`}
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink href="/clients" label="Clients" />
          <NavLink href="/blogs" label="Blogs" />
          <NavLink href="/feedback" label="Feedback" />
          <NavLink href="/contact-us" label="Contact" />

          <Link
            href="/contact-us"
            onClick={scrollToTop}
            className="ml-4 px-6 py-2 rounded-xl font-semibold
                       bg-gradient-to-r from-purple-600 via-emerald-500 to-blue-500
                       hover:opacity-90 transition duration-300 shadow-lg"
          >
            Book Appointment
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu – simple list, Services is just a link */}
      <div
        className={`md:hidden bg-[#0F172A] border-t border-white/10 overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${mobileOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 space-y-4 text-sm">

          <MobileLink href="/" label="Home" closeMenu={closeMenu} />
          <MobileLink href="/about-us/who-are-we" label="Who Are We" closeMenu={closeMenu} />
<MobileLink href="/about-us/management" label="Management" closeMenu={closeMenu} />
          
          {/* Services as a simple link (no dropdown) */}
          <MobileLink href="/services" label="Services" closeMenu={closeMenu} match="prefix" />

          <MobileLink href="/clients" label="Clients" closeMenu={closeMenu} />
          <MobileLink href="/blogs" label="Blogs" closeMenu={closeMenu} />
          <MobileLink href="/feedback" label="Feedback" closeMenu={closeMenu} />
          <MobileLink href="/contact-us" label="Contact" closeMenu={closeMenu} />

          {/* Optional Book Appointment button for mobile */}
          <Link
            href="/contact-us"
            onClick={() => { scrollToTop(); closeMenu(); }}
            className="block mt-4 px-4 py-2 rounded-xl font-semibold text-center bg-gradient-to-r from-purple-600 via-emerald-500 to-blue-500 hover:opacity-90 transition duration-300 shadow-lg"
          >
            Book Appointment
          </Link>

        </div>
      </div>
    </nav>
  );
}

/* Typing Animation */
function TypingText({
  text,
  speed = 50,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return <span>{displayed}</span>;
}