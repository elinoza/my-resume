"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { works, keyStones } from "../utils/works";
import { FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { FaMedium, FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiGmail, SiMongodb } from "react-icons/si";
import { SiExpress, SiSass } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RxVercelLogo } from "react-icons/rx";
import Mom from "../public/birth.jpeg";
import OwnShop from "../public/helen.jpg";

export default function Home() {
  const keyStonesArray = Object.keys(keyStones);

  return (
    <main className="container flex-col mx-auto  ">
      <header className="text-stone-400 fixed top-0 left-0 right-0 py-3 px-24 my-5 flex items-center text-xl justify-end">
        <a
          href="mailto:hillcakmak@gmail.com"
          rel="noopener noreferrer"
          className="rounded-3xl bg-stone-800 p-2 px-3 text-stone-200"
        >
          Contact me
        </a>
      </header>
      <section className=" min-h-screen flex flex-col justify-center mt-24">
        <span className="text-sm text-stone-500 mb-2">
          React,Typescript Developer based in Türkiye
        </span>
        <p className="text-3xl leading-relaxed mb-16">
          {" "}
          Greetings! I'm Hilal, a frontend wizard who has a spell for turning
          coffee into code with my favorite spell: "{"🪄"} Caffeinum Codex!
        </p>
        <div className="flex gap-x-3 justify-start text-2xl p-3">
          <a
            href="https://github.com/elinoza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />{" "}
          </a>
          <a href="mailto:hillcakmak@gmail.com" rel="noopener noreferrer">
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/hilalsemercioglu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@hilalsem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />{" "}
          </a>
        </div>
      </section>
      <section className="mb-36">
        <hr className="border-zinc-800" />
        <h1 className="text-7xl  py-5 mt-1 mb-7">Who am I?</h1>
        <p>
          I'm a frontend developer who discovers coding is the best amongst the
          previous experiences.I enjoy coding (ok bugs can be a headache but
          still), contributing and writing about it.An industrial engineer. A
          mom of 1 little boy.
        </p>
        <h1 className="text-xl my-5">Key Stones</h1>
        <div className=" flex flex-wrap gap-2">
          {keyStonesArray.reverse().map((stone, i) => (
            <div key={i}>
              <div
                className={clsx(
                  "object-none overflow-hidden grayscale relative  bg-black  contrast-110",
                  keyStones[stone]?.height,
                  keyStones[stone]?.width
                )}
              >
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={keyStones[stone]?.imgSrc}
                  alt={stone}
                />
              </div>
              <span>{keyStones[stone]?.date}</span>
              <h1>{keyStones[stone]?.heading}</h1>
              <p className="text-stone-400">{keyStones[stone]?.description}</p>
              <p className="text-stone-400 tet-sm">
                {keyStones[stone]?.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <hr className="border-zinc-800" />
        <h1 className="text-7xl  py-5 mt-1 mb-7">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {" "}
          {works &&
            works.map((work, index) => (
              <a
                key={index}
                className={clsx(
                  // `h-${work.Height}`,
                  "bg-[#F4F4F4]  min-h-56 rounded-xl p-3 my-3 flex flex-col  justify-between"
                )}
                href={work.WebUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  {" "}
                  <h1 className="text-xl mb-2">{work.projectName}</h1>
                  <p>{work.Description} </p>
                </div>

                <div>
                  {work.Tools.map((tool, index) => (
                    <span
                      className="flex items-center justify-end text-sm"
                      key={index}
                    >
                      {tool}
                      <div
                        className={clsx(
                          {
                            "bg-blue-500": tool === "Typescript",
                            "bg-orange-500": tool === "NextJS",
                            "bg-yellow-500": tool === "ReactJS",
                            "bg-green-500": tool === "MongoDB",
                            "bg-rose-500": tool === "ExpressJS",
                          },
                          " w-3 h-3 rounded-full inline-block ml-2"
                        )}
                      ></div>
                    </span>
                  ))}
                </div>
              </a>
            ))}
        </div>
      </section>

      <hr className="border-zinc-800 mt-16" />
      <section>
        {" "}
        <div className="flex justify-end  ">
          <h1 className="text-7xl py-5 mt-1 mb-7 ">Skill Set</h1>
        </div>
        <div className="flex text-xl flex-wrap justify-center bg-stone-100 mb-64  ">
          <div className="flex items-center  justify-center m-3 p-3 flex-1 ">
            <span>ReactJS</span>
            <span className="text-2xl ml-2 text-[#00D5F7]">
              <GrReactjs />
            </span>
          </div>
          <div className="flex items-center justify-center m-3 p-3  flex-1 ">
            <span>TailwindCSS</span>
            <span className="text-2xl ml-2 text-[#0EA5EC]">
              <RiTailwindCssFill />
            </span>
          </div>
          <div className="flex items-center justify-center m-3 p-3  flex-1 ">
            <span>TypeScript</span>
            <span className="text-2xl ml-2 text-[#3274C0]">
              <BiLogoTypescript />
            </span>
          </div>
          <div className="flex items-center justify-center m-3 p-3  flex-1 ">
            <span>NEXTJS</span>
            <span className="text-2xl ml-2 ">
              <RiNextjsFill />
            </span>
          </div>
          <div className="flex items-center justify-center m-3 p-3  flex-1 ">
            <span>NodeJS</span>
            <span className="text-2xl ml-2 text-[#519941]">
              <RiNextjsFill />
            </span>
          </div>
          <div className="flex items-center justify-center m-5 p-5  flex-1 ">
            <span>MongoDB</span>
            <span className="text-2xl ml-2 text-[#4DA53F]">
              <SiMongodb />
            </span>
          </div>
        </div>
      </section>

      <footer className="text-xl mt-16 flex justify-between">
        {" "}
        <div className="text-sm flex p-3 [&_span]:mx-2 text-stone-500">
          {" "}
          Built with<span>{<RiNextjsFill />}</span>deployed on{" "}
          <span>{<RxVercelLogo />}</span>{" "}
        </div>
        <div className="flex gap-x-3 items-center ">
          {" "}
          <a
            href="https://github.com/elinoza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/hilalsemercioglu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@hilalsem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />{" "}
          </a>
        </div>
      </footer>
    </main>
  );
}
