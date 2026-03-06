import Link from "next/link";

const modules = [
  {
    name: "EEA – Employee Engagement Activities",
    slug: "eea-employee-engagement-activities",
    description:
      "Structured engagement programs to strengthen workforce involvement, ownership, and morale across the organization.",
  },
  {
    name: "RR System",
    slug: "rr-system",
    description:
      "Recognition and Reward systems designed to reinforce accountability and performance-driven culture.",
  },
];

export default function CultureBuildingExcellence() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Culture Building Excellence
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Cultural transformation programs designed to align leadership,
          empower teams, and build a high-performance manufacturing environment.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/culture-building-excellence/${module.slug}`}
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