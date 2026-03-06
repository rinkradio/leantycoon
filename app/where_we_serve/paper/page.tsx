import Image from "next/image";

export default function PaperPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Paper Industry
      </h1>

      {/* KRAFT PAPER */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Kraft Paper
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The paper industry has adopted lean manufacturing principles
            to remain competitive, improve operational efficiency, and
            reduce waste while maintaining high quality standards.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Using lean approaches, we helped our clients achieve:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduced store inventory by 81%</li>
            <li>Reduced finishing loss by 2.1%</li>
            <li>Reduced stock production by 18%</li>
            <li>Reduced stem production cost by 16.5%</li>
            <li>Increased deckle utilization by 2.3%</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/paper/paper-1.webp"
          alt="Kraft Paper Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* NEWS PRINT */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/paper/paper-2.webp"
          alt="News Print Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            News Print
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In the newspaper industry, lean manufacturing principles
            optimize efficiency, sustainability, and cost-effectiveness
            from pulp sourcing to printing and distribution.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean integration ensures operational excellence and the
            consistent delivery of high-quality printed products.
          </p>
        </div>
      </div>

      {/* DUPLEX */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Duplex Paper
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From raw material sourcing and pulping to coating, drying,
            and cutting, lean methodologies are integrated into every
            production step.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Waste reduction and process optimization reduce lead times,
            costs, and resource consumption while ensuring consistent
            product quality.
          </p>
        </div>

        <Image
          src="/where-we-serve/paper/paper-3.webp"
          alt="Duplex Paper Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* COPIER */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/paper/paper-4.webp"
          alt="Copier Paper Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Copier Paper
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing principles improve efficiency, quality,
            and sustainability in copier paper production.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This ensures consistent, cost-effective delivery of
            high-quality paper products for businesses and consumers.
          </p>
        </div>
      </div>

      {/* FOOD GRADE */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Food Grade Paper
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In the edible and food-grade paper industry, lean
            manufacturing ensures efficiency, safety, and quality.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Strict quality controls guarantee hygiene, safety, and
            compliance with food-contact standards while minimizing
            production waste.
          </p>
        </div>

        <Image
          src="/where-we-serve/paper/paper-5.webp"
          alt="Food Grade Paper"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* CARTON & PACKAGING */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/paper/paper-6.webp"
          alt="Carton and Packaging"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Carton & Packaging
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing principles in carton and packaging
            optimize efficiency, sustainability, and product quality.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The industry achieves cost-effectiveness and consistently
            delivers high-quality, sustainable packaging solutions
            through lean production systems.
          </p>
        </div>
      </div>
    </section>
  );
}