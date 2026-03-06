import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VAM – Value Added Manufacturing | LeanCo",
};

export default function VAM() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VAM – Value Added Manufacturing
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Focus production strictly on activities that create real customer value.
          Value Added Manufacturing (VAM) eliminates non-value-added steps and
          aligns processes toward efficiency, quality, and cost optimization.
        </p>

        {/* IMAGE */}
        <div className="mb-14">
          <Image
            src="/vam-value.webp"
            alt="Value Added Manufacturing Process Illustration"
            width={1200}
            height={700}
          />
        </div>
        <div className="mb-14">
          <Image
            src="/vam-value-1.webp"
            alt="Value Added Manufacturing uses"
            width={1200}
            height={700}
          />
        </div>

        {/* Content Section */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm space-y-6">

          <p className="text-gray-700 leading-relaxed">
            VAM identifies and eliminates non-value-added operations —
            such as waiting, excess handling, rework, and unnecessary movement —
            ensuring that every process step contributes directly to customer value.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By optimizing workflows and removing waste, organizations improve
            throughput, reduce operational costs, and enhance overall productivity.
          </p>

        </div>

      </div>
    </section>
  );
}