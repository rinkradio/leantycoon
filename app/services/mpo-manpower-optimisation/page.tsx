import Link from "next/link";

const modules = [
  {
    name: "Automation",
    slug: "automation",
    description:
      "Strategic automation initiatives to reduce manpower dependency and improve production efficiency.",
  },
  {
    name: "Four Layer Management Structure",
    slug: "four-layer-management-structure",
    description:
      "Structured supervisory model to strengthen accountability and operational control on the shop floor.",
  },
  {
    name: "RBA – Result Based Appreciation",
    slug: "rba-result-based-appreciation",
    description:
      "Performance-driven recognition system aligned with measurable operational outcomes.",
  },
];

export default function ManpowerOptimisation() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-4 text-center">
          MPO – Manpower Optimisation
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Structured workforce optimisation programs focused on productivity
          improvement, accountability systems, and cost efficiency in manufacturing operations.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/mpo-manpower-optimisation/${module.slug}`}
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