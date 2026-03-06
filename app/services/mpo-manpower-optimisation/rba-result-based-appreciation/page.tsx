import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RBA – Result Based Appreciation | LeanCo",
  description:
    "Performance-driven recognition systems aligned with measurable business results.",
};

export default function ResultBasedAppreciation() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          RBA – Result Based Appreciation
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In a Lean organization, appreciation is more than saying “good job.”
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          It means recognizing the right actions that lead to measurable results.
          That is the essence of RBA — Result Based Appreciation.
        </p>

        {/* What is RBA */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is RBA?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            RBA is a structured recognition approach that rewards individuals
            or teams based on the measurable impact of their work —
            not just effort or activity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It focuses on appreciating outcomes that directly support
            organizational objectives, such as:
          </p>

          <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduced waste or operational cost</li>
            <li>Improved quality or delivery performance</li>
            <li>Enhanced productivity or customer satisfaction</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            This ensures recognition is fair, transparent, and aligned with results that matter.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How RBA Works
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Define clear goals and measurable KPIs</li>
            <li>Track actual improvements and performance outcomes</li>
            <li>Recognize teams or individuals delivering measurable impact</li>
            <li>Share success stories to reinforce a performance culture</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of RBA
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Encourages results-oriented thinking</li>
            <li>Boosts ownership and accountability</li>
            <li>Strengthens motivation and engagement</li>
            <li>Reinforces continuous improvement culture</li>
            <li>Aligns teams with strategic business objectives</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Result Based Appreciation transforms recognition into a strategic
            performance driver. By celebrating measurable outcomes rather than
            just effort, organizations create a culture of accountability,
            excellence, and sustained performance.
          </p>

          <p className="text-gray-700 italic">
            “What gets appreciated gets repeated — recognize results, and performance multiplies.”
          </p>
        </div>

      </div>
    </section>
  );
}