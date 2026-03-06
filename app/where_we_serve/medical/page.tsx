import Image from "next/image";

export default function MedicalPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Medical Industry
      </h1>

      {/* ORTHO */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ortho</h2>
          <p className="text-gray-700 leading-relaxed">
            The orthopedic industry, including implants, prosthetics,
            and braces manufacturing, increasingly applies lean
            manufacturing to enhance efficiency, precision, and
            cost-effectiveness.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean implementation improves product reliability and
            patient outcomes while helping organizations meet
            evolving healthcare demands.
          </p>
        </div>

        <Image
          src="/where-we-serve/medical/medical-1.webp"
          alt="Orthopedic Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* HEALTHCARE */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/medical/medical-2.webp"
          alt="Healthcare Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Healthcare</h2>
          <p className="text-gray-700 leading-relaxed">
            Hospitals and healthcare institutions adopt lean principles
            to enhance patient care, operational efficiency, and
            resource utilization.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean fosters a culture of continuous improvement,
            adaptability, and accountability—helping healthcare
            providers deliver superior patient experiences while
            controlling costs.
          </p>
        </div>
      </div>

      {/* MEDICAL DEVICES */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Medical Devices
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The medical devices sector—covering diagnostic equipment,
            surgical tools, and advanced medical technology—leverages
            lean manufacturing to improve productivity and innovation.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Waste reduction, optimized workflows, and improved
            resource utilization ensure consistent quality and
            regulatory compliance.
          </p>
        </div>

        <Image
          src="/where-we-serve/medical/medical-3.webp"
          alt="Medical Devices Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* AYURVEDA */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <Image
          src="/where-we-serve/medical/medical-4.webp"
          alt="Ayurveda Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Ayurveda</h2>
          <p className="text-gray-700 leading-relaxed">
            The Ayurvedic industry applies lean manufacturing to
            improve operational efficiency and ensure consistent
            product quality in herbal medicines and natural therapies.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lean integration ensures waste reduction, optimized
            natural resource utilization, and strict adherence to
            quality standards.
          </p>
        </div>
      </div>

      {/* PHARMA */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Pharma</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The pharmaceutical industry adopts lean methodologies to
            enhance efficiency, regulatory compliance, and quality in
            medication and vaccine production.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through lean implementation, we helped pharma clients
            achieve measurable results:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Labour utilization cost reduced by 9%</li>
            <li>Detention charges reduced by 30%</li>
            <li>Warehouse rental cost optimized by Rs 1.17Cr</li>
            <li>Removed on-site rental storage by 100%</li>
            <li>Reduced packing material cost by 50%</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/medical/medical-5.webp"
          alt="Pharmaceutical Industry"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}