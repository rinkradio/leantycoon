import Image from "next/image";

export default function SteelPage() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        Steel Industry
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            TMT Bars
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In the steel industry, lean manufacturing principles are
            applied across the entire production chain — from raw
            material procurement to final product dispatch.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through value stream mapping, inefficiencies, waste,
            and bottlenecks are identified and eliminated, enabling
            measurable performance improvements.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Using structured lean methodologies, we helped our
            steel client achieve:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increased recovery by 10%</li>
            <li>Increased OEE by 6.8%</li>
            <li>Reduced unutilized bar loss from 1.5% to 0.5%</li>
            <li>Reduced finished goods dead stock by 90%</li>
            <li>Reduced store inventory by 18.96%</li>
            <li>Reduced manpower cost by 12%</li>
            <li>Reduced FG vehicle TAT from 4.7 hrs to 2 hrs</li>
          </ul>
        </div>

        <Image
          src="/where-we-serve/steel-1.webp"
          alt="Steel TMT Bars Manufacturing"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}