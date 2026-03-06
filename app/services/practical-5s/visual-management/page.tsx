import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Management | LeanCo",
  description:
    "Create visual systems that improve control, transparency, and real-time performance visibility.",
};

export default function VisualManagement() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Visual Management
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In a truly Lean workplace, information should never be hidden —
          it must be visible at a glance.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Visual Management is a powerful Lean approach that enables teams to
          instantly understand the status of work, detect abnormalities, and
          take corrective action without delay.
        </p>

        {/* What is Visual Management */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Visual Management?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Visual Management uses clear visual signals — such as colors,
            labels, charts, boards, and markings — to communicate information
            quickly and effectively.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It ensures that anyone, at any time, can understand:
          </p>

          <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-6">
            <li>What is happening in the process</li>
            <li>What should be happening</li>
            <li>What action is required if something goes wrong</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            In short, it transforms the workplace into a self-explaining system.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How Visual Management Works
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Color Coding:</strong> Red/Yellow/Green indicators for status visibility
            </li>
            <li>
              <strong>Andon Boards:</strong> Real-time performance and issue tracking
            </li>
            <li>
              <strong>Labels & Floor Markings:</strong> Clear identification of tools, materials, and safety zones
            </li>
            <li>
              <strong>Visual Standards:</strong> Checklists, dashboards, and work instructions
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            These visual cues make abnormalities immediately visible,
            enabling faster problem-solving and stronger operational control.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Visual Management
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Improves communication and teamwork</li>
            <li>Reduces dependency on verbal instructions</li>
            <li>Enhances workplace organization and safety</li>
            <li>Enables faster detection of issues</li>
            <li>Promotes transparency and accountability</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Visual Management brings clarity to operational complexity.
            By making information visible and intuitive, organizations empower
            every team member to understand performance, identify problems,
            and contribute to continuous improvement.
          </p>

          <p className="text-gray-700 italic">
            “What gets seen, gets managed — and what gets managed, gets improved.”
          </p>
        </div>

      </div>
    </section>
  );
}