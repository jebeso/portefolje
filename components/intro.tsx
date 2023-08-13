import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import ThemeChanger from "./theme-changer";

const size = 28;
const iconCSS = "transition-colors hover:text-gray-500";

const Intro = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-6 md:mb-4">
        <h1 className="text-3xl select-none md:text-6xl tracking-tight md:pr-8 rounded-md">
          Jens Bech-Sørensen
        </h1>
        <div className={"flex gap-4 justify-center md:justify-start"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jensbs/"
          >
            <FaLinkedinIn size={size} className={iconCSS} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:jens@bechsor.no"
          >
            <MdAlternateEmail size={size} className={iconCSS} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jensbech"
          >
            <VscGithubAlt size={size} className={iconCSS} />
          </a>
          <div>
            <ThemeChanger />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
