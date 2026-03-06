"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { directClients, indirectClients } from "./clientsData";

type ImageType = {
  id: number;
  src: string;
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

// Custom hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function LogoGrid({ images }: { images: ImageType[] }) {
  const isMobile = useIsMobile();

  // Mobile: static grid without animation
  if (isMobile) {
    return (
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6
        "
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="
              relative
              h-[140px]
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-sm
              flex
              items-center
              justify-center
              p-4
            "
          >
            <img
              src={img.src}
              alt={`Client ${img.id}`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop: animated grid
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-6
      "
    >
      {images.map((img) => (
        <motion.div
          key={img.id}
          variants={cardVariant}
          whileHover={{ y: -4 }}
          className="
            relative
            h-[140px]
            bg-white
            border
            border-gray-200
            rounded-xl
            shadow-sm
            hover:shadow-md
            transition
            duration-200
            flex
            items-center
            justify-center
            p-4
          "
        >
          <img
            src={img.src}
            alt={`Client ${img.id}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Clients() {
  return (
    <section className="min-h-screen py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Clients
        </motion.h1>

        <LogoGrid images={directClients} />

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-center mt-24 mb-16"
        >
          Our Indirect Experiences in Serving Manufacturing & Lean Excellence
        </motion.h2>

        <LogoGrid images={indirectClients} />

      </div>
    </section>
  );
}