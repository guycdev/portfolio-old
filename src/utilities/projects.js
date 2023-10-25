import analogDesigns from "../assets/projects/analog-designs.png";
import snkrsSolutions from "../assets/projects/SNKRS-solutions.png";
import ClassCircless from "../assets/projects/ClassCircless.png";
import ritComp from "../assets/projects/RIT-comp.png";
import quizzical from "../assets/projects/quizzical.png";
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
import bootstrap from "../assets/overlays/bootstrap.svg";
import html from "../assets/tech/html.svg";

const projects = [
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
    descriptiveSubheading:
      "Generated $350K in lifetime revenue, automated inventory worth $40K.",

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
    descriptiveSubheading: "Developed within a two day time frame",

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
  {
    title: "High Frequency Trading Bot",
    subheading:
      "Arbitrage trading bot used for the RIT high frequency trading platform",
    descriptiveSubheading:
      "Got 1st place by outperforming 38 participants, achieved a P/L differential of $100K above mean.",

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
    title: "Quizical Quiz App",
    subheading:
      "Dynamic quiz app with user controlled category, difficulty, and type",
    descriptiveSubheading:
      "Implemented dynamic user settings for a personalized quiz experience.",
    links: {
      github: "https://github.com/gcWDev/Quizzical",
      live: "https://dancing-douhua-4d4ac1.netlify.app/",
    },
    img: quizzical,
    tech: [
      { logo: js, name: "Javascript" },
      { logo: react, name: "React" },
      { logo: css, name: "CSS" },
      { logo: git, name: "Git" },
      { logo: figma, name: "Figma" },
    ],
  },
];

export default projects;
