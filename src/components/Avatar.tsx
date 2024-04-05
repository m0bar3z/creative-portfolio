/* eslint-disable max-len */
"use client";

import { type FC, memo, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { gsap } from "gsap";

interface AvatarPropsType {
  src: string;
  className?: string;
}

const Avatar: FC<AvatarPropsType> = ({ src, className }) => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );

      window.onmousemove = e => {
        if (!component.current) return;
        const componentRect = (component.current as HTMLElement).getBoundingClientRect();
        const componentCenterX = componentRect.left + componentRect.width / 2;

        const componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };

        const distFromCenter = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: {
              duration: 5,
              overwrite: "auto",
              ease: "power3.out",
            },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenter - 0.7,
              x: -10 + 20 * componentPercent.x,
              duration: 0.5,
            },
            0
          ),
          component;
      };
    });

    return () => ctx.clear();
  }, []);

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0">
        <Image
          src={src}
          alt="Image"
          height={300}
          width={300}
          className={"avatar-image h-full w-full object-fill"}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
};

export default memo(Avatar);
