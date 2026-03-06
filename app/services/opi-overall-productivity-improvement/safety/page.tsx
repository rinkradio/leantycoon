import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety | LeanCo",
  description:
    "Integrated safety systems embedded within Lean productivity and operational excellence frameworks.",
};

export default function Safety() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Safety
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In high-performing organizations, safety is not just a priority — it is a non-negotiable value.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          A truly Lean workplace ensures that every employee returns home safely,
          every single day. By embedding safety into daily operations, organizations
          protect their people, stabilize processes, and strengthen long-term performance.
        </p>

        {/* What is Workplace Safety */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Workplace Safety?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Workplace Safety refers to structured systems, standards, and behaviors
            designed to prevent accidents, injuries, and health hazards.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It includes risk assessments, safety audits, visual controls,
            protective equipment, ergonomic design, and emergency response planning —
            all integrated into daily management routines.
          </p>
        </div>

        {/* Safety & Lean Alignment */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How Safety Supports Lean Principles
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Reduces downtime caused by accidents or unsafe conditions</li>
            <li>Improves operational focus and process stability</li>
            <li>Strengthens accountability through standardized work</li>
            <li>Identifies and eliminates risk-based waste</li>
            <li>Reinforces the principle that people are the most valuable resource</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Lean and Safety are aligned — both aim to eliminate waste,
            whether it is wasted motion, unsafe behavior, or preventable incidents.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of a Strong Safety Culture
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Fewer accidents and zero lost-time incidents</li>
            <li>Higher employee morale and trust</li>
            <li>Improved regulatory compliance</li>
            <li>Increased productivity and operational reliability</li>
            <li>Enhanced organizational reputation and sustainability</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Safety is the foundation of operational excellence. When organizations
            treat safety as a daily discipline rather than an occasional initiative,
            performance improves naturally and sustainably.
          </p>

          <p className="text-gray-700 italic">
            “A safe workplace is a strong workplace — protecting people protects performance.”
          </p>
        </div>

      </div>
    </section>
  );
}