import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAT – Turn Around Time | LeanCo",
  description:
    "Lean-based Turn Around Time (TAT) improvement strategies to reduce cycle time, eliminate bottlenecks, and improve delivery performance.",
};

export default function TAT() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          TAT – Turn Around Time
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Turn Around Time (TAT) measures the total time required to complete
          a process — from initiation to final delivery.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          In Lean systems, TAT reflects operational health. A shorter TAT
          indicates smooth flow, minimal waste, and strong coordination,
          while high TAT exposes inefficiencies such as waiting, rework,
          and bottlenecks.
        </p>

        {/* What is TAT */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is Turn Around Time?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            TAT represents the duration between the start and completion
            of a task — whether it is a production order, service request,
            procurement cycle, or decision process.
          </p>

          <p className="text-gray-700 leading-relaxed">
            In Lean philosophy, reducing TAT means eliminating non-value-added
            activities and improving process flow without compromising quality.
          </p>
        </div>

        {/* Ways to Improve */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Ways to Improve TAT
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Map the process using Value Stream Mapping (VSM)</li>
            <li>Identify and eliminate bottlenecks causing delays</li>
            <li>Implement Standard Work for consistency</li>
            <li>Use Daily Work Management (DWM) for performance tracking</li>
            <li>Strengthen cross-functional coordination</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Benefits of Reducing TAT
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Faster response to customer demand</li>
            <li>Improved productivity and capacity utilization</li>
            <li>Reduced waiting and idle time</li>
            <li>Higher customer satisfaction</li>
            <li>Stronger competitive positioning</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Turn Around Time is a direct reflection of process efficiency.
            By systematically reducing delays and improving flow,
            organizations unlock faster delivery, better cash cycles,
            and stronger operational performance.
          </p>

          <p className="text-gray-700 italic">
            “Speed is not about rushing — it’s about removing what slows you down.”
          </p>
        </div>

      </div>
    </section>
  );
}