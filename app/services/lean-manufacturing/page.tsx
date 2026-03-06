import Link from "next/link";

const modules = [
  {
    name: "Kanban System",
    slug: "kanban-system",
    description:
      "Pull-based inventory and production control system to regulate workflow and eliminate overproduction.",
  },
  {
    name: "LFD – Lean Facility Design",
    slug: "lfd-lean-facility-design",
    description:
      "Optimized plant layout strategies to enhance material flow and reduce movement waste.",
  },
  {
    name: "VAM – Value Added Manufacturing",
    slug: "vam-value-added-manufacturing",
    description:
      "Structured analysis to maximize value-adding activities and eliminate non-value-added processes.",
  },
  {
    name: "VSM – Value Stream Mapping",
    slug: "vsm-value-stream-mapping",
    description:
      "End-to-end process mapping to identify bottlenecks and design future-state lean systems.",
  },
];

export default function LeanManufacturing() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Lean Manufacturing
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive lean deployment programs focused on flow optimization,
          waste elimination, and sustainable operational excellence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/lean-manufacturing/${module.slug}`}
              className="bg-white border rounded-xl p-8 shadow-sm 
                         hover:shadow-lg hover:-translate-y-1 
                         transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {module.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>

              <span className="mt-6 text-sm font-medium text-primary">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}