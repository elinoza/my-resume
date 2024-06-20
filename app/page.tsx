"use client";
import React from "react";

import KeyStoneItem from "../components/KeyStoneItem";
import WorkItem from "../components/WorkItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { works, keyStones, profile } from "../utils/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiGmail, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export default function Home() {
  const keyStonesArray = Object.keys(keyStones);
  return (
    <main className="container p-2 flex-col mx-auto  ">
      <Header />
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
            works.map((work, index) => <WorkItem key={index} work={work} />)}
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
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 text-white">
          {keyStonesArray.reverse().map((stone, i) => (
            <KeyStoneItem key={i} stone={stone} keyStones={keyStones} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
