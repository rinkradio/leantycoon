import Image from "next/image";

export default function FMCGPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-8">
        FMCG Industry
      </h1>

      {/* ---------------- FROZEN FOOD INDUSTRY ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Frozen Food Industry
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The frozen food industry applying lean manufacturing principles
            achieves higher efficiency and superior production quality.
            From raw ingredients to final packaging, every step is optimized
            to minimize waste and maximize resource utilization.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through structured lean implementation, we helped clients
            achieve measurable improvements:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced FG inventory by 4.20%</li>
            <li>Reduced packing material inventory by 26.71%</li>
            <li>Reduced RM store inventory by 14%</li>
            <li>Increased productivity by 52%</li>
            <li>Generated additional capacity of 12Cr+</li>
            <li>Overall annual savings of Rs 2.5Cr+</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/FMCG/FMCG-1.webp"
          alt="Frozen Food Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* ---------------- REFINERY INDUSTRY ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/FMCG/FMCG-2.webp"
          alt="Refinery Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Refinery Industry
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Refineries applying lean principles improve efficiency,
            safety, and profitability. By streamlining process flows
            and removing operational bottlenecks, waste is reduced and
            productivity increases.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean implementation helped our oil refining clients achieve:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced FG dead inventory by Rs 1.6Cr</li>
            <li>Implemented 5S and improved score from 15% to 70%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}