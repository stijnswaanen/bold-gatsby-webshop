import React from "react";
import { Col, Row } from "antd";
import { graphql } from "gatsby";
import LayoutWrapper from "../layout/layout-wrapper";
import ProductCard from "../components/product-card/product-card";
import dummyImage from "../assets/images/laurent.jpg";

const Products = ({ data }) => {
  const {
    allProductSweater: { nodes },
  } = data;
  return (
    <LayoutWrapper>
      <h1>Shop</h1>
      <Row gutter={[16, 16]}>
        {nodes.map((node) => {
          const product = {
            id: node.id,
            name: node.title,
            description: node.body?.processed,
            image: dummyImage,
          };
          return (
            <Col xs={24} sm={12} md={6}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </LayoutWrapper>
  );
};

export default Products;

export const query = graphql`
  query ProductsPage {
    allProductSweater {
      nodes {
        id
        title
        body {
          processed
        }
      }
    }
  }
`;
