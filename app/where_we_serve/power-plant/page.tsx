import Image from "next/image";

export default function PowerPlantPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Power Plant Industry
      </h1>

      {/* THERMAL PLANT */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Thermal Plant
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A thermal plant applying lean manufacturing principles
            represents optimized industrial heat production. Every
            operational stage is streamlined to eliminate waste and
            maximize value.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean integration enhances reliability, efficiency, and
            cost control in boiler operations.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Using lean methodologies, we helped clients achieve:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced boiler fuel cost by 24.35%</li>
            <li>Reduced steam production cost by 35.7%</li>
            <li>Increased Steam Fuel Ratio (SFR) by 15.3%</li>
            <li>Optimized operational manpower by 30%</li>
            <li>Overall savings of Rs 7Cr+</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/powerplant/powerplant-1.webp"
          alt="Thermal Power Plant"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* RDF */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/powerplant/powerplant-2.webp"
          alt="Refuse Derived Fuel Plant"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            RDF (Refuse Derived Fuel)
          </h2>

          <p className="text-gray-700 leading-relaxed">
            RDF is a sustainable alternative energy source produced
            from non-recyclable waste materials. Lean principles
            enhance efficiency in waste sorting, processing, and
            fuel preparation operations.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            By optimizing resource utilization and minimizing downtime,
            lean implementation ensures continuous, efficient, and
            cost-effective energy production.
          </p>
        </div>
      </div>
    </section>
  );
}