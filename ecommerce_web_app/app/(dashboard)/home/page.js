import { ImageCarousel } from "@/molecules";
import CategoryCard from "@/molecules/categoryCard";
import React from "react";

const HomePage = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <ImageCarousel />
      <div
        style={{ marginTop: "80px", marginLeft: "5vw", paddingBottom: "80px" }}
      >
        <div>
          <h1 style={{ color: "orange", fontSize: "50px" }}>
            Browse Categories
          </h1>
          <div
            style={{ marginTop: "40px", display: "flex", paddingLeft: "30px" }}
          >
            <div>
                <CategoryCard
                  src="/assets/images/alliphones.jpeg"
                  alt="Iphones"
                  title="Iphones"
                  description="Welcome to our iPhone Wonderland, where cutting-edge technology meets unparalleled design. Explore our curated collection of iPhones, meticulously selected to provide you with the best in performance, style, and innovation."
                  link="/categories/iphones"
                />
            </div>
            <div style={{ marginLeft: "10%" }}>
              <CategoryCard
                src="/assets/images/allaccessories.png"
                alt="Accessories"
                title="Accessories"
                description="Welcome to our Accessories Wonderland, where cutting-edge technology meets unparalleled design. Explore our curated collection of Apple Accessories, meticulously selected to provide you with the best in performance, style, and innovation."
                link="/categories/accessories"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
