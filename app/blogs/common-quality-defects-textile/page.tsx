import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Quality Defects in Textile Industry | LeanTycoon",
  description:
    "Common textile manufacturing defects, causes, and prevention measures explained with structured lean approach.",
};

export default function TextileDefects() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Common Quality Defects in Textile Industry
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          Textile manufacturing is highly sensitive to process variation.
          Even small inconsistencies in yarn tension, dye concentration,
          or machine calibration can result in significant quality defects.
          Identifying and preventing these defects is critical for maintaining
          customer satisfaction and operational excellence.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4">
          1. Drop Stitches, Missed Stitches & Holes
        </h2>

        <p className="text-gray-700 mb-4">
          These defects appear as random gaps or holes in raw textiles.
        </p>

        <h3 className="font-semibold mb-2">Common Causes:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Incorrect yarn feed tension</li>
          <li>Slubs and knots in yarn cones</li>
          <li>Overfeeding or underfeeding of yarn</li>
          <li>Loose stitching during production</li>
          <li>Improper machine calibration</li>
        </ul>

        <h3 className="font-semibold mb-2">Prevention Measures:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Maintain correct yarn tension and feed rate</li>
          <li>Inspect yarn cones before use</li>
          <li>Calibrate stitching machines regularly</li>
          <li>Conduct routine machine audits</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4">
          2. Horizontal Lines
        </h2>

        <p className="text-gray-700 mb-4">
          Irregular lines appearing across fabric after weaving,
          not part of the intended design.
        </p>

        <h3 className="font-semibold mb-2">Common Causes:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Incorrect bobbin adjustments</li>
          <li>Irregular thread tension</li>
          <li>Uneven yarn supply</li>
        </ul>

        <h3 className="font-semibold mb-2">Prevention Measures:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Regular inspection and replacement of bobbins</li>
          <li>Periodic thread tension checks</li>
          <li>Standardized loom setup procedures</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4">
          3. Shade Variation
        </h2>

        <p className="text-gray-700 mb-4">
          Inconsistent color variation between batches or looms.
        </p>

        <h3 className="font-semibold mb-2">Common Causes:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Mixing of different fabric lots</li>
          <li>Variations in production speed or timing</li>
          <li>Improper cutting practices</li>
          <li>Inconsistent fabric stretching</li>
        </ul>

        <h3 className="font-semibold mb-2">Prevention Measures:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Use the same base fabric for each production batch</li>
          <li>Standardize temperature, speed, and dyeing time</li>
          <li>Train operators on proper cutting and bundling</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4">
          4. Dye Marks
        </h2>

        <p className="text-gray-700 mb-4">
          Irregular patches or uneven coloring on fabric surfaces.
        </p>

        <h3 className="font-semibold mb-2">Common Causes:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Low-quality base fabric</li>
          <li>Improper leveling agents</li>
          <li>Incorrect pH levels</li>
          <li>Fabric entanglement in dyeing machine</li>
        </ul>

        <h3 className="font-semibold mb-2">Prevention Measures:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Use high-quality base fabric</li>
          <li>Maintain correct pH levels</li>
          <li>Use appropriate dyeing chemicals</li>
          <li>Prevent fabric entanglement during processing</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-4">
          5. Stains
        </h2>

        <p className="text-gray-700 mb-4">
          Oil spots, dirt patches, and contamination during or after production.
        </p>

        <h3 className="font-semibold mb-2">Common Causes:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Oil leakage from machinery</li>
          <li>Poor housekeeping standards</li>
          <li>Improper storage conditions</li>
        </ul>

        <h3 className="font-semibold mb-2">Prevention Measures:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-12">
          <li>Implement CLRI (Cleaning, Lubrication, Inspection & Re-tightening)</li>
          <li>Establish preventive maintenance schedules</li>
          <li>Maintain clean storage areas</li>
        </ul>

        {/* Closing */}
        <h2 className="text-2xl font-semibold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Quality defects in textiles are process-driven. With proper
          standardization, preventive maintenance, and lean implementation,
          manufacturers can significantly reduce defects and improve overall
          operational performance.
        </p>

      </div>
    </section>
  );
}