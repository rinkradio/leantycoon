import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7QC Tools | LeanCo",
};

export default function SevenQCTools() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          7 QC Tools
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Quality doesn’t happen by chance — it’s achieved through data,
          analysis, and continuous improvement.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The 7 QC (Quality Control) Tools are the fundamental techniques used
          in Lean and Six Sigma to identify, analyze, and solve quality problems
          in any process.
        </p>

        {/* IMAGE BELOW REQUESTED SENTENCE */}
        <div className="mb-14">
          <Image
            src="/7-QC-Tools-1.webp"
            alt="7 QC Tools Overview Diagram"
            width={1200}
            height={700}
          />
        </div>

        {/* What are 7 QC Tools */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What are the 7 QC Tools?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Popularized by Kaoru Ishikawa, these tools help teams make decisions
            based on facts rather than assumptions — ensuring consistent product
            and process quality.
          </p>
        </div>

        {/* List of Tools */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             The 7 QC Tools
          </h2>

          <ul className="space-y-6 text-gray-700">
            <li>
              <strong>Check Sheet:</strong> A structured data collection form
              used to record frequency of issues.
            </li>

            <li>
              <strong>Pareto Chart:</strong> Identifies the most significant
              problems using the 80/20 principle.
            </li>

            <li>
              <strong>Cause & Effect Diagram (Fishbone):</strong> Helps identify
              root causes by categorizing contributing factors.
            </li>

            <li>
              <strong>Histogram:</strong> Displays data distribution to detect
              variation or trends.
            </li>

            <li>
              <strong>Control Chart:</strong> Monitors process stability over time
              and distinguishes normal vs special variation.
            </li>

            <li>
              <strong>Scatter Diagram:</strong> Shows relationships between two
              variables to detect correlations.
            </li>

            <li>
              <strong>Flow Chart:</strong> A step-by-step visual representation
              of a process to identify bottlenecks and waste.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Using QC Tools
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Promotes data-driven problem solving</li>
            <li>Identifies root causes instead of symptoms</li>
            <li>Improves process stability and product quality</li>
            <li>Builds a culture of continuous improvement</li>
            <li>Enhances cross-functional communication</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The 7 QC Tools may be simple, but they are incredibly powerful
            when applied consistently.
          </p>

          <p className="text-gray-700 italic">
            “Quality improvement begins with understanding — and the 7 QC Tools
            help you see what really matters.”
          </p>
        </div>

      </div>
    </section>
  );
}