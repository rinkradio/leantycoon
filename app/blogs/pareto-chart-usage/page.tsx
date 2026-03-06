import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pareto Chart Usage in an Organization | LeanTycoon",
  description:
    "Understanding Pareto Principle (80/20 Rule) and its practical application in organizational problem solving and operational excellence.",
};

export default function ParetoChart() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Pareto Chart Usage in an Organization
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          The Pareto Principle, commonly known as the 80/20 Rule, states that a
          small number of causes often contribute to the majority of results.
          It is not a strict mathematical law, but a recurring observation
          across industries and organizational systems.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          The Pareto Principle (80/20 Rule)
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>20% of inputs create 80% of results.</li>
          <li>80% of sales may come from 20% of customers.</li>
          <li>20% of employees may contribute 80% of productivity.</li>
          <li>20% of defects often cause 80% of rejections.</li>
          <li>
            It works bidirectionally — 20% may create most problems, but
            another 20% may drive most success.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          How is the 80/20 Rule Useful in an Organization?
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Helps prioritize high-impact issues.</li>
          <li>Improves decision-making clarity.</li>
          <li>Encourages focusing on what truly matters.</li>
          <li>Reduces time wasted on low-value activities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Introduction to Pareto Analysis Diagram
        </h2>

        <p className="text-gray-700 mb-6">
          A Pareto chart provides a graphical representation of problems in
          descending order of frequency. It separates the “vital few” from the
          “trivial many” and highlights which issues require immediate attention.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Bars represent frequency of occurrence.</li>
          <li>Categories are arranged from highest to lowest.</li>
          <li>A cumulative percentage line is plotted.</li>
          <li>Helps identify top contributors to problems.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Example: Machine Repair Instances – Which is the Highest Repaired Machine?
        </h2>

        <p className="text-gray-700 mb-6">
          Suppose an organization records machine repair frequency to identify
          which machines are responsible for the majority of downtime.
        </p>

        {/* IMAGE 1 */}
        <div className="relative w-full aspect-[16/12]">
          <Image
            src="/Pareto-1.webp"
            alt="Machine Repair Data for Pareto Analysis"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Steps Followed to Use Pareto
        </h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
          <li>Identify major causes leading to machine repairs.</li>
          <li>Observe and record frequency of each cause.</li>
          <li>Calculate cumulative frequency.</li>
          <li>Compute cumulative percentage.</li>
        </ol>

        {/* IMAGE 2 */}
        <div className="relative w-full aspect-[16/12] mb-12">
          <Image
            src="/Pareto-2.webp"
            alt="Pareto Chart Representation"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Key Learning from Pareto Analysis
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Majority of results come from minority of causes.</li>
          <li>Focus on the critical 20% that drives impact.</li>
          <li>Allocate resources strategically.</li>
          <li>Improve operational efficiency through prioritization.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed text-lg">
          The Pareto Principle is a powerful decision-making tool in lean
          management and operational excellence. Instead of spreading effort
          evenly across all problems, successful organizations concentrate on
          the few factors that truly drive performance.
        </p>

      </div>
    </section>
  );
}