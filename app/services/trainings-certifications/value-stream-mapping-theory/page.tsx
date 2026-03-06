import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Value Stream Mapping Theory | LeanCo",
};

export default function ValueStreamMapping() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Value Stream Mapping Theory
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Value Stream Mapping (VSM) is one of the most powerful Lean tools used
          to visualize and improve the flow of materials and information from
          the start of a process to final delivery to the customer.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          It helps identify both value-added and non-value-added activities,
          allowing teams to spot waste (Muda) and make processes more efficient.
        </p>

        {/* IMAGE SECTION */}
        <div className="mb-14">
          <Image
            src="/VSM-1.webp"
            alt="Value Stream Mapping Diagram"
            width={1000}
            height={400}
            className="rounded-2xl border border-borderGrey"
          />
        </div>

        {/* What It Does */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            🔍 What It Does
          </h2>
          <p className="text-gray-700 leading-relaxed">
            VSM provides a big-picture view of how value moves through your
            organization — highlighting delays, rework, and bottlenecks.
            By mapping both the current state (how things work now) and the
            future state (how they should work), teams can plan structured
            improvements and create smoother workflows.
          </p>
        </div>

        {/* Key Steps */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            ⚙️ Key Steps
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
            <li>Select a product or service to map</li>
            <li>Observe and document the current process</li>
            <li>Identify waste and delays</li>
            <li>Design the improved future process</li>
            <li>Implement and review continuously</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            🚀 Benefits
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
            <li>Reduces lead time and operational waste</li>
            <li>Improves process flow and efficiency</li>
            <li>Encourages teamwork and structured problem-solving</li>
            <li>Enhances customer value and satisfaction</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            🧭 Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Value Stream Mapping is more than just a diagram — it’s a structured
            way of seeing your entire process clearly.
          </p>
          <p className="text-gray-700 leading-relaxed italic">
            “You can’t improve what you can’t see — and VSM helps you see your
            process end to end.”
          </p>
        </div>

      </div>
    </section>
  );
}