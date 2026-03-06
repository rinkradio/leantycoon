import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EEA – Employee Engagement Activities | LeanCo",
  description:
    "Structured employee engagement initiatives designed to strengthen morale, collaboration, and performance culture.",
};

export default function EmployeeEngagementActivities() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          EEA – Employee Engagement Activities
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          An organization’s true strength lies in its people — and engaged employees are its greatest asset.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Employee Engagement Activities (EEA) create a motivated, connected,
          and high-performing workforce that drives continuous improvement
          and long-term organizational success.
        </p>

        {/* What is EEA */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             What is EEA?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            EEA consists of structured initiatives designed to strengthen
            communication, collaboration, and belonging within the organization.
            It goes beyond social events — it builds a culture where employees
            feel valued, heard, and motivated to contribute.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">
            Examples of Engagement Activities:
          </h3>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Team-building workshops and collaborative exercises</li>
            <li>Recognition and performance appreciation programs</li>
            <li>Wellness, cultural, and community initiatives</li>
            <li>Idea-sharing forums and open communication platforms</li>
          </ul>
        </div>

        {/* How It Supports Excellence */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             How EEA Supports Organizational Excellence
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Boosts morale and strengthens teamwork</li>
            <li>Encourages innovation and idea generation</li>
            <li>Improves retention and job satisfaction</li>
            <li>Builds trust and transparency across levels</li>
            <li>Aligns employees with company vision and goals</li>
          </ul>

          <p className="mt-6 text-gray-700">
            In Lean organizations, engagement transforms employees into
            active contributors in problem-solving and continuous improvement.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
             Benefits of EEA
          </h2>

          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Increases productivity and motivation</li>
            <li>Enhances collaboration and creativity</li>
            <li>Builds a positive and inclusive workplace culture</li>
            <li>Reduces absenteeism and turnover</li>
            <li>Strengthens employee loyalty and brand advocacy</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">
             Conclusion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Employee Engagement Activities are not just about events —
            they are about building purpose and pride in every role.
            When employees feel connected and valued, performance improves naturally.
          </p>

          <p className="text-gray-700 italic">
            “Engaged employees don’t just work for the company — they work with it.”
          </p>
        </div>

      </div>
    </section>
  );
}