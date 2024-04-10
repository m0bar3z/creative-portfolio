"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FC } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ContentType } from "@/types/cutsomTypes";

gsap.registerPlugin(ScrollTrigger);

interface ContentListPropsType {
  isBlog: boolean;
  contents: ContentType[];
}

const ContentList: FC<ContentListPropsType> = ({ isBlog = false, contents }) => {
  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement> | null>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const urlPrefix = isBlog ? "/blog" : "/project";

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current?.forEach(item => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => ctx.revert();
    }, component);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      const ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: 1,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItem]);

  // useEffect(() => {
  //   contentImages.forEach(url => {
  //     if (!url) return;
  //     const img = new Image();
  //     img.src = url;
  //   });
  // }, []);

  const handleMouseEnter = (index: number) => {
    setCurrentItem(index);
  };

  const handleMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <div ref={component}>
      <ul className="grid border-b border-b-slate-100" onMouseLeave={handleMouseLeave}>
        {contents.map((item, index) => (
          <li
            key={index}
            className="opacity-0f list-item"
            onMouseEnter={() => handleMouseEnter(index)}
            ref={el => {
              itemsRef && itemsRef.current && el && (itemsRef.current[index] = el);
            }}
          >
            <Link
              href={`${urlPrefix}/${item.id}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label={item.title}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-lg font-bold text-yellow-400">
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                Read more <MdArrowOutward />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/** Hover Element */}
      <div
        className="hover-reveal pointer-events-none
        absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover 
        bg-center opacity-0 transition-[background] duration-300"
        style={{
          backgroundImage: currentItem === null ? "" : `url(${contents[currentItem].imageUrl})`,
        }}
        ref={revealRef}
      ></div>
    </div>
  );
};

export default ContentList;
