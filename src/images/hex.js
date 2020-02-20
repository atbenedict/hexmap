import React from "react";
import grey from "./greyhex.png";

const Hex = ({
  hexWidth = "24",
  filter_id = "",
  pattern_id = "img1",
  patternUnits = "userSpaceOnUse",
  patternWidth = "100%",
  patternHeight = "64",
  imageClassName = "twombly",
  image_url = grey,
  image_x = "0",
  image_y = "0",
  image_width = "64",
  image_height = "64",
  style = {},
  width = { hexWidth },
  height = { hexWidth },
  className = "",
  viewBox = "0 0 64 64",
  stroke = "#cccccc",
  fill = "#feffe9",
  strokeMiterlimit = "10",
  strokeWidth = "2px"
}) => {
  // let bBox = Hex.getBBox();
  // console.log(bBox.x, bBox.y);
  return (
    <div>
      <svg
        width={hexWidth}
        style={style}
        height={hexWidth}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        xmlns="http://www.w3.org/2000/svg"
        className={`svgIcon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <pattern
            id={pattern_id}
            patternUnits={patternUnits}
            width={patternWidth}
            height={patternHeight}
          >
            <image
              className={imageClassName}
              xlinkHref={image_url}
              x={image_x}
              y={image_y}
              width={image_width}
              height={image_height}
            />
          </pattern>
        </defs>
        <polygon
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
          // fill={`url(#${pattern_id})`}
          // filter={`url(#${filter_id})`}
          className="a"
          points="64,48 64,16 32,0 0,16 0,48 32,64 "
        />
      </svg>
    </div>
  );
};

export default Hex;
