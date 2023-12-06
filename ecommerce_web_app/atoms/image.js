import { Image as AntImage } from "antd";
import React from "react";

const Image = ({ width, height, src, alt, preview, style, additionalProps }) => {
  return (
    <AntImage
      width={width}
      height={height}
      src={src}
      preview={preview}
      alt={alt}
      style={style}
      {...additionalProps}
    />
  );
};

Image.defaultProps = {
    additionalProps: {},
    style: {},
    alt:"image",
    width: 200,
    height: 60,
    src: "",
    preview: false
  };

export default Image;
