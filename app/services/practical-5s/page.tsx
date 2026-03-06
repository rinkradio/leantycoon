import Link from "next/link";

const modules = [
  {
    name: "SCFC – Search, Find, Count & Free",
    slug: "scfc-search-find-count-free",
    description:
      "Structured workplace organization approach to eliminate time waste in searching, improve visibility, and enhance operational discipline.",
  },
  {
    name: "Visual Management",
    slug: "visual-management",
    description:
      "Design and implementation of visual systems to make abnormalities visible and drive real-time operational control.",
  },
];

export default function Practical5S() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold mb-4 text-center">
          Practical 6S
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Practical 6S deployment programs focused on workplace organization,
          discipline systems, and sustainable visual control in manufacturing environments.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/practical-6s/${module.slug}`}
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
                Learn More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}