import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R&R System – Roles & Responsibilities | LeanCo",
  description:
    "Structured Roles & Responsibilities systems designed to improve accountability, clarity, and operational discipline.",
};

export default function RRSystem() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          R&R System – Roles & Responsibilities
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In every successful organization, clarity is power.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          The R&R System (Roles & Responsibilities) ensures that every individual
          understands what to do, when to do it, and how their work contributes
          to the overall organizational objectives.
        </p>

        {/* What is R&R */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is the R&R System?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The R&R System clearly defines and documents the specific roles,
            responsibilities, and accountability of individuals and teams
            within an organization.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It eliminates confusion, prevents overlap, and ensures that every
            task has a clearly accountable owner — a critical requirement in
            Lean management systems.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How the R&R System Works
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li><strong>Define Roles:</strong> Outline positions and their purpose within the process.</li>
            <li><strong>Assign Responsibilities:</strong> Clarify daily tasks, authority, and accountability areas.</li>
            <li><strong>Communicate Clearly:</strong> Use R&R matrices (e.g., RACI) for transparency.</li>
            <li><strong>Review Periodically:</strong> Update roles as processes evolve.</li>
          </ul>

          <p className="mt-6 text-gray-700">
            This structure reduces duplication, eliminates ambiguity,
            and enables employees to focus on value-added work.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of an Effective R&R System
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Strengthens communication and coordination</li>
            <li>Reduces duplication and confusion</li>
            <li>Enhances accountability and ownership</li>
            <li>Improves efficiency and decision-making</li>
            <li>Builds a culture of transparency and teamwork</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A well-structured R&R System forms the backbone of operational discipline.
            When responsibilities are clearly defined and ownership is embraced,
            performance improves and alignment becomes natural.
          </p>

          <p className="text-gray-700 italic">
            “Clarity creates confidence — and confidence drives performance.”
          </p>
        </div>

      </div>
    </section>
  );
}