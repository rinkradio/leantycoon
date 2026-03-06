import Image from "next/image";

export default function PlasticPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Plastic Industry
      </h1>

      {/* INJECTION MOULDING */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Injection Moulding
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean manufacturing principles significantly enhance productivity
            and cost efficiency in plastic injection moulding. Continuous
            improvement initiatives foster innovation, streamline workflows,
            and elevate overall product quality.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Using lean implementation, we helped plastics manufacturers
            achieve measurable outcomes:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced quality rejection by 4.4%</li>
            <li>Increased overall productivity by 9%</li>
            <li>Reduced paperwork by 50%</li>
            <li>Implemented 5S and won Best Vendor of the Year by Godrej</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/plastic/plastic-1.webp"
          alt="Injection Moulding"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* BLOW MOULDING */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/plastic/plastic-2.webp"
          alt="Blow Moulding"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Blow Moulding
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing concepts are critical in the blow moulding
            sector to maximize productivity, quality, and efficiency
            throughout the production cycle.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            By focusing on waste elimination and process optimization,
            manufacturers reduce lead times, lower production costs,
            and maintain consistent product standards.
          </p>
        </div>
      </div>

      {/* HEAT TRANSFER */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Heat Transfer
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing techniques in the heat transfer plastics
            industry enhance productivity, quality, and customer satisfaction.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Strict quality control measures ensure that every product
            meets demanding standards for color fastness, durability,
            and adhesion while minimizing waste and inefficiencies.
          </p>
        </div>

        <Image
          src="/where-we-serve/plastic/plastic-3.webp"
          alt="Heat Transfer Plastics"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}