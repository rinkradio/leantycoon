import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCFC – Search Find Count Free | LeanCo",
  description:
    "Reduce time waste through structured organization systems.",
};

export default function SCFC() {
  return (
    <section className="bg-lightBg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          SCFC – Search Find Count Free
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Eliminate time waste by ensuring everything is visible,
          accessible, and properly controlled.
        </p>

        <div className="bg-white p-10 rounded-2xl border border-borderGrey shadow-sm space-y-6">

          <p className="text-gray-700 leading-relaxed">
            SCFC focuses on eliminating delays caused by searching,
            counting, and unclear material positioning.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By implementing structured labeling, visual tracking,
            and layout optimization, organizations reduce inefficiencies
            significantly.
          </p>

        </div>

      </div>
    </section>
  );
}