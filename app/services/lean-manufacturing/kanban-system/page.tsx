import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanban System | LeanCo",
  description:
    "Pull-based production control system designed to optimize flow, reduce inventory, and improve operational responsiveness.",
};

export default function KanbanSystem() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Kanban System
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Kanban is a core Lean tool designed to visualize workflow,
          control inventory, and enhance productivity through a structured
          pull-based system.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Originating from the Toyota Production System, Kanban ensures that
          production and task execution occur only when there is real demand —
          preventing overproduction and minimizing operational waste.
        </p>

        {/* What is Kanban */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is a Kanban System?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The word “Kanban” means signboard or visual card in Japanese.
            In practice, it uses visual signals — physical cards, bins,
            or digital boards — to trigger replenishment or task initiation.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It operates on a pull principle: new work begins only when
            downstream demand creates a signal. This maintains balance,
            stabilizes workflow, and supports just-in-time production.
          </p>
        </div>

        {/* Key Elements */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Key Elements of Kanban
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>Visual Cards or Boards:</strong> Represent tasks, materials, or inventory levels.
            </li>
            <li>
              <strong>Work-in-Progress (WIP) Limits:</strong> Restrict how much work can be active at once.
            </li>
            <li>
              <strong>Pull System:</strong> Start new work only when capacity is available.
            </li>
            <li>
              <strong>Continuous Flow:</strong> Maintain balanced workload across processes.
            </li>
            <li>
              <strong>Feedback Loops:</strong> Regularly review and improve performance.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Benefits of the Kanban System
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces overproduction and excess inventory</li>
            <li>Improves workflow visibility and accountability</li>
            <li>Enhances responsiveness to customer demand</li>
            <li>Stabilizes processes and reduces bottlenecks</li>
            <li>Promotes continuous improvement culture</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Kanban System is more than a scheduling technique —
            it is a disciplined control mechanism that aligns demand,
            capacity, and flow. By pulling smarter rather than pushing harder,
            organizations achieve smoother operations and sustainable performance.
          </p>

          <p className="text-gray-700 italic">
            “Kanban keeps work flowing — not by pushing harder, but by pulling smarter.”
          </p>
        </div>

      </div>
    </section>
  );
}