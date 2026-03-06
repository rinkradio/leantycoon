import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kanban | LeanCo",
};

export default function Kanban() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Kanban
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In Lean manufacturing and service systems, Kanban is one of the most
          effective tools for achieving smooth workflow, flexibility, and
          continuous improvement. It helps teams visualize work, limit overload,
          and focus on just-in-time (JIT) production — producing only what’s
          needed, when it’s needed.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/kaban.webp"
            alt="Kanban Visual Board Example"
            width={1200}
            height={700}
          />
        </div>

        {/* What is Kanban */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Kanban?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The word “Kanban” means “visual signal” or “card” in Japanese.
            In Lean systems, it is a visual scheduling method that controls
            the flow of materials and information through a process.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Each Kanban card — whether physical or digital — represents a
            task or product, signaling when new work should begin. This prevents
            overproduction and maintains steady operational flow.
          </p>
        </div>

        {/* How Kanban Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             How Kanban Works
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kanban operates on a pull system — meaning work is triggered
            by actual demand rather than forecasted assumptions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When a product is consumed, a Kanban signal initiates replenishment,
            keeping inventory low and processes responsive.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">
            Key Elements of Kanban:
          </h3>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li><strong>Visual Board:</strong> Displays stages (To Do → In Progress → Done)</li>
            <li><strong>Kanban Cards:</strong> Represent work items and track progress</li>
            <li><strong>WIP Limits:</strong> Restrict work-in-progress to maintain smooth flow</li>
            <li><strong>Continuous Improvement:</strong> Regular reviews to eliminate bottlenecks</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Kanban
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Improves workflow visibility and control</li>
            <li>Reduces overproduction and waiting time</li>
            <li>Enhances coordination and communication</li>
            <li>Enables faster response to customer demand</li>
            <li>Promotes continuous improvement and adaptability</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Kanban is more than a board of cards — it is a mindset of flow,
            flexibility, and focus.
          </p>

          <p className="text-gray-700 italic">
            “When you can see the flow, you can improve the flow — that’s the essence of Kanban.”
          </p>
        </div>

      </div>
    </section>
  );
}