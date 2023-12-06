"use client";
import { Carousel, Image } from "@/atoms";
const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ImageCarousel = () => (
  <Carousel autoplay style={{ marginLeft: "5vw" }}>
    <div>
      <Image
        width="90vw"
        height={700}
        src="/assets/images/bannerImg3.webp"
        alt="Sale3"
        style={contentStyle}
      />
    </div>
    <div style={{ marginTop: "90px" }}>
      <Image
        width="90vw"
        height={700}
        src="/assets/images/bannerImg2.webp"
        alt="Sale2"
        style={contentStyle}
      />
    </div>
    <div>
      <Image
        width="90vw"
        height={700}
        src="/assets/images/bannerimg1.png"
        alt="Sale1"
        style={contentStyle}
      />
    </div>
  </Carousel>
);
export default ImageCarousel;
