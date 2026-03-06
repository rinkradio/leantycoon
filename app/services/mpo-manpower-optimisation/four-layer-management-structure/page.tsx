import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Four Layer Management Structure | LeanCo",
  description:
    "Structured management hierarchy designed to improve accountability, escalation, and operational control.",
};

export default function FourLayerManagement() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Four Layer Management Structure Explained
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A successful Lean organization does not rely on random problem-solving.
          It operates through a structured management system that connects
          every level of the organization.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          The Four Layer Management Structure is a disciplined framework
          designed to ensure clarity, accountability, and consistent communication
          across all operational levels.
        </p>

        {/* What is Four Layer Structure */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is the Four Layer Structure?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Four Layer Structure is a tiered review system that monitors
            performance, escalates issues, and sustains continuous improvement
            through structured daily meetings at different organizational levels.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Each layer focuses on specific priorities — from shop-floor
            operations to executive strategy — ensuring alignment and
            rapid resolution of problems.
          </p>
        </div>

        {/* The Four Layers */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             The Four Layers
          </h2>

          <ul className="space-y-6 text-gray-700">
            <li>
              <strong>Layer 1 – Operator / Team Level:</strong><br />
              Focuses on daily tasks, immediate abnormalities, and
              frontline problem-solving.
            </li>

            <li>
              <strong>Layer 2 – Supervisor Level:</strong><br />
              Reviews team performance, removes barriers, and
              supports execution consistency.
            </li>

            <li>
              <strong>Layer 3 – Manager Level:</strong><br />
              Analyzes trends, allocates resources, and ensures
              cross-functional coordination.
            </li>

            <li>
              <strong>Layer 4 – Leadership Level:</strong><br />
              Monitors strategic KPIs, reviews overall performance,
              and drives long-term improvement initiatives.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            This hierarchy ensures that information flows both upward and
            downward — enabling structured escalation and informed decision-making.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of the Four Layer Structure
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Strengthens communication across all levels</li>
            <li>Enables faster issue escalation and resolution</li>
            <li>Creates accountability at every management tier</li>
            <li>Improves visibility of performance metrics</li>
            <li>Builds a culture of structured continuous improvement</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Four Layer Management Structure forms the backbone of
            Lean daily management systems. By connecting every level of
            the organization through disciplined review routines,
            problems are solved faster, performance is sustained,
            and improvement becomes systematic — not accidental.
          </p>

          <p className="text-gray-700 italic">
            “Structured communication drives structured performance.”
          </p>
        </div>

      </div>
    </section>
  );
}