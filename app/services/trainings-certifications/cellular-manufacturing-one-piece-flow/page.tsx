import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cellular Manufacturing & One-Piece Flow | LeanCo",
};

export default function CellularManufacturing() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Cellular Manufacturing & One-Piece Flow
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In a world where speed, flexibility, and quality define success,
          Cellular Manufacturing and One-Piece Flow are two powerful Lean
          techniques that help organizations eliminate waste and achieve
          smooth, efficient operations.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/Cellular-Manufacturing-1.webp"
            alt="Cellular Manufacturing Layout Example"
            width={1200}
            height={700}
          />
        </div>

        {/* Cellular Manufacturing Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Cellular Manufacturing?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cellular Manufacturing groups machines and processes into cells
            arranged according to the sequence required to produce a product
            or part family.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Instead of departments operating separately (machining, assembly,
            inspection), a single cell completes the process from start to finish.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Smooth flow of materials</li>
            <li>Reduced movement and waiting</li>
            <li>Improved teamwork and communication</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            The goal: Complete a product efficiently within one flow area —
            not across disconnected departments.
          </p>
        </div>

        {/* One-Piece Flow Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is One-Piece Flow?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            One-Piece Flow (Continuous Flow) means moving one product at a time
            through each process step — without batching or delay.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces inventory and lead time</li>
            <li>Improves quality by catching issues immediately</li>
            <li>Increases flexibility to respond to demand changes</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            “Make one, move one” — that’s the essence of One-Piece Flow.
          </p>
        </div>

        {/* How They Work Together */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            How They Work Together
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cellular Manufacturing provides the layout, and One-Piece Flow
            governs the movement within that layout.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Shorter production cycles</li>
            <li>Less waste and rework</li>
            <li>Greater visibility and team ownership</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces inventory and floor space</li>
            <li>Enhances productivity and quality</li>
            <li>Improves communication and problem-solving</li>
            <li>Builds a flexible, responsive production system</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Cellular Manufacturing and One-Piece Flow bring Lean principles
            to life by making processes faster, smoother, and more connected.
          </p>

          <p className="text-gray-700 italic">
            “Flow is the heart of Lean — and Cellular Manufacturing makes it possible.”
          </p>
        </div>

      </div>
    </section>
  );
}