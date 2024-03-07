"use client";
import { useState } from "react";
import { House } from "@mui/icons-material";
import { DiDjango, DiRust, DiAws } from "react-icons/di";
import {
  SiFlask,
  SiJavascript,
  SiRsocket,
  SiFastapi,
  SiNextdotjs,
  SiAngular,
  SiReact,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";
import { IconType } from "react-icons";

type Technologies = "backend" | "web" | "mobile";
type IconMapList = Array<Map<string, IconType>>;

const Technologies = () => {
  const [technology, setTechnology] = useState<Technologies>("backend");
  const technologies: Technologies[] = ["backend", "web", "mobile"];
  return (
    <>
      <div className="flex md:flex-col md:w-1/3 gap-4">
        {technologies &&
          technologies.map((tech) => {
            return (
              <button
                onClick={() => setTechnology(tech)}
                className={`text-lg md:text-sm italic font-medium ${
                  technology === tech
                    ? "text-white md:text-green-900"
                    : "text-slate-900"
                } ${
                  technology === tech
                    ? "bg-green-700 md:bg-slate-200"
                    : "bg-white"
                } ${
                  technology !== tech
                    ? "border-2 border-green-900 md:border-0"
                    : "border-0"
                } py-2 px-4 rounded-lg md:rounded-full md:flex md:justify-start`}
                key={tech}
              >
                {tech}
              </button>
            );
          })}
      </div>
      <div className="w-full grid grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-6">
        {technology === "backend" && (
          <>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <DiDjango className="text-7xl" />
              <p className="text-[12px]">Django</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiFlask className="text-7xl" />
              <p className="text-[12px]">Flask</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiFastapi className="text-7xl" />
              <p className="text-[12px]">FastAPI</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <p className="text-4xl">Rocket</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <p className="text-4xl">Axum</p>
            </div>
          </>
        )}
        {technology === "web" && (
          <>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiNextdotjs className="text-7xl" />
              <p className="text-[12px]">Next.js</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiAngular className="text-7xl" />
              <p className="text-[12px]">Angular</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiReact className="text-7xl" />
              <p className="text-[12px]">React.js</p>
            </div>
          </>
        )}
        {technology === "mobile" && (
          <>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiFlutter className="text-7xl" />
              <p className="text-[12px]">Flutter</p>
            </div>
            <div className="py-5 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
              <SiKotlin className="text-7xl" />
              <p className="text-[12px]">Kotlin</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Technologies;
