import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "5S Methodology & Visual Workplace Management | LeanCo",
};

export default function FiveSMethodology() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          5S & Visual Workplace Management – Building the Foundation for Lean Excellence
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          A clean, organized, and visual workplace isn’t just about appearance —
          it’s about efficiency, safety, and consistency. Two of the most effective
          Lean tools that create this foundation are 5S and Visual Workplace Management.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/5S-METHODOLOGY-1.webp"
            alt="5S Methodology and Visual Workplace Example"
            width={800}
            height={100}
            
          />
        </div>

        {/* 5S Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is 5S?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            5S is a structured method for organizing the workplace to improve
            efficiency, reduce waste, and enhance safety. It creates an environment
            where everything has a defined place and every process is standardized.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li><strong>Sort (Seiri):</strong> Remove unnecessary items.</li>
            <li><strong>Set in Order (Seiton):</strong> Arrange tools for easy access.</li>
            <li><strong>Shine (Seiso):</strong> Maintain cleanliness and inspection readiness.</li>
            <li><strong>Standardize (Seiketsu):</strong> Create consistent procedures and visual cues.</li>
            <li><strong>Sustain (Shitsuke):</strong> Maintain discipline and daily adherence.</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            The goal: A safe, efficient, and visually clear environment where waste cannot hide.
          </p>
        </div>

        {/* Visual Workplace Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Visual Workplace Management?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Visual Management complements 5S by making information intuitive and visible.
            It uses color codes, dashboards, labels, and floor markings to communicate
            standards and performance instantly.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Color-coded storage and tools</li>
            <li>Visual performance boards</li>
            <li>Andon lights or status signals</li>
            <li>Floor markings for safety zones</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Visual cues help everyone — even newcomers — understand what is normal and what is not.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of 5S & Visual Management
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Improves productivity and workflow</li>
            <li>Reduces motion, confusion, and delays</li>
            <li>Enhances safety and quality control</li>
            <li>Builds ownership and discipline</li>
            <li>Supports continuous improvement (Kaizen)</li>
          </ul>
        </div>

        {/* Conclusion Box */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            5S and Visual Workplace Management form the foundation of Lean culture.
            When workplaces are clean, visual, and standardized, employees focus
            on value creation instead of searching, waiting, or correcting errors.
          </p>

          <p className="italic text-gray-700 mb-6">
            “A visual workplace speaks for itself — no words needed, just clarity and flow.”
          </p>

          <div className="border-t pt-6">
            <p className="text-gray-700">
              Contact <strong>Leantycoon Consulting Group</strong> for professional Lean deployment services.
            </p>
            <p className="text-primary font-medium mt-2">
              www.leantycoon.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}