import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SORT – Sales Order Real Time Tracking | LeanCo",
  description:
    "Real-time sales order tracking system providing end-to-end visibility across order processing, production, and delivery.",
};

export default function SORT() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          SORT – Sales Order Real Time Tracking
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In today’s fast-paced business environment, customers demand
          transparency, accuracy, and on-time delivery.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          SORT (Sales Order Real Time Tracking) provides complete visibility
          into the order lifecycle — from order confirmation to dispatch —
          enabling proactive control and improved customer satisfaction.
        </p>

        {/* What is SORT */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is SORT?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            SORT is a real-time tracking system that monitors sales orders
            across production, inventory, logistics, and dispatch.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It eliminates blind spots in order management by integrating
            operational data into a centralized dashboard.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How SORT Works
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc pl-6">
            <li>Tracks order entry and confirmation status</li>
            <li>Monitors production progress against due dates</li>
            <li>Provides real-time inventory and material availability updates</li>
            <li>Tracks dispatch and logistics milestones</li>
            <li>Alerts stakeholders to delays or risks proactively</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of SORT
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Improves on-time delivery performance</li>
            <li>Enhances cross-functional coordination</li>
            <li>Reduces order delays and firefighting</li>
            <li>Strengthens customer trust and transparency</li>
            <li>Enables data-driven decision-making</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            SORT transforms order management from reactive tracking
            to proactive control. By making order flow visible in real time,
            organizations can improve delivery performance, reduce uncertainty,
            and build stronger customer relationships.
          </p>

          <p className="text-gray-700 italic">
            “Visibility drives reliability — and reliability builds trust.”
          </p>
        </div>

      </div>
    </section>
  );
}