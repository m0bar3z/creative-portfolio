import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

const items = [
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/blog", label: "Blog" },
];
const socialMediaItems = [
  { name: "Github", link: "https://github.com" },
  { name: "Twitter", link: "https://x.com" },
  { name: "LinkedIn", link: "linkedin.com" },
];

export default async function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Ali Mobarezi
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">© {new Date().getFullYear()} Ali Mobarezi</p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {items.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                    )}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
                {index < items.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {
            <Link
              href="https://www.github.com"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="Ali Mobarezi on GitHub"
            >
              <FaGithub />
            </Link>
          }

          <Link
            href="https://x.com"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={"Ali Mobarezi on Twitter"}
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://linkedin.com"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={"Ali Mobarezi on LinkedIn"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
