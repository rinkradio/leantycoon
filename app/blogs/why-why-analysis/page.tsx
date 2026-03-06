import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why-Why Analysis Technique | LeanTycoon",
  description:
    "Understanding the Why-Why (5 Whys) root cause analysis technique and its practical application in problem solving.",
};

export default function WhyWhyAnalysis() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Why-Why Analysis Technique
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          For every impact, there is always a cause. When a problem occurs,
          there is often a temptation to blame individuals instead of analyzing
          the underlying reality. However, the real root cause usually lies
          deeper within the system.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          The Why-Why Analysis (also known as the 5 Whys Technique) is a
          structured root cause analysis method widely used in lean
          management and operational excellence. When applied correctly by a
          team, it helps uncover systemic causes rather than surface-level
          symptoms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Steps to Apply the Why-Why Analysis Technique
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-6">
          <li>
            Form a team and clearly write down the problem statement. Decide
            whether additional expertise is required.
          </li>
          <li>
            Ask the first “Why?” — Why did this problem occur? Record all
            logical answers.
          </li>
          <li>
            Ask successive “Why?” questions (typically five times), digging
            deeper into each answer until the fundamental cause is identified.
          </li>
          <li>
            Identify systemic causes among the final answers and discuss
            potential countermeasures.
          </li>
          <li>
            Develop corrective and preventive actions to eliminate the root
            cause from the system.
          </li>
        </ol>

        {/* IMAGE INSERTED AFTER STEPS */}
        <div className="relative w-full aspect-[16/9] mb-12">
          <Image
            src="/why-why-1.webp"
            alt="Why Why Analysis Sheet Example"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          When Should You Use 5 Whys?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          The 5 Whys technique is effective for:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li>Troubleshooting operational issues</li>
          <li>Quality improvement initiatives</li>
          <li>Problem-solving on the production line</li>
          <li>Sporadic or moderately complex problems</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-10">
          However, it may not be sufficient for chronic or highly complex
          problems involving multiple root causes. In such cases, advanced
          analytical tools may be required.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Know When to Stop
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          You will know you have reached the root cause when further “Why?”
          questions no longer generate meaningful insight. At that point,
          a clear corrective action or system change should become evident.
        </p>

      </div>
    </section>
  );
}