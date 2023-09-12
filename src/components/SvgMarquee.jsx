import React from "react";
import Marquee from "react-fast-marquee";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

export default function SvgMarquee(props) {
  const { svgs, pause } = props;

  const svgArr = svgs.map((svg, index) => {
    return (
      <div className="react-svg marquee-item" key={index}>
        {svg.link ? (
          <a href={svg.link} target="_blank">
            <ReactSVG src={svg.logo} />
          </a>
        ) : (
          <ReactSVG src={svg.logo} />
        )}
      </div>
    );
  });

  return (
    <div
      style={{
        maxWidth: svgArr.length * 40,
      }}
      className="marquee-fixed-container"
    >
      <Marquee autoFill={true} pauseOnHover={pause ? pause : null}>
        {svgArr}
      </Marquee>
    </div>
  );
}
