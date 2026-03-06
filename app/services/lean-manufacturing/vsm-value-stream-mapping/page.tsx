import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VSM – Value Stream Mapping | LeanCo",
  description:
    "Value Stream Mapping (VSM) framework to visualize, analyze, and optimize end-to-end operational flow.",
};

export default function VSM() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VSM – Value Stream Mapping
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Value Stream Mapping (VSM) is one of the most powerful tools in Lean methodology,
          designed to visualize, analyze, and improve the flow of materials and information
          across a process.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          It enables organizations to see the complete journey — from customer order
          to final delivery — making waste, delays, and inefficiencies clearly visible.
        </p>

        {/* What is VSM */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Value Stream Mapping?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            VSM is a visual representation of every step involved in delivering
            a product or service — including both value-added and non-value-added activities.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By mapping the current state and designing a future state,
            organizations can identify bottlenecks, eliminate waste,
            and create smoother, faster process flows.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Benefits of VSM
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Identifies waste and process bottlenecks</li>
            <li>Enhances cross-functional collaboration</li>
            <li>Provides data-driven improvement insights</li>
            <li>Aligns teams toward shared Lean objectives</li>
            <li>Supports continuous monitoring and optimization</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            How VSM Works
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Map the current state process (input to delivery)</li>
            <li>Collect operational data — process time, waiting time, information flow</li>
            <li>Identify non-value-added steps and waste areas</li>
            <li>Design the future state map for optimized flow</li>
            <li>Implement and continuously monitor improvements</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Value Stream Mapping acts as the blueprint for operational excellence.
            It transforms hidden inefficiencies into visible improvement opportunities,
            enabling organizations to build faster, simpler, and more value-driven systems.
          </p>

          <p className="text-gray-700 italic">
            “You can’t improve what you can’t see — VSM makes the invisible visible.”
          </p>
        </div>

      </div>
    </section>
  );
}