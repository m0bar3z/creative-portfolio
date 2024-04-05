"use client";

import React, { useEffect, useRef } from "react";
import { type FC, memo } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Heading from "./Heading";
import Bounded from "./Bounded";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { name: "React", color: "#29D8FF" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "GSAP", color: "#0AE448" },
  { name: "Astro", color: "#FF7E33" },
];

const TechList: FC = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          // pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: index => {
            return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
          },
        },
        {
          x: index => {
            return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          What I use
        </Heading>
      </Bounded>
      {techItems.map(({ name, color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={name}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={"tech-item text-8xl font-extrabold uppercase tracking-tighter"}
                style={{
                  color: index === 7 && color ? color : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default memo(TechList);
