import React from "react";
import Marquee from "react-fast-marquee";
import { ReactSVG } from "react-svg";

export default function SvgMarquee(props) {
  const { svgs } = props;

  const svgArr = svgs.map((svg, index) => {
    return (
      <div className="react-svg" key={index}>
        <ReactSVG src={svg} />
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
      <Marquee autoFill={true}>{svgArr}</Marquee>
    </div>
  );
}
