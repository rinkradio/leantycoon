import Image from "next/image";

export default function TextilePage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Textile Industry
      </h1>

      {/* TOWEL */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Towel Manufacturing</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean methodologies are integrated across every stage of towel
            manufacturing — from fiber sourcing and yarn spinning to weaving,
            dyeing, stitching, and finishing. Waste elimination and process
            optimization enable manufacturers to respond effectively to a
            dynamic market while maintaining superior quality standards.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased CSP (Cutting, Stitching & Packing) production by 2.5 Ton/day</li>
            <li>Increased 10,000 mtr/day production in Length Hemming</li>
            <li>Optimized manpower in Juki line by 2.30%</li>
            <li>Reduced changeover time by 52% using SMED</li>
            <li>Reduced machine cleaning time: 35% (Length Hemming), 15% (Cross Cutting)</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/textile/textile-1.webp"
          alt="Towel Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* APPAREL */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/textile/textile-2.webp"
          alt="Apparel Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Apparel</h2>
          <p className="text-gray-700 leading-relaxed">
            Lean concepts ensure efficiency, quality, and sustainability
            across garment production — from design and fabric procurement
            to cutting, sewing, and finishing.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By integrating lean principles, apparel manufacturers achieve
            operational efficiency, cost control, and the ability to deliver
            fashionable, high-quality garments aligned with sustainable
            practices.
          </p>
        </div>
      </div>

      {/* YARN */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Yarn</h2>
          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing in the yarn industry optimizes efficiency,
            quality, and productivity from raw material procurement and
            spinning to winding and packaging.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Waste reduction and process optimization reduce lead times,
            costs, and resource consumption while maintaining consistent
            yarn quality standards.
          </p>
        </div>

        <Image
          src="/where-we-serve/textile/textile-3.webp"
          alt="Yarn Production"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* BEDSHEET */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/textile/textile-4.webp"
          alt="Bedsheet Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Bedsheet</h2>
          <p className="text-gray-700 leading-relaxed">
            Lean techniques in bedsheet manufacturing maximize productivity
            and quality while reducing lead times and production costs.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Strict quality control ensures fabric consistency, color
            fastness, and durability to meet demanding consumer standards.
          </p>
        </div>
      </div>

      {/* DYEING */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dyeing</h2>
          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing enables dyeing units to optimize quality,
            sustainability, and efficiency. From dye preparation to finishing,
            processes are aligned for waste reduction.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This approach minimizes water, chemical, and energy usage while
            maintaining high standards of color accuracy and durability.
          </p>
        </div>

        <Image
          src="/where-we-serve/textile/textile-5.webp"
          alt="Textile Dyeing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* BATHROBE */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/textile/textile-6.webp"
          alt="Bathrobe Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Bathrobe</h2>
          <p className="text-gray-700 leading-relaxed">
            Lean manufacturing in the bathrobe industry optimizes production
            from fabric selection and cutting to stitching and packaging.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This enables rapid response to changing fashion trends and
            customer demands while consistently delivering high-quality,
            comfortable garments.
          </p>
        </div>
      </div>
    </section>
  );
}