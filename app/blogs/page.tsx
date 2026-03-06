"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "common-quality-defects-textile",
    title: "Common Quality Defects in Textile Industry",
    excerpt:
      "Understanding common textile defects and how quality systems prevent production losses.",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    slug: "pareto-chart-usage",
    title: "Pareto Chart Usage in an Organization",
    excerpt:
      "How the 80/20 principle helps organizations focus on high-impact improvements.",
    date: "February 2026",
    readTime: "4 min read",
  },
  {
    slug: "why-why-analysis",
    title: "Why-Why Analysis Technique",
    excerpt:
      "A structured root cause analysis approach to solve problems permanently.",
    date: "January 2026",
    readTime: "6 min read",
  },
  {
    slug: "housekeeping-program-elements",
    title: "Major Elements of a Housekeeping Program",
    excerpt:
      "Key components that build discipline and operational clarity in manufacturing.",
    date: "December 2025",
    readTime: "5 min read",
  },
  {
    slug: "seven-wastes",
    title: "The Seven Wastes in any Organisation",
    excerpt:
      "Identifying and eliminating waste to improve productivity and profitability.",
    date: "November 2025",
    readTime: "7 min read",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Blogs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Insights & <span className="text-emerald-600">Articles</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical knowledge on lean transformation, operational excellence, and continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog) => (
              <motion.article
                key={blog.slug}
                variants={item}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-8">
                  {/* Meta info */}
                  

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Read more link */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}