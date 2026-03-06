"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detect Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#0B7285] text-white text-sm relative">

      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-2 justify-between items-center">

        <div className="flex items-center gap-6">
          <a href="tel:+917307247450" className="flex items-center gap-2 hover:text-emerald-300 transition">
            <Phone size={14} />
            <span>+91-73072-47450</span>
          </a>

          <a href="mailto:ksingla@leantycoon.com" className="flex items-center gap-2 hover:text-emerald-300 transition">
            <Mail size={14} />
            <span>Ksingla@leantycoon.com</span>
          </a>

          <a href="mailto:info@leantycoon.com" className="flex items-center gap-2 hover:text-emerald-300 transition">
            <Mail size={14} />
            <span>Info@leantycoon.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SocialIcon href="https://www.facebook.com/profile.php?id=61556640908808" icon={<Facebook size={14} />} />
          <SocialIcon href="https://www.youtube.com/channel/UCzObGZa8IQrfAvsM5_n8TzA" icon={<Youtube size={14} />} />
          <SocialIcon href="https://www.linkedin.com/company/76456302/admin/dashboard/" icon={<Linkedin size={14} />} />
          <SocialIcon href="https://www.instagram.com/leantycoon/" icon={<Instagram size={14} />} />
        </div>
      </div>

      {/* ---------------- MOBILE HEADER ---------------- */}
      <div
        className="md:hidden flex items-center justify-between px-6 py-3 transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* Left Icons (Hide on scroll OR open) */}
        <div
          className={`flex items-center gap-4 transition-all duration-300 ${
            scrolled || open
              ? "opacity-0 w-0 overflow-hidden"
              : "opacity-100"
          }`}
        >
          <Phone size={18} />
          <Mail size={18} />
        </div>

        {/* Right Side Contact Label */}
        <div className="flex items-center gap-2 text-xs tracking-wide ml-auto">
          <span className="uppercase font-medium">Contact</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* ---------------- MOBILE EXPAND SECTION ---------------- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-4 space-y-3">

          <a
            href="tel:+917307247450"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition
                       rounded-lg px-4 py-3"
          >
            <Phone size={16} />
            <span>+91-73072-47450</span>
          </a>

          <a
            href="mailto:ksingla@leantycoon.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition
                       rounded-lg px-4 py-3"
          >
            <Mail size={16} />
            <span>Ksingla@leantycoon.com</span>
          </a>

          <a
            href="mailto:info@leantycoon.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition
                       rounded-lg px-4 py-3"
          >
            <Mail size={16} />
            <span>Info@leantycoon.com</span>
          </a>

          <div className="flex justify-center gap-4 pt-3 border-t border-white/20">
            <SocialIcon href="#" icon={<Facebook size={16} />} />
            <SocialIcon href="#" icon={<Twitter size={16} />} />
            <SocialIcon href="#" icon={<Linkedin size={16} />} />
            <SocialIcon href="#" icon={<Instagram size={16} />} />
          </div>

        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-9 h-9 flex items-center justify-center rounded-full 
                 bg-white/20 hover:bg-emerald-400 transition duration-300"
    >
      {icon}
    </Link>
  );
}