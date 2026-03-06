import Link from "next/link";

const modules = [
  {
    name: "I-OMQH",
    slug: "i-omqh",
    description:
      "Integrated Operational Monitoring for Quality & High performance systems to improve productivity tracking and execution discipline.",
  },
  {
    name: "Safety",
    slug: "safety",
    description:
      "Structured safety frameworks to reduce incidents, improve compliance, and strengthen shop-floor risk management.",
  },
];

export default function ProductivityImprovement() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-4 text-center">
          OPI – Overall Productivity Improvement
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Structured productivity transformation programs focused on KPI alignment,
          operational control, and sustainable performance improvement across manufacturing systems.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/opi-overall-productivity-improvement/${module.slug}`}
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