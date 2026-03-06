"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Trainings & Certifications",
    slug: "trainings-certifications",
  },
  {
    name: "Practical 5S",
    slug: "practical-5s",
  },
  {
    name: "MPO – Manpower Optimisation",
    slug: "mpo-manpower-optimisation",
  },
  {
    name: "Culture Building Excellence",
    slug: "culture-building-excellence",
  },
  {
    name: "OPI – Overall Productivity Improvement",
    slug: "opi-overall-productivity-improvement",
  },
  {
    name: "Lean Manufacturing",
    slug: "lean-manufacturing",
  },
  {
    name: "Supply Chain Management",
    slug: "supply-chain-management",
  },
  {
    name: "Daily Work Management",
    slug: "daily-work-management",
  },
  {
    name: "Automation",
    slug: "automation",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-20">

      {/* ===== MAP SECTION ===== */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0632225568247!2d76.65337617544131!3d30.74216457457975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef475380ed9d%3A0x1799182299601fc6!2sLeantycoon%20Consulting%20Group!5e1!3m2!1sen!2sin!4v1771673926981!5m2!1sen!2sin"
          className="w-full h-[230px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/lean-logo.webp"
                alt="Leantycoon Logo"
                width={45}
                height={45}
              />
              <h2 className="text-lg font-semibold">
                Leantycoon Consulting Group
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering structured manufacturing excellence systems
              focused on productivity, operational control, and sustainable growth.
            </p>

            <Link
              href="/contact-us"
              className="inline-block mt-4 px-5 py-2 rounded-lg text-sm font-semibold
                         bg-gradient-to-r from-purple-600 via-emerald-500 to-blue-500
                         hover:opacity-90 transition"
            >
              Book Consultation
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-emerald-400 mb-5">
              Company
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <Link href="/" className="block hover:text-white transition">
                Home
              </Link>
              <Link href="/about-us/who-are-we" className="block hover:text-white transition">
                About Us
              </Link>
              <Link href="/clients" className="block hover:text-white transition">
                Clients
              </Link>
              <Link href="/blogs" className="block hover:text-white transition">
                Blogs
              </Link>
              <Link href="/feedback" className="block hover:text-white transition">
                Feedback
              </Link>
              <Link href="/contact-us" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Services (Matches Navbar Structure) */}
         <div>
  <h3 className="font-semibold text-emerald-400 mb-5">
    Services
  </h3>

  <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-400">
    {services.map((service) => (
      <Link
        key={service.slug}
        href={`/services/${service.slug}`}
        className="hover:text-white transition"
      >
        {service.name}
      </Link>
    ))}
  </div>
</div>

          {/* Contact */}
<div>
  <h3 className="font-semibold text-emerald-400 mb-5">
    Contact
  </h3>

  <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
    
    <p>
      SCF No -08, Ground Floor,<br />
      Gillco Valley, Sector -04,<br />
      Kharar, Punjab 140301
    </p>

    <a
      href="tel:+917307247450"
      className="block hover:text-white transition"
    >
      +91-73072-47450
    </a>

    <a
      href="mailto:Ksingla@leantycoon.com"
      className="block hover:text-white transition"
    >
      Ksingla@leantycoon.com
    </a>

    <a
      href="mailto:Info@Leantycoon.com"
      className="block hover:text-white transition"
    >
      Info@Leantycoon.com
    </a>

  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Leantycoon Consulting Group. All rights reserved.
      </div>

    </footer>
  );
}