import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | MPO – LeanCo",
  description:
    "Automation strategies aligned with manpower optimisation systems.",
};

export default function MPOAutomation() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Automation (Under MPO)
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Integrating automation systems to enhance workforce productivity
          and operational efficiency.
        </p>

        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm space-y-6">

          <p className="text-gray-700 leading-relaxed">
            Automation within MPO focuses on eliminating repetitive tasks,
            reducing human error, and improving system reliability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The goal is not replacing manpower, but optimizing
            workforce efficiency through smart automation integration.
          </p>

        </div>

      </div>
    </section>
  );
}