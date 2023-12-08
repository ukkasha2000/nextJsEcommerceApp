"use client";
import React from "react";
import { Card } from "@/atoms";
import Link from "next/link";

const CategoryCard = ({ src, alt, title, description, link }) => {
  const { Meta } = Card;
  return (
    <Link href={link} style={{textDecoration: "none"}}>
      <Card
        hoverable
        style={{
          width: 700,
        }}
        cover={<img alt={alt} src={src} />}
      >
        <Meta
          title={<span style={{ fontSize: "30px" }}>{title}</span>}
          description={description}
          style={{ fontSize: "20px" }}
        />
      </Card>
    </Link>
  );
};

export default CategoryCard;
