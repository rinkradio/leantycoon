import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Standardised Work | LeanCo",
};

export default function StandardisedWork() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Standardised Work
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In Lean thinking, consistency creates excellence.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          That’s exactly what Standardized Work delivers — a structured approach
          that defines the best and safest way to perform a task, ensuring
          stability, quality, and efficiency across operations.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/Standard-Work-Foundation-For-Kaizen.webp"
            alt="Standardised Work Foundation for Kaizen"
            width={1200}
            height={700}
          />
        </div>

        {/* What is Standardised Work */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Standardized Work?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Standardized Work documents the current best method for performing
            a task or process. It ensures every operator follows the same sequence,
            timing, and method — creating predictable and repeatable outcomes.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It’s not about rigid control — it’s about establishing a baseline
            for continuous improvement.
          </p>
        </div>

        {/* Key Elements */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Elements of Standardized Work
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Takt Time:</strong> The pace required to meet customer demand.
            </li>
            <li>
              <strong>Work Sequence:</strong> The exact order of steps to complete a task.
            </li>
            <li>
              <strong>Standard Work-In-Process (WIP):</strong> The minimum inventory
              needed to maintain smooth flow.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            Together, these elements balance people, process, and production pace.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Standardized Work
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Ensures consistent quality and safety</li>
            <li>Reduces variation and operational waste</li>
            <li>Simplifies training and cross-skilling</li>
            <li>Builds a strong foundation for Kaizen</li>
            <li>Makes process deviations immediately visible</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Standardized Work is the backbone of Lean operations. It is not
            a one-time activity but a living system that evolves as better
            methods are discovered.
          </p>

          <p className="text-gray-700 italic">
            “Without a standard, there can be no improvement.” – Taiichi Ohno
          </p>
        </div>

      </div>
    </section>
  );
}