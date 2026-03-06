"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── BRAND COLORS ──────────────────────────────────── */
const BRAND = {
  purple: "#9B30D9",
  green: "#7DC428",
  blue: "#29ABE2",
};

/* ─── DATA ─────────────────────────────────────────── */
const leaders = [
  {
    image: "/management/MD_sir.webp",
    name: "Mr. Kamal Singla",
    title: "Managing Director",
    tag: "Founder & Visionary",
    index: "01",
    color: BRAND.purple,
    colorLight: "#F5EAFF",
    colorMid: "#C084FC",
    paragraphs: [
      "Mr. Kamal Singla combines entrepreneurial vision with disciplined execution, leading transformation initiatives that enable sustainable manufacturing excellence.",
      "A graduate in Electronics Engineering and certified TPM expert, he brings 15+ years of cross-industry experience across Textile, Pharma, Automobiles, Injection Moulding, Orthotics, and FMCG sectors.",
      "His expertise in Kaizen, 5S, TPM, and Lean methodologies has delivered measurable operational improvements for 50+ domestic and 10+ international clients.",
      "Under his leadership, Leantycoon continues expanding globally with innovation, structured systems, and long-term value creation.",
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "50+", label: "Domestic Clients" },
      { value: "10+", label: "Global Clients" },
    ],
  },
  {
    image: "/management/CFO-maam.webp",
    name: "Priyanka Gupta",
    title: "Chief Financial Officer",
    tag: "Financial Architect",
    index: "02",
    color: BRAND.green,
    colorLight: "#EDFAD8",
    colorMid: "#A3D96A",
    paragraphs: [
      "Priyanka Gupta brings strong financial governance backed by an MBA in Finance and extensive expertise in budgeting, risk assessment, and strategic planning.",
      "She oversees financial operations and investment strategy, ensuring long-term stability and scalable growth across all verticals.",
      "Her analytical rigor strengthens Leantycoon's financial discipline while enabling expansion initiatives and capital efficiency.",
    ],
    stats: [
      { value: "MBA", label: "Finance" },
      { value: "100%", label: "Audit Clarity" },
      { value: "∞", label: "Growth Focus" },
    ],
  },
  {
    image: "/HR_isha.webp",
    name: "Isha",
    title: "HR Head & Business Development",
    tag: "People & Growth",
    index: "03",
    color: BRAND.blue,
    colorLight: "#E3F6FD",
    colorMid: "#60C8EC",
    paragraphs: [
      "Isha aligns human capital strategy with business objectives, strengthening organizational capability and performance.",
      "She has streamlined recruitment systems, improved employee engagement, and implemented structured training programs.",
      "Her leadership in performance management, appraisal systems, and talent development contributes directly to sustainable growth.",
    ],
    stats: [
      { value: "360°", label: "HR Strategy" },
      { value: "High", label: "Retention Rate" },
      { value: "3x", label: "Talent Pipeline" },
    ],
  },
];

/* ─── PAGE ──────────────────────────────────────────── */
export default function Management() {
  return (
    <section
      className="relative bg-[#F7F8FA] min-h-screen overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
     

      <HeroHeader />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24 lg:pb-32">
        {leaders.map((leader, i) => (
          <LeaderCard key={leader.index} leader={leader} flip={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

/* ─── HERO HEADER ───────────────────────────────────── */
function HeroHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 text-center overflow-hidden">
      {/* Soft brand blobs - scaled down on mobile */}
      <div
        className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none opacity-20 sm:opacity-25"
        style={{ background: BRAND.purple }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] lg:w-[400px] h-[180px] sm:h-[220px] lg:h-[260px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none opacity-15 sm:opacity-20"
        style={{ background: BRAND.green }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[150px] sm:h-[180px] lg:h-[200px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none opacity-10 sm:opacity-15"
        style={{ background: BRAND.blue }}
      />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        <div className="h-px w-6 sm:w-10" style={{ background: BRAND.purple }} />
        <span
          className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase"
          style={{ color: BRAND.purple }}
        >
          Leantycoon Leadership
        </span>
        <div className="h-px w-6 sm:w-10" style={{ background: BRAND.purple }} />
      </motion.div>

      {/* Main headline - responsive clamp */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(2.2rem,8vw,6rem)] font-extrabold text-gray-900 leading-[1.1] sm:leading-[1.02] tracking-tight mb-4 sm:mb-5"
      >
        Meet the
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(120deg, ${BRAND.purple} 0%, ${BRAND.blue} 50%, ${BRAND.green} 100%)`,
          }}
        >
          Faces of Excellence
        </span>
      </motion.h1>

      {/* Tri-color pill divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="flex gap-1.5 mb-4 sm:mb-6 origin-center"
      >
        {[BRAND.purple, BRAND.blue, BRAND.green].map((c) => (
          <div key={c} className="h-[3px] w-6 sm:w-8 lg:w-10 rounded-full" style={{ background: c }} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-500 text-sm sm:text-base max-w-xs sm:max-w-lg leading-relaxed px-2"
      >
        Strategic leadership driving operational excellence,
        financial discipline, and sustainable global growth.
      </motion.p>

      {/* Scroll mouse cue - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── LEADER CARD ───────────────────────────────────── */
function LeaderCard({
  leader,
  flip,
}: {
  leader: (typeof leaders)[0];
  flip: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-6 sm:mb-8"
    >
      {/* Card */}
      <div className="bg-white rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group">

        {/* Top color accent stripe */}
        <div
          className="h-[3px]"
          style={{
            background: `linear-gradient(to right, ${leader.color}, ${leader.colorMid}80, transparent)`,
          }}
        />

        <div className="grid lg:grid-cols-2 items-stretch">

          {/* ── IMAGE PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: flip ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[500px] ${
              flip ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Tinted bg */}
            <div className="absolute inset-0" style={{ background: leader.colorLight }} />

            {/* Decorative blobs - smaller on mobile */}
            <div
              className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-40 sm:w-56 h-40 sm:h-56 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-110"
              style={{ background: leader.color }}
            />
            <div
              className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-28 sm:w-36 h-28 sm:h-36 rounded-full opacity-20"
              style={{ background: leader.colorMid }}
            />

            {/* Index badge */}
            <div
              className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg"
              style={{ background: leader.color }}
            >
              {leader.index}
            </div>

            {/* Parallax image - disable or keep; still works */}
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>

          {/* ── CONTENT PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: flip ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`flex flex-col justify-center px-6 sm:px-8 lg:px-14 py-8 sm:py-10 lg:py-14 ${
              flip ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 self-start px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider mb-4 sm:mb-5"
              style={{
                background: leader.colorLight,
                color: leader.color,
                border: `1.5px solid ${leader.color}35`,
              }}
            >
              <span
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full animate-pulse"
                style={{ background: leader.color }}
              />
              {leader.tag}
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="text-[clamp(1.8rem,5vw,2.7rem)] font-extrabold text-gray-900 leading-tight mb-1"
            >
              {leader.name}
            </motion.h2>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42 }}
              className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-5 sm:mb-7"
              style={{ color: leader.color }}
            >
              {leader.title}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="h-[2.5px] w-10 sm:w-14 rounded-full mb-5 sm:mb-7"
              style={{ background: leader.color }}
            />

            {/* Bio paragraphs */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-9">
              {leader.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="text-gray-600 text-sm sm:text-[15px] leading-[1.6] sm:leading-[1.75]"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="grid grid-cols-3 gap-2 sm:gap-3"
            >
              {leader.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: leader.colorLight,
                    border: `1px solid ${leader.color}20`,
                  }}
                >
                  <p
                    className="text-xl sm:text-[1.4rem] lg:text-[1.6rem] font-extrabold leading-none mb-1"
                    style={{ color: leader.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider sm:tracking-widest text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}