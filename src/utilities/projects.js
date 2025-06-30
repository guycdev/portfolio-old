import analogDesigns from "../assets/projects/analog-designs.png";
import ClassCircless from "../assets/projects/ClassCircless.png";
import ritComp from "../assets/projects/RIT-comp.png";
import on from "../assets/projects/on.png";
import beatBytes from "../assets/projects/beatbytes.png";
import radiant from "../assets/projects/radiant.png";
import eeg from "../assets/projects/eeg.png";
import { SiNextdotjs, SiPytorch, SiTypescript } from "react-icons/si";
import { FaBootstrap, FaNode, FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { PiOpenAiLogo } from "react-icons/pi";

const projects = [
  {
    title: "Radiant AI",
    subheading: "🏆 Published & Funded AI PhD Research Project 🏆",
    descriptiveSubheading:
      "AI-powered rare disease chatbot with real time medical literature training",
    links: {
      live: "https://radiant.rtx.ai/",
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-95841-0_35",
    },
    img: radiant,
    tech: [
      {
        logo: FaReact,
        name: "React.js",
      },
      {
        logo: SiTypescript,
        name: "Typescript",
      },
      {
        logo: FaGolang,
        name: "Golang",
      },
      {
        logo: FaPython,
        name: "Python",
      },
      {
        logo: DiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    title: "EEG Event Classification AI",
    subheading: "🏥 Commercial EEG AI Model for BEL Company 🏥",
    descriptiveSubheading:
      "Developed CNN-based EEG event detection model for hospital-grade EEG hardware integration",
    links: {
      live: "https://radiant.rtx.ai/",
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-95841-0_35",
    },
    img: eeg,
    tech: [
      {
        logo: FaReact,
        name: "React.js",
      },
      {
        logo: SiTypescript,
        name: "Typescript",
      },
      {
        logo: FaPython,
        name: "Python",
      },
      {
        logo: SiPytorch,
        name: "PyTorch",
      },
    ],
  },
  {
    title: "BeatBytes",
    subheading: "🏆 2nd place at beaverhack Winter 2024 event 🏆",
    descriptiveSubheading:
      "Full-stack, customizable audio production platform ",
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
      "Full stack crowd-sourced map application for real-time viral outbreak tracking",

    links: {
      github: "https://github.com/guycdev/outbreak-navigator",
    },
    img: on,
    tech: [
      {
        logo: FaReact,
        name: "React.js",
      },
      {
        logo: DiJavascript,
        name: "Javascript",
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
      "AI-powered arbitrage trading bot with real-time market analysis and automated execution strategies",
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
    title: "ClassCircles",
    subheading:
      "Full-stack hackathon project for students to find intresting student groups",
    descriptiveSubheading:
      "Social networking platform for university students with group discovery and real-time messaging",

    links: {
      github: "https://github.com/guycdev/ClassCircles",
    },
    img: ClassCircless,
    tech: [
      {
        logo: FaReact,
        name: "React.js",
      },
      {
        logo: DiJavascript,
        name: "Javascript",
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
  //     { logo: react, name: "React.js" },
  //     { logo: css, name: "CSS" },
  //     { logo: git, name: "Git" },
  //     { logo: figma, name: "Figma" },
  //   ],
  // },
];

export default projects;
