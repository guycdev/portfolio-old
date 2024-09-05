import analogDesigns from "../assets/projects/analog-designs.png";
import ClassCircless from "../assets/projects/ClassCircless.png";
import ritComp from "../assets/projects/RIT-comp.png";
import on from "../assets/projects/on.png";
import beatBytes from "../assets/projects/beatbytes.png";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { PiOpenAiLogo } from "react-icons/pi";

const projects = [
  {
    title: "BeatBytes",
    subheading: "🏆 2nd place at beaverhack Winter 2024 event 🏆",
    descriptiveSubheading: "Full-stack audio production platform",
    links: {
      github: "https://github.com/Nyumat/beaverhacks",
      live: "https://beatbytes.vercel.app/",
    },
    img: beatBytes,
    tech: [
      {
        logo: SiNextdotjs,
        name: "NextJs",
      },
      {
        logo: SiTypescript,
        name: "Typescript",
      },
      {
        logo: FaNode,
        name: "NodeJs",
      },
    ],
  },
  {
    title: "Outbreak Navigator",
    subheading: "🏆 1st place at Google Hacks x OSU Fall 2023 event 🏆",
    descriptiveSubheading:
      "Full stack crowd-sourced map app to navigate viral outbreaks",

    links: {
      github: "https://github.com/guycdev/outbreak-navigator",
    },
    img: on,
    tech: [
      {
        logo: DiJavascript,
        name: "Javascript",
      },
      {
        logo: FaReact,
        name: "React",
      },
      {
        logo: FaNode,
        name: "NodeJs",
      },
      {
        logo: FaBootstrap,
        name: "Bootsstrap",
      },
      {
        logo: TbSql,
        name: "MySql",
      },
      {
        logo: FiFigma,
        name: "Figma",
      },
    ],
  },
  {
    title: "High Frequency Trading Bot",
    subheading: "🏆 1st place at TMU high frequency trading competition 🏆",
    descriptiveSubheading:
      "Arbitrage trading bot used for the RIT high frequency trading platform",
    links: {
      github: "https://github.com/guycdev/HFT-Case-Comp-case-1-2",
    },
    img: ritComp,
    tech: [
      { logo: FaPython, name: "Python" },
      { logo: PiOpenAiLogo, name: "OpenAI" },
    ],
  },
  {
    title: "Analog Designs",
    subheading: "Full-stack order management website for my design agency",
    descriptiveSubheading:
      "Session based authentication, deployed on AWS with NGINX",

    links: {
      github: "https://github.com/guycdev/Analog-Designs",
      live: "http://analogdesigns.net/",
    },
    img: analogDesigns,
    tech: [
      {
        logo: DiJavascript,
        name: "Javascript",
      },
      {
        logo: FaReact,
        name: "React",
      },
      {
        logo: FaNode,
        name: "NodeJs",
      },
      {
        logo: TbSql,
        name: "MySql",
      },
      {
        logo: FiFigma,
        name: "Figma",
      },
    ],
  },
  {
    title: "ClassCircles",
    subheading:
      "Full-stack hackathon project for students to find intresting student groups",
    descriptiveSubheading: "Developed in two days",

    links: {
      github: "https://github.com/guycdev/ClassCircles",
      live: "https://653577550814840008f579f0--papaya-bonbon-e2b35f.netlify.app/",
    },
    img: ClassCircless,
    tech: [
      {
        logo: DiJavascript,
        name: "Javascript",
      },
      {
        logo: FaReact,
        name: "React",
      },
      {
        logo: FaNode,
        name: "NodeJs",
      },
      {
        logo: FaBootstrap,
        name: "Bootsstrap",
      },
      {
        logo: DiMongodb,
        name: "MongoDB",
      },
      {
        logo: FiFigma,
        name: "Figma",
      },
    ],
  },
  // {
  //   title: "Quizical Quiz App",
  //   subheading:
  //     "Dynamic quiz app with user controlled category, difficulty, and type",
  //   descriptiveSubheading:
  //     "Implemented dynamic user settings for a personalized quiz experience.",
  //   links: {
  //     github: "https://github.com/guycdev/Quizzical",
  //     live: "https://dancing-douhua-4d4ac1.netlify.app/",
  //   },
  //   img: quizzical,
  //   tech: [
  //     { logo: js, name: "Javascript" },
  //     { logo: react, name: "React" },
  //     { logo: css, name: "CSS" },
  //     { logo: git, name: "Git" },
  //     { logo: figma, name: "Figma" },
  //   ],
  // },
];

export default projects;
