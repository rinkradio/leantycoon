import Link from "next/link";

const modules = [
  {
    name: "Inventory Management",
    slug: "inventory-management",
    description:
      "Structured inventory control systems to reduce stockouts, excess inventory, and working capital blockage.",
  },
  {
    name: "SORT – Sales Order Real-Time Tracking",
    slug: "sort-sales-order-real-time-tracking",
    description:
      "End-to-end order visibility system to monitor status, delays, and dispatch accuracy in real time.",
  },
  {
    name: "TAT – Turn Around Times",
    slug: "tat-turn-around-times",
    description:
      "Cycle time optimization programs to reduce lead time across procurement, production, and delivery.",
  },
];

export default function SupplyChainManagement() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Supply Chain Management
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          End-to-end supply chain optimization programs designed to improve
          inventory control, order tracking, and operational responsiveness.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/services/supply-chain-management/${module.slug}`}
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