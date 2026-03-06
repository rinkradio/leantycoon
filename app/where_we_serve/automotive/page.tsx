import Image from "next/image";

export default function AutomotivePage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-8">Automotive Industry</h1>

      {/* ---------------- ALLOY WHEELS ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Alloy Wheels</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Guided by lean manufacturing principles, alloy wheel manufacturing
            operates at the forefront of efficiency and quality in automotive
            component production. Strict quality control measures ensure that
            every wheel meets demanding industry standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Using lean techniques, we helped our clients achieve measurable
            operational improvements:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased availability by 5%</li>
            <li>Increased production by 10%</li>
            <li>Reduced wastage by 16%</li>
            <li>Reduced changeover time by 20%</li>
            <li>Reduced FG inventory by 18%</li>
            <li>Reduced stored inventory by 15%</li>
            <li>Reduced FG dead stock by 69%</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/automotive/automotive-1.webp"
          alt="Alloy Wheels Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* ---------------- CHUCKS MANUFACTURES ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/automotive/automotive-2.webp"
          alt="Chucks Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Chucks Manufactures
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Chuck’s manufacturing facility uses lean principles to streamline
            operations and maximize efficiency. Through continuous improvement,
            inventory levels are minimized while maintaining high-quality
            standards and flexibility to adapt to changing market demands.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean adoption ensures operational excellence and customer
            satisfaction through timely delivery of durable and reliable
            products.
          </p>
        </div>
      </div>

      {/* ---------------- AUTO SPARE PARTS ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Auto Spare Parts
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the auto spare parts industry, we eliminate waste, optimize
            workflows, and build a culture of continuous improvement. Our
            approach helps manufacturers streamline operations while reducing
            inventory costs and maintaining high availability.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced boiler fuel cost by 60.29%</li>
            <li>Increased boiler condensing water efficiency by 62%</li>
            <li>Reduced rectifier power cost by 10%</li>
            <li>Optimized manpower in operations by 2%</li>
            <li>Overall saving of Rs 3.36Cr+</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/automotive/automotive-3.webp"
          alt="Auto Spare Parts"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* ---------------- AGRICULTURE AUTO PARTS ---------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/automotive/automotive-4.webp"
          alt="Agriculture Auto Parts"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Agriculture Auto Parts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Agricultural auto parts manufacturers use lean principles to
            optimize every production stage—from raw material procurement to
            blade assembly. Waste is minimized, costs are controlled, and
            consistent quality is ensured.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean implementation guarantees reliable supply of high-performance
            agriculture blades for farmers and equipment manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
}