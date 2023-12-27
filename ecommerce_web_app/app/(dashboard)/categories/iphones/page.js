"use client";
import React from "react";
import { Typography } from "antd";
import ProductCard from "@/molecules/productCard";

const iphones = () => {
  const products = require("../../../../public/Data/data.json").products[0];
  const { Title } = Typography;
  return (
    <div>
      <Title
        style={{
          backgroundColor: "orange",
          padding: "20px 30px",
          color: "white",
        }}
      >
        Iphones
      </Title>
      <section className={`mt-5`}>
        <div className="container">
          <div className="row">
            {products.mobilePhones.map((val) => {
              return (
                <div
                  className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4"
                  key={val.id}
                >
                  <ProductCard data={val} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default iphones;
