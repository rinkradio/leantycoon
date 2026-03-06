"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "Automotive", path: "automotive" },
  { name: "FMCG", path: "fmcg" },
  { name: "Pipe Industry", path: "pipe" },
  { name: "Textile", path: "textile" },
  { name: "Plastic", path: "plastic" },
  { name: "Paper", path: "paper" },
  { name: "Medical", path: "medical" },
  { name: "Furniture & Fixtures", path: "furniture" },
  { name: "Steels", path: "steels" },
  { name: "Electronics / Electricals", path: "electronics-electricals" },
  { name: "Power Plant", path: "power-plant" },
];

export default function WhereWeServePage() {
  return (
    <section className="relative min-h-screen py-28 overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50/60 to-white">

      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial Light Accents */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Where We Serve
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We implement structured manufacturing excellence programs
            across diverse industries, driving measurable productivity
            improvements and sustainable operational transformation.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.path}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                href={`/where_we_serve/${industry.path}`}
                className="relative block p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
              >
                {/* Soft Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-50 to-transparent" />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />

                <div className="relative flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold text-black mb-8 group-hover:text-sky-600 transition">
                    {industry.name}
                  </h3>

                  <div className="flex items-center text-sm font-medium text-gray-600 group-hover:text-sky-600 transition gap-2">
                    Explore Industry
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Subtle Glow Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}