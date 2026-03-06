"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  TrendingUp,
  Users,
  Award,
  Clock,
  Shield,
  Sparkles,
  ChevronRight,
} from "lucide-react";

// -------------------- reusable components --------------------
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{children}</p>
);

// Counter component with animation
const Counter = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = numericValue / (duration / 16);
    let timer: NodeJS.Timeout;

    const step = () => {
      start += increment;
      if (start < numericValue) {
        setCount(Math.floor(start));
        timer = setTimeout(step, 16);
      } else {
        setCount(numericValue);
      }
    };
    step();

    return () => clearTimeout(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  );
};

// -------------------- main component --------------------
export default function WhoAreWe() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Industry Experts" },
  ];

  const pillars = [
    {
      icon: <Target className="w-10 h-10 text-emerald-600" />,
      title: "Execution & Accountability",
      text: "We don't deliver reports — we deliver results. Our structured systems ensure accountability and sustained performance.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-emerald-600" />,
      title: "Lean, TPM & Kaizen Excellence",
      text: "Through TPM and Lean Kaizen frameworks, we unlock measurable productivity gains and profitability improvements.",
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: "Cultural Transformation",
      text: "We embed systems that shift mindset, build capability, and create lasting cultural change.",
    },
  ];

  const whyItems = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Proven Methodology",
      desc: "Our Lean, TPM, and Kaizen frameworks have been refined across hundreds of implementations.",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Hands‑On Approach",
      desc: "We work alongside your team – on the shop floor, not just in boardrooms.",
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "Sustainable Results",
      desc: "We build internal capability so improvements last long after our engagement ends.",
    },
  ];

  return (
    <main className="bg-white">
      {/* -------------------- HERO -------------------- */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutus/about-us-1.webp"
            alt="Lean manufacturing consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-emerald-400 font-semibold tracking-wider uppercase mb-4 text-sm">
              Since 2020, Driving Manufacturing Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Engineering <span className="text-emerald-400">Excellence</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              For over 6 years, Leantycoon has partnered with manufacturing leaders to
              eliminate waste, boost productivity, and build cultures of continuous improvement.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-colors px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
            >
              Start Your Transformation
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* -------------------- STATS -------------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Counter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- OUR STORY -------------------- */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/aboutus/about-us-6.webp"
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <SectionTitle>Our Story</SectionTitle>
              <p className="text-lg text-gray-600 leading-relaxed">
                LeanTycoon was born from a simple belief: that every manufacturing organization,
                regardless of size, can achieve world‑class performance through the right systems,
                mindsets, and leadership.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a two‑person consultancy in Chandigarh has grown into a trusted
                partner for over 200+ factories across India. Our approach combines deep Lean
                expertise with practical, on‑ground execution – we don’t just advise, we implement.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-emerald-600 font-semibold hover:gap-2 transition-all"
              >
                Explore how we work <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- MISSION, VISION, VALUES -------------------- */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionTitle>What Drives Us</SectionTitle>
            <SectionSubtitle>
              Our principles are the foundation of every engagement.
            </SectionSubtitle>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-emerald-600" />,
                title: "Our Mission",
                text: "To empower manufacturing organizations with lean systems that deliver measurable, sustainable results – enhancing competitiveness and enriching the lives of every employee.",
              },
              {
                icon: <Eye className="w-12 h-12 text-emerald-600" />,
                title: "Our Vision",
                text: "To be the most trusted catalyst for manufacturing excellence in India and beyond – known for integrity, impact, and enduring client partnerships.",
              },
              {
                icon: <Heart className="w-12 h-12 text-emerald-600" />,
                title: "Our Values",
                list: [
                  "Integrity & Transparency",
                  "Client Success First",
                  "Practical, Not Theoretical",
                  "Continuous Learning",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                {item.list ? (
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    {item.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CORE PILLARS -------------------- */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionTitle>Our Core Pillars</SectionTitle>
            <SectionSubtitle>
              The foundation of every transformation we deliver.
            </SectionSubtitle>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- WHY CHOOSE US -------------------- */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/aboutus/about-us-3.webp"
                alt="Team working on shop floor"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <SectionTitle>Why Partner With Us?</SectionTitle>
              <div className="space-y-6">
                {whyItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- OUR CULTURE -------------------- */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <SectionTitle>Our Culture</SectionTitle>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that sustainable excellence is built on a foundation of respect,
                collaboration, and continuous learning. Our team lives the same principles we
                teach – from the shop floor to the boardroom.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every engagement is a partnership. We immerse ourselves in your environment,
                understand your unique challenges, and co‑create solutions that stick.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <Sparkles className="w-5 h-5" />
                <span>People first, results always.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/aboutus/about-us-4.webp"
                alt="Our culture and team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- TRUSTED BY INDUSTRY LEADERS -------------------- */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            Trusted by Industry Leaders
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 12 }, (_, i) => {
              const imageNumber = i + 1;
              return (
                <motion.div
                  key={imageNumber}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={`/clients/client-indirect-${imageNumber}.webp`}
                    alt={`Client ${imageNumber}`}
                    width={120}
                    height={80}
                    className="object-contain max-h-16 w-auto"
                    unoptimized // remove if your images are optimized
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------- CALL TO ACTION -------------------- */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100 mb-10"
          >
            Let's discuss how LeanTycoon can help you achieve measurable, lasting results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-gray-100 transition-colors px-10 py-5 rounded-lg text-lg font-semibold shadow-xl"
            >
              Contact Us Today
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}