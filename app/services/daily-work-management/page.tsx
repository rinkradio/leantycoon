import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Daily Work Management | LeanCo",
  description:
    "Structured Daily Work Management (DWM) system aligning daily execution with strategic objectives through visual control and accountability.",
};

export default function DailyWorkManagement() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Daily Work Management
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Daily Work Management (DWM) is a core Lean practice that ensures
          processes run smoothly every day, aligning daily activities with
          organizational goals.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          It focuses on creating a disciplined routine where teams monitor
          performance, solve problems, and continuously improve — one day at a time.
        </p>

        {/* IMAGE */}
        <div className="mb-14">
          <Image
            src="/Data-management.webp"
            alt="Daily Work Management Visual Board"
            width={1200}
            height={700}
          />
        </div>

        {/* What is DWM */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Daily Work Management?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            DWM is a structured management system that uses visual controls,
            standard work, and regular review routines to stabilize operations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It connects strategic objectives to frontline execution —
            transforming long-term plans into measurable daily actions.
          </p>
        </div>

        {/* Key Elements */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Elements of Daily Work Management
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li><strong>Daily Meetings:</strong> Short performance huddles to review priorities.</li>
            <li><strong>Visual Boards:</strong> Display KPIs, issues, and action plans.</li>
            <li><strong>Standard Work:</strong> Clear roles and execution routines.</li>
            <li><strong>Problem-Solving:</strong> Immediate response to abnormalities.</li>
            <li><strong>Follow-Up & Accountability:</strong> Track and close action items.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of DWM
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Builds discipline and ownership</li>
            <li>Improves transparency and communication</li>
            <li>Enables real-time issue resolution</li>
            <li>Stabilizes processes</li>
            <li>Strengthens continuous improvement culture</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Daily Work Management is the operational heartbeat of a Lean organization.
            When leaders manage the day effectively, performance becomes predictable
            and improvement becomes systematic.
          </p>

          <p className="text-gray-700 italic">
            “Manage the day, and the results will manage themselves.”
          </p>
        </div>

      </div>
    </section>
  );
}