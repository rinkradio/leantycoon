import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Process Mapping | LeanCo",
};

export default function ProcessMapping() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Process Mapping
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Every organization runs on processes — but not every process runs efficiently.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          That’s where Process Mapping comes in. It’s a powerful Lean tool that
          helps teams visualize, analyze, and improve the way work actually happens.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/process-mapping-onboarding.webp"
            alt="Process Mapping Flow Diagram Example"
            width={1200}
            height={700}
            className="rounded-2xl shadow-md border border-borderGrey"
          />
        </div>

        {/* What is Process Mapping */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            What is Process Mapping?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Process Mapping is the visual representation of a workflow — showing
            each step, decision point, input, and output from start to finish.
          </p>

          <p className="text-gray-700 leading-relaxed italic">
            “If you can’t see the process, you can’t improve it.”
          </p>
        </div>

        {/* Types of Process Maps */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Types of Process Maps
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>High-Level (SIPOC) Map:</strong> Shows Suppliers,
              Inputs, Process, Outputs, and Customers.
            </li>
            <li>
              <strong>Detailed Flowchart:</strong> Captures every action,
              decision, and handoff.
            </li>
            <li>
              <strong>Swimlane Diagram:</strong> Highlights cross-functional
              responsibilities across teams.
            </li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Why Process Mapping Matters
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Identifies non–value-added steps and waste</li>
            <li>Improves clarity and cross-functional communication</li>
            <li>Creates a baseline for standardization</li>
            <li>Helps design smoother, more efficient workflows</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces errors and delays</li>
            <li>Increases transparency and accountability</li>
            <li>Improves efficiency and customer satisfaction</li>
            <li>Builds a strong foundation for Kaizen</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Process Mapping is more than drawing boxes and arrows —
            it’s about understanding reality clearly.
          </p>

          <p className="text-gray-700 italic">
            “Clarity leads to improvement — and Process Mapping provides that clarity.”
          </p>
        </div>

      </div>
    </section>
  );
}