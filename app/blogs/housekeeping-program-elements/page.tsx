import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Major Elements of a Housekeeping Program | LeanTycoon",
  description:
    "Understanding the key elements of an effective housekeeping program in manufacturing and industrial organizations.",
};

export default function HousekeepingProgram() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Major Elements of a Housekeeping Program in an Organization
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          An effective housekeeping program is essential for maintaining a
          safe, productive, and organized workplace. Good housekeeping is not
          just about cleanliness — it directly impacts safety, efficiency,
          quality, and employee morale.
        </p>

        {/* 1. Maintenance */}
        <h2 className="text-2xl font-semibold mb-4">
          1. Maintenance of Buildings and Equipment
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Proper maintenance ensures that buildings, machines, and assets
          remain in safe and efficient working condition. Damaged doors,
          broken windows, defective plumbing, or uneven floors create unsafe
          environments and reduce workplace morale.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Regular inspection and repair of machines and tools</li>
          <li>Maintenance of sanitary facilities</li>
          <li>Periodic painting and structural upkeep</li>
          <li>Immediate replacement of damaged items</li>
        </ul>

        {/* 2. Dust & Dirt */}
        <h2 className="text-2xl font-semibold mb-4">
          2. Dust and Dirt Removal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Dust accumulation affects both safety and equipment life.
          Industrial vacuum systems and proper ventilation must be used
          instead of compressed air.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Use vacuum cleaners (HEPA filters for hazardous dust)</li>
          <li>Dampen floors before sweeping to reduce airborne particles</li>
          <li>Regular manual cleaning of shelves, pipes, and fixtures</li>
          <li>Avoid using compressed air for dust removal</li>
        </ul>

        {/* 3. Worker Facilities */}
        <h2 className="text-2xl font-semibold mb-4">
          3. Worker Facilities
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Clean and well-maintained worker facilities improve hygiene and
          prevent contamination.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Clean washrooms and lockers</li>
          <li>Adequate soap, towels, and disinfectants</li>
          <li>Showers and changing rooms for hazardous workplaces</li>
          <li>Separate storage for work and personal clothing</li>
        </ul>

        {/* 4. Surface Cleaning */}
        <h2 className="text-2xl font-semibold mb-4">
          4. Surface Cleaning and Maintenance
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Poor floor and wall conditions are major causes of workplace
          incidents.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Immediate cleanup of oil and liquid spills</li>
          <li>Removal of chips, shavings, and dust accumulation</li>
          <li>Anti-slip flooring in critical areas</li>
          <li>Use contrasting colors to highlight hazards</li>
        </ul>

        {/* 5. Aisles & Stairways */}
        <h2 className="text-2xl font-semibold mb-4">
          5. Aisles and Stairways
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Maintain clear, unobstructed pathways</li>
          <li>Proper lighting for safety</li>
          <li>Use warning signs and mirrors in blind corners</li>
          <li>Avoid using aisles for storage</li>
        </ul>

        {/* 6. Spill Control */}
        <h2 className="text-2xl font-semibold mb-4">
          6. Spill Control
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Prevent leaks through regular maintenance</li>
          <li>Use drip pans and guards</li>
          <li>Clean spills immediately</li>
          <li>Dispose absorbents safely</li>
        </ul>

        {/* 7. Tools & Equipment */}
        <h2 className="text-2xl font-semibold mb-4">
          7. Tools and Equipment Management
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Provide designated storage with labels</li>
          <li>Return tools after use</li>
          <li>Regular inspection and repair</li>
          <li>Remove damaged tools from service</li>
        </ul>

        {/* 8. Waste Disposal */}
        <h2 className="text-2xl font-semibold mb-4">
          8. Waste Disposal
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Regular scrap collection and sorting</li>
          <li>Separate recyclable materials</li>
          <li>Clearly labelled waste containers</li>
          <li>Place scrap bins near production areas</li>
        </ul>

        {/* 9. Storage */}
        <h2 className="text-2xl font-semibold mb-4">
          9. Storage Management
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-12">
          <li>Store materials without blocking exits or fire equipment</li>
          <li>Maintain required clearance under sprinkler systems</li>
          <li>Stack materials securely</li>
          <li>Store hazardous materials in approved containers</li>
          <li>Follow fire and occupational safety regulations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          A structured housekeeping program improves safety, reduces
          incidents, enhances productivity, and supports lean
          implementation. Organizations that invest in housekeeping build
          stronger operational discipline and long-term efficiency.
        </p>

      </div>
    </section>
  );
}