import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Col, Row } from "antd";
import ProductCard from "../product-card/product-card";
import dummyImage from "../../assets/images/laurent.jpg";

const FeaturedProducts = () => {
  const {
    allProductSweater: { nodes },
  } = useStaticQuery(graphql`
    query FeaturedProductsQuery {
      allProductSweater(
        filter: { field_featured_product: { eq: true } }
        limit: 4
      ) {
        nodes {
          id
          title
          body {
            processed
          }
        }
      }
    }
  `);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Featured Products</h2>
      <Row gutter={[16, 16]}>
        {nodes.map((node, index) => {
          const product = {
            id: node.id,
            name: node.title,
            description: node.body?.processed,
            image: dummyImage,
          };
          return (
            <Col xs={24} sm={12} md={6} key={index}>
              <ProductCard key={product.id} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FeaturedProducts;
