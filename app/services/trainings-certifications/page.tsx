import Link from "next/link";

const trainings = [
  {
    name: "5S Methodology & Visual Workplace",
    slug: "5s-methodology-visual-workplace-management",
    description:
      "Workplace organization system to improve safety, efficiency, and visual control across production floors.",
  },
  {
    name: "7 QC Tools",
    slug: "7qc-tools",
    description:
      "Practical problem-solving tools to identify root causes, reduce defects, and improve process stability.",
  },
  {
    name: "Cellular Manufacturing & One Piece Flow",
    slug: "cellular-manufacturing-one-piece-flow",
    description:
      "Design flow-based production systems to reduce lead time, WIP inventory, and operational waste.",
  },
  {
    name: "Flexible Manufacturing – SMED",
    slug: "flexible-manufacturing-smed",
    description:
      "Setup reduction strategies to increase machine availability and production responsiveness.",
  },
  {
    name: "Kanban",
    slug: "kanban",
    description:
      "Pull-based inventory control system to optimize material flow and eliminate overproduction.",
  },
  {
    name: "Lean Basics – Principles & Tools",
    slug: "lean-basics-principles-tools",
    description:
      "Foundation program covering lean philosophy, waste elimination, and continuous improvement systems.",
  },
  {
    name: "Lean Layout Design",
    slug: "lean-layout-design",
    description:
      "Facility layout optimization to improve material movement and operational productivity.",
  },
  {
    name: "Mistake Proofing – Poka Yoke",
    slug: "mistake-proofing-poke-yoke",
    description:
      "Error prevention techniques to eliminate defects at the source and improve quality consistency.",
  },
  {
    name: "Process Mapping",
    slug: "process-mapping",
    description:
      "Visual workflow analysis to identify bottlenecks and drive structured process improvements.",
  },
  {
    name: "Standardised Work",
    slug: "standardised-work",
    description:
      "Develop stable and repeatable work processes to ensure performance consistency and scalability.",
  },
  {
    name: "Value Stream Mapping – Theory",
    slug: "value-stream-mapping-theory",
    description:
      "End-to-end value stream analysis to identify waste and design future-state lean systems.",
  },
];

export default function TrainingsPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold mb-4 text-center">
          Trainings & Certifications
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Structured capability-building programs designed for manufacturing
          organizations aiming to improve productivity, quality, and operational excellence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training) => (
            <Link
              key={training.slug}
              href={`/services/trainings-certifications/${training.slug}`}
              className="bg-white border rounded-xl p-6 shadow-sm 
                         hover:shadow-lg hover:-translate-y-1 
                         transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {training.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {training.description}
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