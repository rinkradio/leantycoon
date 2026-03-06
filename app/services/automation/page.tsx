import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | LeanCo",
  description:
    "Lean-aligned automation systems designed to reduce waste, improve quality, and enhance operational productivity.",
};

export default function Automation() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Automation
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In Lean systems, Automation is not about replacing people —
          it is about using technology intelligently to eliminate waste,
          improve accuracy, and stabilize processes.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          When implemented strategically, automation enhances productivity,
          reduces variability, and allows teams to focus on true value-added work.
        </p>

        {/* What is Automation */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Automation in Lean?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Automation refers to the use of machines, digital systems,
            and intelligent technologies to perform repetitive or time-consuming
            tasks with minimal manual intervention.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Lean emphasizes the concept of <strong>Autonomation (Jidoka)</strong> —
            automation with a human touch — where systems automatically detect
            abnormalities and stop to prevent defects, ensuring built-in quality.
          </p>
        </div>

        {/* Types of Automation */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Types of Automation
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Process Automation:</strong> Streamlining workflows in production or administration.
            </li>
            <li>
              <strong>Digital Automation:</strong> Leveraging IoT, AI, and data systems for real-time visibility.
            </li>
            <li>
              <strong>Robotic Automation:</strong> Deploying robots or cobots for repetitive physical tasks.
            </li>
            <li>
              <strong>Autonomation (Jidoka):</strong> Machines that detect and correct abnormalities automatically.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Automation
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces manual errors and variability</li>
            <li>Improves productivity and operational reliability</li>
            <li>Enhances safety and process consistency</li>
            <li>Increases capacity and reduces cycle time</li>
            <li>Allows employees to focus on higher-value tasks</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Automation in Lean is about working smarter — not harder.
            When integrated with disciplined processes and visual control systems,
            it becomes a powerful enabler of efficiency, quality, and continuous improvement.
          </p>

          <p className="text-gray-700 italic">
            “Automation doesn’t replace people — it empowers them to do smarter work.”
          </p>
        </div>

      </div>
    </section>
  );
}