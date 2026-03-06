import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mistake Proofing – Poka Yoke | LeanCo",
};

export default function MistakeProofing() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Mistake Proofing – Poka Yoke
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In any process, mistakes can happen — but defects don’t have to.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          That’s the idea behind Poka-Yoke, a powerful Lean tool that prevents
          errors before they reach the customer.
        </p>

        {/* IMAGE BELOW REQUESTED TEXT */}
        <div className="mb-14">
          <Image
            src="/Poka-Yoke-Manufacturing.webp"
            alt="Poka Yoke Mistake Proofing Example"
            width={1200}
            height={700}
          />
        </div>

        {/* What is Poka-Yoke */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
           What is Poka-Yoke?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Poka-Yoke (pronounced poh-kah yoh-keh) is a Japanese term meaning
            “mistake-proofing” or “error prevention.” It ensures processes are
            designed so mistakes either cannot occur or are immediately detected.
          </p>

          <p className="text-gray-700 font-medium">
            The goal: Do it right the first time.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             How Poka-Yoke Works
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Poka-Yoke mechanisms are built into processes to:
          </p>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li><strong>Prevent errors</strong> before they occur</li>
            <li><strong>Detect errors</strong> immediately when they happen</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary mt-8 mb-3">
            Examples:
          </h3>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>USB or SIM cards that fit only one way</li>
            <li>Car alarms when seatbelts aren’t fastened</li>
            <li>Software validation messages before submission</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of Poka-Yoke
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Reduces defects and rework</li>
            <li>Improves product and process quality</li>
            <li>Enhances safety and reliability</li>
            <li>Saves time and cost</li>
            <li>Builds a culture of prevention instead of correction</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Poka-Yoke reflects the Lean principle of “quality at the source.”
            By preventing errors instead of correcting them later,
            organizations can move closer to zero defects and operational excellence.
          </p>

          <p className="text-gray-700 italic">
            “Don’t find fault, find the cause — and fix it before it happens.”
          </p>
        </div>

      </div>
    </section>
  );
}