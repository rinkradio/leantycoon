"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Trainings & Certifications", path: "trainings-certifications" },
  { name: "Practical 5S", path: "practical-5s" },
  { name: "MPO – Manpower Optimisation", path: "mpo-manpower-optimisation" },
  { name: "Culture Building Excellence", path: "culture-building-excellence" },
  { name: "OPI – Productivity Improvement", path: "opi-overall-productivity-improvement" },
  { name: "Lean Manufacturing", path: "lean-manufacturing" },
  { name: "Daily Work Management", path: "daily-work-management" },
  { name: "Supply Chain Management", path: "supply-chain-management" },
  { name: "Automation", path: "automation" },
];

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      {/* Subtle Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Structured manufacturing excellence solutions designed to improve
            productivity, optimize systems, and create sustainable operational performance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                href={`/services/${service.path}`}
                className="relative block p-10 rounded-2xl bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all duration-500 h-full overflow-hidden"
              >
                {/* Vertical Accent Bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-sky-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                <div className="flex flex-col justify-between h-full pl-4">
                  <h3 className="text-xl font-semibold text-white mb-8 group-hover:text-sky-400 transition">
                    {service.name}
                  </h3>

                  <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-sky-400 transition gap-2">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}