"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";


export const ScrollStackItem = ({
  bgImage,
  onClick,
}: {
  bgImage: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="scroll-stack-card sticky 
      top-32 md:top-40
      mx-auto 
      w-[90%] md:w-[80%] 
      h-[60vh] md:h-[70vh]
      rounded-3xl 
      overflow-hidden 
      relative 
      my-24 
      shadow-2xl 
      bg-white 
      cursor-pointer 
      active:scale-[0.98] transition"
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        contain: "layout paint",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <Image
        src={bgImage}
        alt="Stack Image"
        fill
        className="object-contain bg-white pointer-events-none"
      />
    </div>
  );
};
const ScrollStack = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cardsRef.current = Array.from(
      container.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.08,
      smoothWheel: true,
    });

    const animate = () => {
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      cardsRef.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const offset = rect.top;

        const progress = Math.min(
          Math.max((viewportHeight - offset) / viewportHeight, 0),
          1
        );

        const scaleIntensity = isMobile ? 0.03 : 0.05;
        const translateIntensity = isMobile ? 25 : 40;

        const scale = 1 - index * scaleIntensity * progress;
        const translateY = index * translateIntensity * progress;

        card.style.transform = `
          translateY(${Math.round(translateY)}px)
          scale(${scale.toFixed(3)})
        `;
      });
    };

    lenis.on("scroll", animate);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    animate();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className=" pb-[40vh] md:pb-[10vh] px-4 md:px-20">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;