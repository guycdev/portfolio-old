import analogDesigns from "../assets/projects/analog-designs.png";
import snkrsSolutions from "../assets/projects/SNKRS-solutions.png";
import ClassCircless from "../assets/projects/ClassCircless.png";
import ritComp from "../assets/projects/RIT-comp.png";
import react from "../assets/overlays/react.svg";
import node from "../assets/overlays/node.svg";
import python from "../assets/overlays/python.svg";
import mysql from "../assets/overlays/mysql.svg";
import git from "../assets/overlays/git.svg";
import css from "../assets/overlays/css.svg";
import figma from "../assets/overlays/figma.svg";
import openai from "../assets/tech/openai.svg";
import mongodb from "../assets/tech/mongodb.svg";
import selenium from "../assets/tech/selenium.svg";
import js from "../assets/overlays/js.svg";
import ts from "../assets/overlays/ts.svg";
import bootstrap from "../assets/overlays/bootstrap.svg";
import html from "../assets/tech/html.svg";
import on from "../assets/projects/on.png";
import beatBytes from "../assets/projects/beatbytes.png";
import next from "../assets/tech/next.svg";

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
        logo: ts,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React",
      },
      {
        logo: node,
        name: "NodeJs",
      },
      {
        logo: next,
        name: "NextJs",
      },
    ],
  },
  {
    title: "Outbreak Navigator",
    subheading: "🏆 1st place at Google Hacks x OSU Fall 2023 event 🏆",
    descriptiveSubheading:
      "Full stack crowd-sourced map app to navigate viral outbreaks",

    links: {
      github: "https://github.com/gcWDev/outbreak-navigator",
    },
    img: on,
    tech: [
      {
        logo: js,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React",
      },
      {
        logo: node,
        name: "NodeJs",
      },
      {
        logo: bootstrap,
        name: "Bootsstrap",
      },
      {
        logo: css,
        name: "CSS",
      },
      {
        logo: html,
        name: "HTML",
      },
      {
        logo: mysql,
        name: "MySql",
      },
      {
        logo: git,
        name: "Git",
      },
      {
        logo: figma,
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
      github: "https://github.com/gcWDev/HFT-Case-Comp-case-1-2",
    },
    img: ritComp,
    tech: [
      { logo: python, name: "Python" },
      { logo: openai, name: "OpenAI" },
      { logo: git, name: "Git" },
    ],
  },
  {
    title: "Analog Designs",
    subheading: "Full-stack order management website for my design agency",
    descriptiveSubheading:
      "Session based authentication, deployed on AWS with NGINX",

    links: {
      github: "https://github.com/gcWDev/Analog-Designs",
      live: "http://analogdesigns.net/",
    },
    img: analogDesigns,
    tech: [
      {
        logo: js,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React",
      },
      {
        logo: node,
        name: "NodeJs",
      },
      {
        logo: bootstrap,
        name: "Bootsstrap",
      },
      {
        logo: css,
        name: "CSS",
      },
      {
        logo: html,
        name: "HTML",
      },
      {
        logo: mysql,
        name: "MySql",
      },
      {
        logo: git,
        name: "Git",
      },
      {
        logo: figma,
        name: "Figma",
      },
    ],
  },
  {
    title: "SNKRS Solutions",
    subheading:
      "Suite of web scrapers / automation pool used for retail arbitrage",
    descriptiveSubheading: "Utilized proxy support to make scripts more robust",

    links: {
      github: "https://github.com/gcWDev/snkrs_solutions_suite",
    },
    img: snkrsSolutions,
    tech: [
      { logo: python, name: "Python" },
      { logo: selenium, name: "Selenium" },
      { logo: css, name: "CSS" },
    ],
  },
  {
    title: "ClassCircles",
    subheading:
      "Full-stack hackathon project for students to find intresting student groups",
    descriptiveSubheading: "Developed in two days",

    links: {
      github: "https://github.com/gcWDev/ClassCircles",
      live: "https://653577550814840008f579f0--papaya-bonbon-e2b35f.netlify.app/",
    },
    img: ClassCircless,
    tech: [
      {
        logo: js,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React",
      },
      {
        logo: node,
        name: "NodeJs",
      },
      {
        logo: bootstrap,
        name: "Bootsstrap",
      },
      {
        logo: css,
        name: "CSS",
      },
      {
        logo: html,
        name: "HTML",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
      {
        logo: git,
        name: "Git",
      },
      {
        logo: figma,
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
  //     github: "https://github.com/gcWDev/Quizzical",
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
