import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lean Layout Design | LeanCo",
};

export default function LeanLayoutDesign() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Lean Layout Design
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In Lean management, efficiency isn’t just about processes — it’s also
          about how your workspace is designed. Lean Layout Design focuses on
          organizing people, machines, and materials to ensure a smooth,
          continuous flow of work with minimal waste.
        </p>

        {/* IMAGE BELOW REQUESTED LINE */}
        <div className="mb-14">
          <Image
            src="/lean_flow-chart-1.webp"
            alt="Lean Layout Flow Design Example"
            width={1200}
            height={700}
          />
        </div>

        {/* What is Lean Layout */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Lean Layout Design?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lean Layout Design is the strategic arrangement of workstations,
            equipment, and materials to support flow, flexibility, and visibility.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The objective is to make the movement of products, people, and
            information as simple and direct as possible — eliminating
            transportation waste, reducing waiting time, and improving
            communication between processes.
          </p>
        </div>

        {/* Key Principles */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Principles of Lean Layout Design
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Flow-Oriented Layout:</strong> Arrange processes in
              operational sequence to promote continuous flow and eliminate backtracking.
            </li>
            <li>
              <strong>U-Shaped / Cellular Layouts:</strong> Bring people,
              machines, and materials closer to improve teamwork and flexibility.
            </li>
            <li>
              <strong>Minimize Movement:</strong> Keep frequently used tools
              within easy reach to reduce motion waste.
            </li>
            <li>
              <strong>Visual Control:</strong> Use clear markings, boards,
              and labeling to make the layout intuitive.
            </li>
            <li>
              <strong>Flexibility:</strong> Design layouts that adapt easily
              to demand changes and product mix variations.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Lean Layout Design
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces unnecessary movement and handling</li>
            <li>Improves productivity and workflow</li>
            <li>Enhances communication and process visibility</li>
            <li>Optimizes space utilization</li>
            <li>Supports continuous improvement and safety</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A Lean Layout is more than just an efficient floor plan —
            it reflects how work should flow without interruption.
          </p>

          <p className="text-gray-700 italic">
            “When layout supports flow, efficiency becomes effortless.”
          </p>
        </div>

      </div>
    </section>
  );
}