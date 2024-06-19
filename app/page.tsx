"use client";
import React from "react";
import clsx from "clsx";

import { works, keyStones, profile } from "../utils/works";
import { FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { FaMedium, FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiGmail, SiMongodb } from "react-icons/si";
import { SiExpress, SiSass } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RxVercelLogo } from "react-icons/rx";

export default function Home() {
  const keyStonesArray = Object.keys(keyStones);
  const heights = [
    "col-span-2",
    ,
    "",
    "col-span-2",
    "col-span-3",
    "",
    "col-span-2",
    "",
    "",
    "col-span-2",
  ];

  return (
    <main className="container p-2 flex-col mx-auto  ">
      <header className="text-stone-400 fixed top-0 left-0 right-0 py-3 px-24 my-5 flex items-center text-xl justify-end z-10">
        <a
          href="mailto:hillcakmak@gmail.com"
          rel="noopener noreferrer"
          className="hidden sm:block"
        >
          <button className=" rounded-3xl bg-stone-800 p-2 px-3 text-stone-200 ">
            Contact me
          </button>
        </a>
      </header>
      <section className=" min-h-screen flex flex-col justify-center mt-24">
        <span className="text-sm text-stone-500 mb-2">
          React,Typescript Developer based in Türkiye
        </span>
        <p className="text-3xl leading-relaxed mb-16"> {profile?.jumbotron}</p>
        <div className="flex  gap-x-3 justify-start text-2xl p-3">
          <a
            href="https://github.com/elinoza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-stone-500" />{" "}
          </a>
          <a
            href="mailto:hillcakmak@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="hover:text-stone-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/hilalsemercioglu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-stone-500" />
          </a>
          <a
            href="https://medium.com/@hilalsem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium className="hover:text-stone-500" />{" "}
          </a>
        </div>
      </section>
      <section>
        <hr className="border-zinc-800" />
        <div className="flex justify-between items-center py-5 mt-1 mb-7">
          {" "}
          <h1 className="text-7xl">Work </h1>
          <a
            href={"https://github.com/elinoza?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
            className="right-5 text-sm text-stone-500 hover:text-black "
          >
            + see more
          </a>
        </div>

        <div className="flex flex-col gap-2 divide-y  ">
          {" "}
          {works &&
            works.map((work, index) => (
              <a
                key={index}
                className="group rounded-xl py-3"
                href={work.WebUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  {" "}
                  <h1 className="text-xl mb-2 font-[400]">
                    {work.projectName}
                  </h1>
                  <p className="text-stone-500 group-hover:text-black">
                    {work.Description}{" "}
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-4">
                  {work.Tools.map((tool, index) => (
                    <span className="flex items-center text-xs" key={index}>
                      <div
                        className={clsx(
                          {
                            "bg-blue-500": tool === "Typescript",
                            "bg-orange-500": tool === "NextJS",
                            "bg-yellow-500": tool === "ReactJS",
                            "bg-green-500": tool === "MongoDB",
                            "bg-rose-500": tool === "ExpressJS",
                          },
                          " w-2 h-2 inline-block mr-1 rounded-sm"
                        )}
                      ></div>
                      {tool}
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
          <h1 className="text-7xl  py-5 mt-1 mb-7 ">Skill Set</h1>
        </div>
        <div className="flex text-xl flex-wrap justify-center bg-stone-100 mb-64">
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
      <section className="mb-36 ">
        <hr className="border-zinc-800" />
        <h1 className="text-7xl  py-5 mt-1 mb-7">Who am I?</h1>
        <p>{profile?.aboutMe}</p>
        <h1 className="text-xl my-5">Key Stones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
          {keyStonesArray.reverse().map((stone, i) => (
            <div key={i} className="">
              <div
                className={clsx(
                  stone !== "Cloock" &&
                    stone !== "BigBang" &&
                    "grayscale contrast-110",
                  " overflow-hidden bg-black "
                )}
              >
                <img src={keyStones[stone]?.imgSrc} alt={stone} />
              </div>
              <span>{keyStones[stone]?.date}</span>
              <h1>{keyStones[stone]?.heading}</h1>
              <p className="text-stone-400">{keyStones[stone]?.description}</p>
              {!keyStones[stone]?.website ? (
                <p className="text-stone-400 tet-sm">
                  {keyStones[stone]?.detail}
                </p>
              ) : (
                <a
                  href={keyStones[stone]?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 tet-sm hover:text-black"
                >
                  {keyStones[stone]?.detail}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      <footer className="text-xl mt-16 flex justify-between">
        {" "}
        <div className="text-sm flex items-center p-3 [&_span]:mx-2 text-stone-500">
          {" "}
          Built with
          <span>
            <RiNextjsFill />
          </span>
          deployed on <span>{<RxVercelLogo />}</span>{" "}
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
