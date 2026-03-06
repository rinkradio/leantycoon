import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I-OMQH – Integrated Operations, Manufacturing, Quality & Health | LeanCo",
  description:
    "An integrated operational framework aligning Operations, Manufacturing, Quality, and Health for sustainable performance excellence.",
};

export default function IOMQH() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          I-OMQH – Integrated Operations, Manufacturing, Quality & Health
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In today’s competitive manufacturing environment, sustainable success
          depends on the integration of quality, efficiency, and safety.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          I-OMQH is a structured framework that aligns Operations, Manufacturing,
          Quality, and Health into one cohesive system — eliminating silos and
          driving total operational excellence.
        </p>

        {/* What is I-OMQH */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is I-OMQH?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            I-OMQH integrates critical plant functions into a unified
            operational structure. Rather than managing departments independently,
            it ensures that production efficiency, product quality, and employee
            safety operate in alignment.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This integration improves visibility, strengthens cross-functional
            collaboration, and supports continuous improvement at every level.
          </p>
        </div>

        {/* Key Focus Areas */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Focus Areas
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Operations:</strong> Streamlining workflows to ensure smooth and stable production flow.
            </li>
            <li>
              <strong>Manufacturing:</strong> Optimizing resources, maintaining takt time, and reducing waste.
            </li>
            <li>
              <strong>Quality:</strong> Establishing right-first-time systems with clear standards and controls.
            </li>
            <li>
              <strong>Health:</strong> Promoting workplace safety, ergonomics, and employee well-being.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            Together, these pillars form a balanced ecosystem that sustains
            performance and drives long-term growth.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of I-OMQH
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Improves cross-functional coordination</li>
            <li>Enhances process efficiency and product quality</li>
            <li>Reduces downtime, rework, and operational waste</li>
            <li>Strengthens workplace safety and morale</li>
            <li>Builds a culture of integrated performance management</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I-OMQH is more than a framework — it is a system of alignment.
            By integrating Operations, Manufacturing, Quality, and Health
            under one structured model, organizations achieve safer workplaces,
            stronger quality control, and sustainable performance excellence.
          </p>

          <p className="text-gray-700 italic">
            “Integration eliminates silos — and alignment drives excellence.”
          </p>
        </div>

      </div>
    </section>
  );
}