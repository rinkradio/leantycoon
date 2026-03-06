"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

/* ---------------- Animation Variants ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemFadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemFadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- Component ---------------- */

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      label: "Phone",
      value: "+91-73072-47450",
      href: "tel:+917307247450",
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      label: "Email",
      value: "Info@Leantycoon.com",
      href: "mailto:Info@Leantycoon.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      label: "Office Address",
      value: (
        <>
          SCF No -08, Ground Floor <br />
          Gillco Valley, Sector -04 <br />
          Kharar, Punjab 140301
        </>
      ),
      href: null,
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Get in <span className="text-emerald-600">Touch with us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help manufacturing businesses build structured excellence systems.
              Reach out to discuss how we can support your transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* Contact Info */}
            <motion.div variants={itemFadeLeft} className="space-y-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemFadeUp}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-xl font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Gillco%20Valley%20Kharar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Office location"
                  className="grayscale hover:grayscale-0 transition"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemFadeRight}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Send a Message
                </h2>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 bg-red-50 p-3 rounded-lg"
                    >
                      Failed to send message. Please try again later.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}