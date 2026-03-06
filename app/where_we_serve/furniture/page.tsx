import Image from "next/image";

export default function FurniturePage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Furniture & Fixtures Industry
      </h1>

      {/* INDOOR FURNITURE */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Indoor Furniture
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean production in indoor furniture manufacturing enhances
            efficiency, quality, and customer satisfaction. Continuous
            process reviews identify improvement opportunities,
            increasing productivity while reducing operational waste.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased overall productivity by 72%</li>
            <li>Optimized manpower by 4%</li>
            <li>Reduced end-to-end lead time by 30%</li>
            <li>Reduced FG dead inventory by Rs 1.1Cr</li>
            <li>Generated additional topline capacity of 20Cr+</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/furniture/furniture-1.webp"
          alt="Indoor Furniture Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* OUTDOOR FURNITURE */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/furniture/furniture-2.webp"
          alt="Outdoor Furniture"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Outdoor Furniture
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lean implementation in outdoor furniture manufacturing
            reduces lead times and production costs while maintaining
            durability and aesthetic standards.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Strict quality control ensures weather resistance, comfort,
            and long-term performance, enabling manufacturers to deliver
            sustainable and high-quality outdoor solutions.
          </p>
        </div>
      </div>

      {/* LAMINATED INDUSTRY */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Laminated Industry
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean production in laminate manufacturing focuses on
            reducing setup times, improving workflow, and enabling
            smooth material flow across workstations.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced FG dead inventory by Rs 16.7Cr</li>
            <li>Increased cutting section productivity by 84.4%</li>
            <li>Reduced changeover time and saved Rs 1Cr+ using SMED</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/furniture/furniture-3.webp"
          alt="Laminate Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* RECLINER INDUSTRY */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/furniture/furniture-4.webp"
          alt="Recliner Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Recliner Industry
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean techniques streamline recliner production from design
            and fabrication to assembly and distribution, increasing
            productivity and responsiveness to market trends.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased scrap income by 400%</li>
            <li>Improved 5S score from 10% to 40%</li>
            <li>Reduced dead inventory by 50%</li>
            <li>Reduced overtime cost by 32%</li>
            <li>Optimized stitching manpower by 4%</li>
          </ul>
        </div>
      </div>

      {/* FACADE FURNITURE */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Facade Furniture
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing in facade furniture production ensures
            optimized processes, durability, and superior aesthetic
            standards for building exteriors.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Strict quality control guarantees weather resistance,
            structural reliability, and consistent high-performance
            output for architectural applications.
          </p>
        </div>

        <Image
          src="/where-we-serve/furniture/furniture-5.webp"
          alt="Facade Furniture"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}