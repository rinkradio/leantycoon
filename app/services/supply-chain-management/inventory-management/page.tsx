import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management | LeanCo",
  description:
    "Lean-based inventory management systems designed to optimize stock levels, reduce waste, and improve operational flow.",
};

export default function InventoryManagement() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Inventory Management
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Inventory Management is a critical Lean discipline focused on maintaining
          the right quantity of materials at the right time — avoiding both excess
          and shortages.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Effective inventory control reduces waste, improves cash flow,
          and stabilizes production systems while aligning with Lean’s core
          objective: delivering value without excess.
        </p>

        {/* What is Inventory Management */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            What is Lean Inventory Management?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            In Lean methodology, inventory is considered one of the seven wastes (Muda).
            Excess stock hides process inefficiencies, increases storage costs,
            and locks working capital.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The goal is balance — maintaining the minimum necessary inventory
            required to support continuous flow and customer demand without
            creating instability.
          </p>
        </div>

        {/* Key Elements */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Key Elements of Lean Inventory Management
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Just-in-Time (JIT):</strong> Receive and produce only what is needed, when needed.
            </li>
            <li>
              <strong>Kanban System:</strong> Use visual signals to trigger replenishment.
            </li>
            <li>
              <strong>ABC Analysis:</strong> Prioritize items based on value and frequency of use.
            </li>
            <li>
              <strong>Safety Stock Optimization:</strong> Maintain minimal buffers for critical materials.
            </li>
            <li>
              <strong>Cycle Counting & Audits:</strong> Ensure real-time stock accuracy.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Effective Inventory Management
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces working capital and carrying costs</li>
            <li>Improves production flow and responsiveness</li>
            <li>Enhances traceability and stock accuracy</li>
            <li>Minimizes waste from obsolescence and overstocking</li>
            <li>Strengthens supplier coordination</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Inventory Management is about visibility, control, and discipline —
            not accumulation. When managed using Lean principles, inventory becomes
            a controlled asset rather than a hidden liability.
          </p>

          <p className="text-gray-700 italic">
            “The right inventory isn’t more — it’s what moves at the right time, every time.”
          </p>
        </div>

      </div>
    </section>
  );
}