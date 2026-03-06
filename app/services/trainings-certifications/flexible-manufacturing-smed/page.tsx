import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexible Manufacturing through SMED | LeanCo",
};

export default function FlexibleManufacturing() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Flexible Manufacturing through SMED
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          In today’s fast-changing markets, customers demand more variety,
          faster delivery, and higher quality. To stay competitive,
          organizations need flexible manufacturing systems — and one of
          the most effective Lean tools to achieve that flexibility is
          SMED (Single-Minute Exchange of Dies).
        </p>

        {/* What is SMED */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is SMED?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            SMED is a Lean technique developed by Shigeo Shingo that focuses
            on reducing setup or changeover time — the time required to switch
            from producing one product to another.
          </p>

          <p className="text-gray-700 font-medium mb-4">
             The goal: Bring changeover time under 10 minutes —
            a “single-digit minute.”
          </p>
        </div>

        {/* Concept */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             The Concept Behind SMED
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Traditional changeovers can take hours, resulting in downtime,
            large batch sizes, and reduced flexibility.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            SMED simplifies changeovers by separating setup activities into:
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>
              <strong>Internal Setup:</strong> Tasks performed only when the machine is stopped.
            </li>
            <li>
              <strong>External Setup:</strong> Tasks completed while the machine is still running.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            By shifting as many activities as possible to external setup and
            simplifying the remaining internal steps, changeover time can drop dramatically.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Steps of SMED
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Observe the current setup process</li>
            <li>Separate internal and external activities</li>
            <li>Convert internal steps to external wherever possible</li>
            <li>Simplify and standardize each task</li>
            <li>Document and train for consistent execution</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of SMED
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Enables smaller batch sizes and quick changeovers</li>
            <li>Reduces downtime and improves equipment utilization</li>
            <li>Improves production flexibility and responsiveness</li>
            <li>Reduces inventory and floor space usage</li>
            <li>Supports Just-In-Time (JIT) and One-Piece Flow systems</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            SMED is not just about speed — it is about flexibility,
            competitiveness, and operational responsiveness.
          </p>

          <p className="text-gray-700 leading-relaxed italic">
            By mastering quick changeovers, organizations can reduce waste,
            respond faster to demand, and maintain high quality standards —
            all while staying agile in dynamic markets.
          </p>
        </div>

      </div>
    </section>
  );
}