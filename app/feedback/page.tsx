"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Play, Award, Quote } from "lucide-react";
import { useState } from "react";

const feedbacks = [
  {
    message:
      "Leantycoon Consulting Services is one of the leading Manufacturing Excellence Consulting Company in Chandigarh and Tri-City. We were able to cut our wastes by 45% in the past financial year.",
    name: "Mr. Ritesh Pal Arora",
    designation: "MD - Paul & Paul Enterprises",
    photo: "/testimonials/Ritesh-Sir.webp",
    certificate: "/certificate/paul&paul-certificate.webp",
    video: "",
  },
  {
    message:
      "Leantycoon Consulting has helped us in identifying and rectifying the MUDA in the organisation. It was a marvellous journey!",
    name: "Mr. Amreek Singh",
    designation: "MD - Ferric Formers",
    photo: "/testimonials/Amreek-singh.webp",
    certificate: "/certificate/ferric-certificate.webp",
    video: "",
  },
  {
    message:
      "Leantycoon Consulting has helped us in identifying the gaps in our inventory and operations. The results were mindblowing.",
    name: "Mr. Hemant Mangla",
    designation: "MD - Mangla Sons",
    photo: "/testimonials/Hemant-mangla.webp",
    certificate: "/certificate/mangla-certificate.webp",
    video: "",
  },
  {
    message:
      "Leantycoon Consulting has worked on total SORT & entire value chain. Appreciating their full support and efforts.",
    name: "Mr. Jagatdeep Singh",
    designation: "Director - Emco Electrodyne",
    photo: "/testimonials/jagatdeep-singh.webp",
    certificate: "/certificate/emco-certificate.webp",
    video: "",
  },
  {
    message:
      "Leantycoon Consulting is working on our Manufacturing Excellence Standards and so far the journey has been very result oriented.",
    name: "Mr. KK Seth",
    designation: "MD - Metal Shape Industries",
    photo: "/testimonials/kk-seth.webp",
    certificate: "/certificate/metalshape-certificate.webp",
    video: "",
  },
  {
    message:
      "We have been associated for the past 1 year. We eliminated many wastages. Their professional approach and on-site availability made a major impact.",
    name: "Mr. Apoorva Jain",
    designation: "MD - Carrier Wheels Private Limited",
    photo: "/testimonials/apoorva-jain.webp",
    certificate: "",
    video: "/certificate/carrier-wheel-video.mp4",
  },
  {
    message:
      "We have been associated for the past 11 months and saved 2 crores plus in this tenure.",
    name: "Mr. Naveen Goswami",
    designation: "MD - Mago Thermal Limited",
    photo: "/testimonials/naveen-goswani.webp",
    certificate: "",
    video: "/certificate/MTPL-Director-video.mp4",
  },
];

// Animation variants with proper typing
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeedbackPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-15 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Client <span className="text-emerald-600">Feedback</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real stories from manufacturing leaders who have transformed their operations with LeanTycoon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-8"
          >
            {feedbacks.map((feedback, index) => (
              <motion.article
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-emerald-200 mb-4" />

                  {/* Person Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-100 flex-shrink-0">
                      <Image
                        src={feedback.photo}
                        alt={feedback.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {feedback.name}
                      </h3>
                      <p className="text-sm text-emerald-600">
                        {feedback.designation}
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{feedback.message}"
                  </p>

                  {/* Certificate */}
                  {feedback.certificate && (
                    <div
                      className="relative mt-4 rounded-xl overflow-hidden border border-gray-200 cursor-pointer group/media"
                      onClick={() =>
                        setSelectedMedia({
                          type: "image",
                          src: feedback.certificate as string,
                        })
                      }
                    >
                      <Image
                        src={feedback.certificate}
                        alt="Certificate"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover/media:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Video with persistent badge */}
                  {feedback.video && (
                    <div
                      className="relative mt-4 rounded-xl overflow-hidden border border-gray-200 cursor-pointer group/media"
                      onClick={() =>
                        setSelectedMedia({
                          type: "video",
                          src: feedback.video as string,
                        })
                      }
                    >
                      <video
                        src={feedback.video}
                        className="w-full h-auto"
                        poster={feedback.photo}
                      />

                      {/* Persistent video badge */}
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm z-10">
                        <Play className="w-3 h-3 fill-white" />
                        <span>Video</span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedMedia(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-emerald-400 transition"
            aria-label="Close modal"
          >
            ×
          </button>
          <div
            className="max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <Image
                src={selectedMedia.src}
                alt="Certificate"
                width={1600}
                height={1200}
                className="max-h-[90vh] w-auto mx-auto object-contain rounded-xl"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-h-[90vh] w-auto mx-auto rounded-xl"
              />
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Share Your Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100 mb-10"
          >
            Join our growing list of satisfied clients and start your transformation journey today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-gray-100 transition-colors px-10 py-5 rounded-lg text-lg font-semibold shadow-xl"
            >
              Become a Client
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}