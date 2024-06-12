"use client";
import React from "react";
import { works } from "../utils/works";
import { FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function Home() {
  console.log(works);
  return (
    <main className="container flex-col mx-auto  ">
      <header className="text-stone-400 fixed top-0 left-0 right-0 py-3 px-24 my-5 flex items-center text-xl justify-end">
        {/* {"🌙"}{" "} */}
        <button className="rounded-3xl bg-stone-200 p-2 px-3 text-stone-800">
          Contact me
        </button>
      </header>
      <div className=" min-h-[350px] mt-64 ">
        <h1 className="text-3xl leading-relaxed"> </h1>
        <p className="text-3xl leading-relaxed mb-16">
          {" "}
          Hi there! I'm Hilal, a frontend developer who loves learning and
          improving. I enjoy contributing open-source projects and writing to
          share what I know. While I'm still gaining experience, I'm eager to
          contribute and grow creatively!{" "}
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
        <hr />
        <h1 className="text-5xl  py-5 mt-5">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {" "}
          {works &&
            works.map((work) => (
              <div className="bg-stone-100 min-h-64 rounded p-3 my-3 flex flex-col  justify-between ">
                <div>
                  {" "}
                  <h1 className="text-xl mb-2">{work.projectName}</h1>
                  <p>{work.Description} </p>
                </div>

                <div>
                  {work.Tools.map((tool) => (
                    <span>{tool} </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <hr />
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
