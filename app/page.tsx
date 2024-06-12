"use client";
import React from "react";
import clsx from "clsx";

import { works, logos } from "../utils/works";
import { FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Home() {
  console.log(works);
  return (
    <main className="container flex-col mx-auto  ">
      <header className="text-stone-400 fixed top-0 left-0 right-0 py-3 px-24 my-5 flex items-center text-xl justify-end">
        <button className="rounded-3xl bg-stone-800 p-2 px-3 text-stone-200">
          Contact me
        </button>
      </header>
      <div className=" min-h-[350px] mt-72 ">
        <h1 className="text-3xl leading-relaxed"> </h1>
        <p className="text-3xl leading-relaxed mb-16">
          {" "}
          "Greetings! I'm Hilal, a frontend wizard who has a spell for turning
          coffee into code with my favorite spell: 'Caffeinum Codex!"
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
      </div>
      <div className="my-36 ">
        <hr className="border-zinc-800" />
        <h1 className="text-7xl  py-5 my-7">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {" "}
          {works &&
            works.map((work, index) => (
              <a
                key={index}
                className={clsx(
                  // `h-${work.Height}`,
                  "bg-neutral-100  min-h-56 rounded-xl p-3 my-3 flex flex-col  justify-between"
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
      </div>
      <hr className="border-zinc-800 my-36" />

      <>
        {" "}
        <div className="flex justify-end  ">
          <h1 className="text-7xl py-5 ">Skill Set</h1>
        </div>
        <div className="flex gap-3 justify-end mb-64 ">
          {logos.map((logo) => (
            <div>
              {logo[0]}{" "}
              <span>
                <img src={logo[1]} />
              </span>
            </div>
          ))}
        </div>
      </>

      <footer className="text-xl mt-16 flex justify-between">
        {" "}
        <a href="mailto:hillcakmak@gmail.com" rel="noopener noreferrer">
          <span>Say hi! {"☕️"}</span>
        </a>
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
