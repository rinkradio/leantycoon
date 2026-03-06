import Image from "next/image";

export default function PipePage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Pipe Industry
      </h1>

      {/* ERW */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">ERW Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the Electric Resistance Welded (ERW) pipe industry,
            lean manufacturing principles are essential for maximizing
            efficiency, quality, and responsiveness. Lean methodologies
            are applied across the entire production cycle — from raw
            material procurement and pipe forming to welding and finishing.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Continuous improvement initiatives encourage teams to identify
            and eliminate inefficiencies, fostering operational excellence
            and innovation.
          </p>
        </div>

        <Image
          src="/where-we-serve/pipe/pipe-1.webp"
          alt="ERW Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* SEAMLESS */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/pipe/pipe-2.webp"
          alt="Seamless Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Seamless Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the seamless pipe industry, lean manufacturing enhances
            efficiency, quality, and responsiveness. Waste elimination
            and workflow optimization reduce lead times and operational
            costs while maintaining superior product standards.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Just-in-time inventory systems ensure materials are available
            exactly when needed, minimizing excess stock and storage costs.
          </p>
        </div>
      </div>

      {/* SPIRAL */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Spiral Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the spiral pipe industry, lean manufacturing improves
            efficiency, quality, and adaptability. Integrated lean systems
            ensure cost-effectiveness and optimal operational flow.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This approach enables consistent delivery of high-quality pipes
            for infrastructure and energy sector applications.
          </p>
        </div>

        <Image
          src="/where-we-serve/pipe/pipe-3.webp"
          alt="Spiral Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* UPVC */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/pipe/pipe-4.webp"
          alt="UPVC Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">UPVC Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the UPVC pipe industry, lean implementation optimizes
            efficiency, quality, and customer satisfaction. Continuous
            improvement empowers employees to identify inefficiencies
            and implement practical solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This culture of innovation enables rapid response to changing
            market demands and customer requirements.
          </p>
        </div>
      </div>

      {/* CPVC */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">CPVC Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the CPVC pipe industry, lean manufacturing enhances
            operational efficiency and responsiveness. Waste elimination
            and process optimization significantly reduce costs and
            lead times while maintaining strict product standards.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean integration ensures consistent delivery of high-quality,
            cost-effective piping solutions.
          </p>
        </div>

        <Image
          src="/where-we-serve/pipe/pipe-5.webp"
          alt="CPVC Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* HDPE */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/pipe/pipe-6.webp"
          alt="HDPE Pipes"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">HDPE Pipes</h2>
          <p className="text-gray-700 leading-relaxed">
            In the HDPE pipe industry, lean manufacturing supports
            efficiency, quality, and sustainability. Continuous improvement
            drives innovation while ensuring compliance with stringent
            quality standards.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Rigorous quality control guarantees durability, corrosion
            resistance, and dimensional accuracy in every pipe produced.
          </p>
        </div>
      </div>
    </section>
  );
}