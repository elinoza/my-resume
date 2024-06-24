"use client";
import React from "react";

import KeyStoneItem from "../components/KeyStoneItem";
import WorkItem from "../components/WorkItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { works, keyStones, profile, articles } from "../utils/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiGmail, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export default function Home() {
  const keyStonesArray = Object.keys(keyStones);
  return (
    <main className="container mx-auto flex-col p-2">
      <Header />
      <section className="mt-24 flex min-h-screen flex-col justify-center">
        <h1 className="mb-2 text-sm text-stone-500">
          React,Typescript Developer based in Türkiye
        </h1>
        <p className="mb-16 text-3xl leading-relaxed"> {profile?.jumbotron}</p>
        <div className="flex justify-start gap-x-3 p-3 text-2xl">
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
        <div className="mb-7 mt-1 flex items-center justify-between py-5">
          {" "}
          <h1 className="text-7xl">Work </h1>
          <a
            href={"https://github.com/elinoza?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
            className="right-5 text-sm text-stone-500 hover:text-black"
          >
            + see more
          </a>
        </div>

        <div className="flex flex-col gap-2 divide-y">
          {" "}
          {works &&
            works.map((work, index) => <WorkItem key={index} work={work} />)}
        </div>
      </section>
      <hr className="mt-16 border-zinc-800" />
      <section>
        {" "}
        <div className="flex justify-end">
          <h1 className="mb-7 mt-1 py-5 text-7xl">Skill Set</h1>
        </div>
        <div className="mb-64 flex flex-wrap justify-center bg-stone-100 text-xl">
          <div className="m-3 flex flex-1 items-center justify-center p-3">
            <span>ReactJS</span>
            <span className="ml-2 text-2xl text-[#00D5F7]">
              <GrReactjs />
            </span>
          </div>
          <div className="m-3 flex flex-1 items-center justify-center p-3">
            <span>TailwindCSS</span>
            <span className="ml-2 text-2xl text-[#0EA5EC]">
              <RiTailwindCssFill />
            </span>
          </div>
          <div className="m-3 flex flex-1 items-center justify-center p-3">
            <span>TypeScript</span>
            <span className="ml-2 text-2xl text-[#3274C0]">
              <BiLogoTypescript />
            </span>
          </div>
          <div className="m-3 flex flex-1 items-center justify-center p-3">
            <span>NEXTJS</span>
            <span className="ml-2 text-2xl">
              <RiNextjsFill />
            </span>
          </div>
          <div className="m-3 flex flex-1 items-center justify-center p-3">
            <span>NodeJS</span>
            <span className="ml-2 text-2xl text-[#519941]">
              <RiNextjsFill />
            </span>
          </div>
          <div className="m-5 flex flex-1 items-center justify-center p-5">
            <span>MongoDB</span>
            <span className="ml-2 text-2xl text-[#4DA53F]">
              <SiMongodb />
            </span>
          </div>
        </div>
      </section>
      <section className="mb-36">
        <hr className="border-zinc-800" />
        <h1 className="mb-7 mt-1 py-5 text-7xl">Who am I?</h1>
        <p>{profile?.aboutMe}</p>
        <h1 className="my-5 text-xl">Key Stones</h1>
        <div className="columns-1 gap-3 text-white sm:columns-2 lg:columns-3 xl:columns-4">
          {keyStonesArray.reverse().map((stone, i) => (
            <KeyStoneItem key={i} stone={stone} keyStones={keyStones} />
          ))}
        </div>
      </section>
      <section>
        <hr className="border-zinc-800" />
        <div className="mb-7 mt-1 flex items-center justify-between py-5">
          {" "}
          <h1 className="text-7xl">Articles </h1>
          <a
            href={"https://medium.com/@hilalsem"}
            target="_blank"
            rel="noopener noreferrer"
            className="right-5 text-sm text-stone-500 hover:text-black"
          >
            + see more
          </a>
        </div>
        {articles &&
          articles.map((article, i) => (
            <div
              key={i}
              className="my-2 border p-5 text-stone-600 hover:text-black"
            >
              <a href={article?.url}>{article?.name}</a>
            </div>
          ))}
      </section>
      <Footer />
    </main>
  );
}
