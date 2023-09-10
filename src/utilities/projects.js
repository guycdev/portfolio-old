import analogDesigns from "../assets/projects/analog-designs.png";
import snkrsSolutions from "../assets/projects/SNKRS-solutions.png";
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
import selenium from "../assets/tech/selenium.svg";
import js from "../assets/overlays/js.svg";
import bootstrap from "../assets/overlays/bootstrap.svg";

const projects = [
  {
    title: "Analog Designs",
    subheading: "Full-stack order management website for my design agency",
    links: {
      github: "https://github.com/gcWDev/Analog-Designs",
      live: "http://ec2-18-215-255-171.compute-1.amazonaws.com/#home",
    },
    img: analogDesigns,
    tech: [js, react, node, bootstrap, css, mysql, git, figma],
  },
  {
    title: "SNKRS Solutions",
    subheading:
      "Suite of web scrapers / automation pool used for retail arbitrage",
    links: {
      github: "",
      live: "live.com",
    },
    img: snkrsSolutions,
    tech: [python, selenium, css],
  },
  {
    title: "High Frequency Trading Bot",
    subheading:
      "Arbitrage trading bot used for the RIT high frequency trading platform",
    links: {
      github: "https://github.com/gcWDev/HFT-Case-Comp-case-1-2",
      live: "https://github.com/gcWDev/HFT-Case-Comp-case-1-2",
    },
    img: ritComp,
    tech: [python, openai, git],
  },
  {
    title: "Quizical Quiz App",
    subheading:
      "Dynamic quiz app with user controlled category, difficulty, and type",
    links: {
      github: "https://github.com/gcWDev/Quizzical",
      live: "https://dancing-douhua-4d4ac1.netlify.app/",
    },
    img: quizzical,
    tech: [js, react, css, git, figma],
  },
];

export default projects;
