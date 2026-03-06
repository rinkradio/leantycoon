import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lean Basics – Principles & Tools | LeanCo",
};

export default function LeanBasics() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Lean Basics – Principles & Tools
        </h1>

        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          In today’s competitive business environment, efficiency is not optional —
          it is essential. Lean thinking provides a structured yet flexible framework
          to streamline operations, enhance quality, and deliver greater value to customers.
        </p>

        {/* What is Lean */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What Is Lean?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lean is a continuous improvement philosophy focused on maximizing
            customer value while minimizing waste. Originating from the Toyota
            Production System (TPS), Lean enhances flow, eliminates non-value-added
            activities, and empowers people at all levels to drive improvement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Simply put — Lean means doing more with less: less time, less effort,
            less space, and fewer resources — while achieving higher customer
            satisfaction and better quality.
          </p>
        </div>

        {/* 5 Principles */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             The 5 Key Principles of Lean
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li><strong>1. Define Value:</strong> Identify what the customer truly values and is willing to pay for.</li>
            <li><strong>2. Map the Value Stream:</strong> Visualize every step in the process to identify waste.</li>
            <li><strong>3. Create Flow:</strong> Ensure smooth movement of work without interruptions.</li>
            <li><strong>4. Establish Pull:</strong> Produce only what is needed, when it is needed.</li>
            <li><strong>5. Pursue Perfection:</strong> Commit to continuous improvement (Kaizen).</li>
          </ul>
        </div>

        {/* 7 Wastes */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             The 7 Types of Waste (Muda)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Overproduction</h3>
              <p>Producing more or earlier than required.</p>
            </div>

            <div>
              <h3 className="font-semibold">Waiting</h3>
              <p>Idle time due to delays in materials, approvals, or processes.</p>
            </div>

            <div>
              <h3 className="font-semibold">Transportation</h3>
              <p>Unnecessary movement of materials or products.</p>
            </div>

            <div>
              <h3 className="font-semibold">Overprocessing</h3>
              <p>Doing more work than required or using overly complex systems.</p>
            </div>

            <div>
              <h3 className="font-semibold">Inventory</h3>
              <p>Excess raw materials, WIP, or finished goods.</p>
            </div>

            <div>
              <h3 className="font-semibold">Motion</h3>
              <p>Unnecessary movement of people due to poor layout or organization.</p>
            </div>

            <div>
              <h3 className="font-semibold">Defects</h3>
              <p>Errors that require rework, scrap, or additional resources.</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Tip: Remember the acronym <strong>TIMWOOD</strong> —
            Transportation, Inventory, Motion, Waiting,
            Overproduction, Overprocessing, Defects.
          </p>
        </div>

        {/* Final Thoughts */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Final Thoughts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Mastering Lean fundamentals — especially understanding and eliminating
            the 7 types of waste — lays the foundation for operational excellence.
            When combined with structured tools and leadership commitment,
            Lean becomes a powerful driver of sustainable growth and competitive advantage.
          </p>
        </div>

      </div>
    </section>
  );
}