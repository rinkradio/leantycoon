import Image from "next/image";

export default function ElectronicsPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Electronics & Electricals Industry
      </h1>

      {/* UPI SOUND BOXES */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            UPI Sound Boxes
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The UPI sound box industry leverages lean manufacturing
            to improve efficiency, quality, and cost-effectiveness
            in producing digital payment confirmation devices.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Lean principles foster continuous improvement, enabling
            rapid adaptation to evolving technology and market
            demands while strengthening competitiveness in the
            digital payments ecosystem.
          </p>
        </div>

        <Image
          src="/where-we-serve/electronics/electronics-1.webp"
          alt="UPI Sound Boxes Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* ELECTRICAL MOTORS */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/electronics/electronics-2.webp"
          alt="Electrical Motors Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Electrical Motors
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The electrical motors industry applies lean manufacturing
            to enhance productivity, quality, and sustainability
            across applications ranging from home appliances to
            industrial machinery.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            By streamlining workflows and optimizing resources,
            manufacturers ensure high performance, safety compliance,
            and cost-efficient production.
          </p>
        </div>
      </div>

      {/* STREET LIGHTS */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Street Lights
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lean manufacturing enhances efficiency, sustainability,
            and reliability in the street lighting industry — from
            design and production to installation and maintenance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through lean implementation, we helped clients achieve:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased HPDC capacity utilization by 14%</li>
            <li>Reduced changeover time by 20% using SMED</li>
            <li>Increased OEE by 6.2%</li>
            <li>Optimized manpower by 11.11%</li>
            <li>Improved 5S score from 20% to 50%</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/electronics/electronics-3.webp"
          alt="Street Light Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* LED LIGHTS */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/where-we-serve/electronics/electronics-4.webp"
          alt="LED Lighting Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            LED Lights
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The LED lighting sector integrates lean manufacturing
            to improve productivity, sustainability, and product
            reliability across diverse applications.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Lean fosters innovation and continuous improvement,
            enabling manufacturers to deliver affordable,
            energy-efficient, and environmentally responsible
            lighting solutions.
          </p>
        </div>
      </div>
    </section>
  );
}