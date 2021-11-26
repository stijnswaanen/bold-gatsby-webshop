import React from "react";
import { Col, Row } from "antd";
import LayoutWrapper from "../layout/layout-wrapper";
import ProductCard from "../components/product-card/product-card";
import dummyImage from "../assets/images/laurent.jpg";

const dummyProducts = [
  {
    name: "product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
  {
    name: "product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
  {
    name: "product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
  {
    name: "product 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
];

const Products = () => {
  return (
    <LayoutWrapper>
      <h1>Shop</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <ProductCard product={dummyProducts[0]} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <ProductCard product={dummyProducts[1]} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <ProductCard product={dummyProducts[2]} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <ProductCard product={dummyProducts[3]} />
        </Col>
      </Row>
    </LayoutWrapper>
  );
};

export default Products;
