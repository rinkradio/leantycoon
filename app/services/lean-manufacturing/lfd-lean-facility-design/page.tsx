import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFD – Lean Facility Design | LeanCo",
  description:
    "Lean Facility Design (LFD) framework to optimize layout, flow, safety, and scalability in manufacturing environments.",
};

export default function LFD() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          LFD – Lean Facility Design
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Lean Facility Design (LFD) focuses on creating workplace layouts
          that support flow, efficiency, and safety — ensuring every movement,
          process, and resource contributes directly to value creation.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          It is not just about designing a building or floor plan —
          it is about designing a smarter, more efficient way of working.
        </p>

        {/* What is LFD */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            What is Lean Facility Design?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            LFD applies Lean principles to the planning and arrangement
            of physical spaces, ensuring materials, people, and information
            move seamlessly through the system.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The objective is to eliminate layout-driven waste —
            including excess motion, waiting time, and unnecessary transportation —
            while enabling smooth flow, flexibility, and visual control.
          </p>
        </div>

        {/* Key Elements */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Elements of Lean Facility Design
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Flow-Oriented Layout:</strong> Align processes sequentially
              to minimize backtracking and delays.
            </li>
            <li>
              <strong>Visual Controls:</strong> Use floor markings, signage,
              and boards for clarity and safety.
            </li>
            <li>
              <strong>Right-Sized Equipment Placement:</strong> Optimize space
              without overbuilding capacity.
            </li>
            <li>
              <strong>Flexibility:</strong> Enable quick reconfiguration for
              new products or demand shifts.
            </li>
            <li>
              <strong>Safety & Ergonomics:</strong> Design for secure,
              comfortable, and sustainable operations.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of LFD
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces waste in movement, space, and time</li>
            <li>Improves productivity and communication</li>
            <li>Enhances workplace safety and morale</li>
            <li>Supports scalability and future growth</li>
            <li>Strengthens overall operational efficiency</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean Facility Design transforms physical space into a strategic
            performance driver. When layout supports flow, efficiency becomes
            natural and improvement becomes sustainable.
          </p>

          <p className="text-gray-700 italic">
            “A smart layout builds smart work — design your space to make efficiency effortless.”
          </p>
        </div>

      </div>
    </section>
  );
}