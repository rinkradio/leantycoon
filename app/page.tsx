"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { motion } from "framer-motion";
import CircularGallery from "../components/CircularGallery";

const slides = [
  {
    image: "/Home_0.webp",
    title: "Driving Manufacturing Excellence",
    subtitle:
      "Transforming operations through lean systems, productivity optimization, and structured performance models.",
  },
  {
    image: "/Home-1.webp",
    title: "Operational Productivity Reimagined",
    subtitle:
      "Eliminating waste, improving flow, and building measurable performance systems.",
  },
  {
    image: "/Home_2.webp",
    title: "Lean Culture. Sustainable Results.",
    subtitle:
      "Building leadership alignment and workforce engagement for long-term growth.",
  },
];

const services = [
  {
    name: "Data Analytics & Performance Systems",
    path: "trainings-certifications",
    image: "/services/data_analytics.png",
  },
  {
    name: "Practical 6S",
    path: "practical-5s",
    image: "/services/p6.png",
  },
  {
    name: "TPM- Total Productive Maintenance",
    path: "mpo-manpower-optimisation",
    image: "/services/TPM.png",
  },
  {
    name: "Culture Building",
    path: "culture-building-excellence",
    image: "/services/culture-bundling.png",
  },
  {
    name: "OPI Productivity Improvement",
    path: "opi-overall-productivity-improvement",
    image: "/services/OPI.png",
  },
  {
    name: "Lean Manufacturing",
    path: "lean-manufacturing",
    image: "/services/lean.png",
  },
  {
    name: "Daily Work Management",
    path: "daily-work-management",
    image: "/services/daily-work.png",
  },
  {
    name: "Supply Chain Management",
    path: "supply-chain-management",
    image: "/services/supply-chain.png",
  },
  {
    name: "Automation",
    path: "automation",
    image: "/services/automation.png",
  },
];

// ----- TESTIMONIALS DATA -----
const testimonials = [
  {
    name: "Ritesh Pal Arora",
    designation: "Managing Director - Paul & Paul",
    text: "Leantycoon Consulting Services is one of the leading Manufacturing Excellence Consulting Company in Chandigarh and Tri-City. The Management of Excellence journey is been done in a way that we were able to cut our wastes by 45% in past financial year.",
    rating: 5,
    image: "./testimonials/Ritesh-Sir.webp",
  },
  {
    name: "Amreek Singh",
    designation: "Managing Director - Ferric Formers",
    text: "Leantycoon has helped us in identifying and rectifying the MUDA in the organisation...! It was an marvellous journey!",
    rating: 5,
    image: "./testimonials/Amreek-singh.webp",
  },
  {
    name: "Hemant Mangla",
    designation: "Managing Director - Mangla Sons",
    text: "Leantycoon Consulting has helped us in identifying the gaps in our inventory, also with the operations part, and the results were mindblowing.",
    rating: 5,
    image: "./testimonials/Hemant-mangla.webp",
  },
  {
    name: "Jagatdeep Singh",
    designation: "Director- Emco Electrodyne",
    text: "Leantycoon Consulting has worked on total SORT & working on entire value chain, appreciating their full support and efforts.",
    rating: 5,
    image: "./testimonials/Jagatdeep-Singh.webp",
  },
  {
    name: "KK Seth",
    designation: "MD- Metal Shape Industries",
    text: "Leantycoon Consulting is Working on our manufacturing Excellence Standards and so far the journey has been very much result oriented.",
    rating: 5,
    image: "./testimonials/kk-seth.webp",
  },
];

const certificates = [
  {
    image: "/home_certificate/ferric_formers.webp",
    name: "Ferric Formers",
  },
  {
    image: "/home_certificate/mangla_sons.webp",
    name: "Mangla Sons",
  },
  {
    image: "/home_certificate/MT.webp",
    name: "MT",
  },
  {
    image: "/home_certificate/NIPA.webp",
    name: "NIPA",
  },
  {
    image: "/home_certificate/paul&paul.webp",
    name: "Paul & Paul",
  },
];

const industries = [
  { name: "Automotive", path: "automotive" },
  { name: "FMCG", path: "fmcg" },
  { name: "Pipe Industry", path: "pipe" },
  { name: "Textile", path: "textile" },
  { name: "Plastic", path: "plastic" },
  { name: "Paper", path: "paper" },
  { name: "Medical", path: "medical" },
  { name: "Furniture & Fixtures", path: "furniture" },
  { name: "Steel", path: "steel" },
  { name: "Electronics / Electricals", path: "electronics" },
  { name: "Power Plant", path: "powerplant" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  // ----- Certificate infinite carousel state -----
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);

  const visibleCertificates = isMobile ? 1 : 3;
  // We'll use a duplicated array for the infinite effect.
  // The actual displayed array will be certificates repeated 3 times.
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates];
  const totalOriginal = certificates.length;
  // We set the starting index to the first original item (i.e., position `totalOriginal` in the duplicated array)
  // so that we have enough clones on both sides to loop seamlessly.
  const [rawIndex, setRawIndex] = useState(totalOriginal); // index in duplicated array

  // For mobile, the max raw index we can have while keeping the visible area inside the duplicated array:
  // The last visible item should be at most duplicatedCertificates.length - visibleCertificates.
  // We'll allow rawIndex to go from 0 to duplicatedCertificates.length - visibleCertificates.
  const maxRawIndex = duplicatedCertificates.length - visibleCertificates;

  // Carousel state for testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    setTestimonialIndex(0);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ----- Certificate auto-slide logic (infinite) -----
  const moveToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setRawIndex((prev) => {
      let next = prev + 1;
      // If next would exceed the safe range, we'll reset it to the original start after transition
      if (next > maxRawIndex) {
        next = totalOriginal; // jump back to the first original set
      }
      return next;
    });
  };

  const moveToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setRawIndex((prev) => {
      let next = prev - 1;
      if (next < 0) {
        next = maxRawIndex - totalOriginal; // jump to the last clone
      }
      return next;
    });
  };

  // After transition ends, if we are at a clone boundary, jump to the corresponding real index without transition
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // If we are in the first clone set (index < totalOriginal), jump forward to the real set
    if (rawIndex < totalOriginal) {
      setRawIndex(rawIndex + totalOriginal);
    }
    // If we are in the last clone set (index >= totalOriginal * 2), jump backward
    else if (rawIndex >= totalOriginal * 2) {
      setRawIndex(rawIndex - totalOriginal);
    }
  };

  // Start/stop auto-slide
  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      if (autoSlideEnabled && !isTransitioning) {
        moveToNext();
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  useEffect(() => {
    if (autoSlideEnabled) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [autoSlideEnabled, isTransitioning]);

  // Pause on hover
  const handleMouseEnter = () => {
    setAutoSlideEnabled(false);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setAutoSlideEnabled(true);
    startAutoSlide();
  };

  // ----- Testimonials navigation -----
  const nextTestimonials = () => {
    setTestimonialIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevTestimonials = () => {
    setTestimonialIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {slides[current].subtitle}
            </p>

            <button
              onClick={() => router.push("/services")}
              className="bg-emerald-500 hover:bg-emerald-600 transition px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Know Who We Are
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              LeanTycoon delivers measurable business improvements in a
              continuous and sustainable way. We connect strategy to execution
              and ensure results are sustained — not temporary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/aboutus.webp"
                alt="Lean Consulting"
                width={700}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Our Lean, TPM, and Kaizen implementations drive measurable productivity, operational excellence, and cultural transformation. We focus on eliminating waste, improving process flow, increasing equipment reliability, and building structured performance systems that deliver sustainable results. By aligning leadership, empowering teams, and implementing data-driven improvement frameworks, we ensure that improvements are not temporary initiatives but long-term operational standards.<br/><br />

Through hands-on engagement on the shop floor, structured audits, KPI tracking, and capability development programs, we help organizations build internal ownership of change.
              </p>

              <button
                onClick={() => router.push("/about-us/who-are-we")}
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-4">
              We design and implement structured manufacturing excellence programs
              focused on productivity enhancement, waste elimination, and sustainable
              performance systems.
            </p>
            <p className="text-sm text-gray-500">
              {isMobile
                ? "Tap on any service card to explore detailed information."
                : "Scroll to rotate the service wheel and click on any card to explore in detail."}
            </p>
          </div>

          {isMobile ? (
            <div className="grid grid-cols-1 gap-6 ">
              
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/services/${service.path}`)}
                  className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer active:scale-95 transition "
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={1000}
                    height={500}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-black ">
                      {service.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[600px]">
              <CircularGallery
                items={services.map((s) => ({
                  image: s.image,
                  text: s.name,
                }))}
                bend={3}
                scrollSpeed={2}
                scrollEase={0.05}
                onCardClick={(index) => {
                  const service = services[index];
                  if (!service) return;
                  router.push(`/services/${service.path}`);
                }}  
              />
            </div>
          )}
        </div>
      </section>

{/* ================= WHERE WE SERVE ================= */}
<section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Where We Serve
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Delivering structured manufacturing excellence programs
        across diverse industries with measurable impact and
        sustainable transformation.
      </p>
    </motion.div>

    {/* Industry Grid */}
   <div className="relative">

  {/* Industry Grid */}
  <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
    {industries.slice(0, 4).map((industry, index) => (
      <motion.div
        key={industry.path}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        onClick={() => router.push(`/where_we_serve/${industry.path}`)}
        className="group relative cursor-pointer"
      >
        <div className="relative p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-50 to-transparent" />

          <h3 className="relative text-xl font-semibold text-black mb-6 transition group-hover:text-emerald-600">
            {industry.name}
          </h3>

          <div className="relative flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-emerald-600 transition">
            Explore Industry
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    ))}
  </div>

  {/* Fade Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />

  {/* Learn More Button */}
  <div className="flex justify-center mt-16 relative z-10">
    <button
      onClick={() => router.push("/where_we_serve")}
      className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition flex items-center gap-2"
    >
      Learn More
      <ArrowRight size={18} />
    </button>
  </div>

</div>

  </div>
</section>

      {/* ================= MANAGING DIRECTOR SECTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Our Managing Director
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Serving as the Managing Director at Leantycoon consulting group, 
                <span className="font-semibold text-black"><br />Mr. Kamal Singla’s</span> journey represents a combination of 
                entrepreneurial spirit, strategic insight and a persistent pursuit of excellence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Mr. Singla is a prominent figure in the constantly changing field of business consulting, 
                demonstrating visionary leadership and leading innovation and change at Leantycoon Consulting Group.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/about-us/management")}
                className="w-fit bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-900 transition-all shadow-lg"
              >
                Meet Our Leadership Team
                <ArrowRight size={20} className="text-emerald-400" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors duration-500" />
              <Image
                src="/MD_sir.webp"
                alt="Mr. Kamal Singla - Managing Director"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] md:h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SCROLL STACK ================= */}
      <section className="bg-white py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Recognition & Industry Presence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Certifications, industry acknowledgements, and leadership engagements
            that reflect our impact across the manufacturing ecosystem.
          </p>
        </div>
        <ScrollStack>
          <ScrollStackItem
            bgImage="/certificate.webp"
            onClick={() => setSelectedImage("/certificate.webp")}
          />
          <ScrollStackItem
            bgImage="/industry-outlook-news.webp"
            onClick={() => setSelectedImage("/industry-outlook-news.webp")}
          />
          <ScrollStackItem
            bgImage="/meeting-1.webp"
            onClick={() => setSelectedImage("/meeting-1.webp")}
          />
        </ScrollStack>
      </section>

      {/* ================= FULL SCREEN MODAL ================= */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
          <div className="max-h-[90vh] max-w-[95vw] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Full Preview"
              width={2000}
              height={2000}
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* ================= INFINITE CERTIFICATE GALLERY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Client Certifications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Recognitions and completion certifications from leading
              manufacturing organizations.
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left Arrow */}
            {!isMobile && (
              <button
                onClick={moveToPrev}
                className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gray-100 transition"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    rawIndex * (100 / visibleCertificates)
                  }%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {duplicatedCertificates.map((cert, idx) => (
                  <div
                    key={idx}
                    className="min-w-full md:min-w-[calc(33.333%-1rem)] cursor-pointer flex items-center justify-center "
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={800}
                      height={600}
                      className="object-contain w-full h-80 transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            {!isMobile && (
              <button
                onClick={moveToNext}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gray-100 transition"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {autoSlideEnabled && (
            <p className="text-center text-sm text-gray-400 mt-4">
              Auto-sliding • Hover to pause
            </p>
          )}
        </div>
      </section>
    </div>
  );
}