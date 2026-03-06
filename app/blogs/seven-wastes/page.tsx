import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Seven Wastes in an Organization | LeanTycoon",
  description:
    "Understanding the seven wastes identified in lean manufacturing and how eliminating them improves productivity and operational excellence.",
};

export default function SevenWastes() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          The Seven Wastes in an Organization
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          The Seven Wastes were identified by Taiichi Ohno during the
          development of the Toyota Production System. These wastes exist at
          every level of an organization and directly impact productivity,
          cost, quality, and customer satisfaction.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          The Seven Types of Waste
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Overproduction</li>
          <li>Waiting</li>
          <li>Transportation</li>
          <li>Overprocessing</li>
          <li>Inventory</li>
          <li>Motion</li>
          <li>Defects</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Value-Added vs Non-Value-Added Work
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          In manufacturing, only two types of work exist:
          <strong> value-added </strong> and <strong>non-value-added</strong>.
          Value-added work is something the customer is willing to pay for.
          Everything else is waste.
        </p>

        <div className="bg-white p-6 border rounded-lg mb-10">
          <p className="text-gray-700 mb-2">
            <strong>Example:</strong>
          </p>
          <p className="text-gray-700">
            Installing a part: <strong>5 seconds (Value-added)</strong>
          </p>
          <p className="text-gray-700">
            Walking, searching, waiting: <strong>155 seconds (Non-value-added)</strong>
          </p>
          <p className="text-gray-700 mt-2">
            Total Time: 160 seconds  
            <br />
            Value-added: 5 seconds  
            <br />
            Non-value-added: 155 seconds
          </p>
        </div>

        {/* 1. Overproduction */}
        <h2 className="text-2xl font-semibold mb-4">
          1. Overproduction
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Producing more than needed, faster than needed, or before it is
          required is the most dangerous waste. It leads to excess inventory,
          rework, storage costs, and hidden quality problems.
        </p>

        {/* 2. Waiting */}
        <h2 className="text-2xl font-semibold mb-4">
          2. Waiting
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Waiting occurs when processes are not synchronized. Causes include
          lack of parts, machine breakdowns, poor communication, long setup
          times, and workflow imbalance. Idle time is still paid time.
        </p>

        {/* 3. Transportation */}
        <h2 className="text-2xl font-semibold mb-4">
          3. Transportation
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Unnecessary movement of materials creates cost without adding value.
          Poor plant layout, bad planning, and overproduction often trigger
          wasted transportation.
        </p>

        {/* 4. Overprocessing */}
        <h2 className="text-2xl font-semibold mb-4">
          4. Overprocessing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Performing extra work that does not add customer value — such as
          excessive polishing, unnecessary inspections, or repeated packaging —
          increases cost without improving the product.
        </p>

        {/* 5. Inventory */}
        <h2 className="text-2xl font-semibold mb-4">
          5. Inventory
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Excess inventory hides inefficiencies, ties up capital, and increases
          storage costs. Most organizations carry more inventory than necessary
          due to unreliable systems and poor planning.
        </p>

        {/* 6. Motion */}
        <h2 className="text-2xl font-semibold mb-4">
          6. Motion
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Any unnecessary movement of people, equipment, or materials that
          does not add value is motion waste. Poor layout, unclear standards,
          and weak visual management systems increase motion waste.
        </p>

        {/* 7. Defects */}
        <h2 className="text-2xl font-semibold mb-4">
          7. Defects
        </h2>

        <p className="text-gray-700 leading-relaxed mb-12">
          Defects result in rework, scrap, customer dissatisfaction, and
          additional cost. Root causes include poor training, weak 5S
          implementation, inaccurate SOPs, and lack of accountability.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Eliminating the Seven Wastes improves productivity, reduces cost,
          enhances quality, and strengthens customer trust. Organizations that
          actively identify and remove waste build sustainable operational
          excellence.
        </p>

      </div>
    </section>
  );
}