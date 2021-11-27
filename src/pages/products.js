import React from "react";
import { Col, Row } from "antd";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LayoutWrapper from "../layout/layout-wrapper";
import ProductCard from "../components/product-card/product-card";

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
            image: (
              <GatsbyImage
                image={getImage(node.relationships.field_image.localFile)}
                alt={node.field_image.alt}
              />
            ),
          };
          return (
            <Col xs={24} sm={12} md={6}>
              <Link to={`/product/${node.id}`}>
                <ProductCard product={product} />
              </Link>
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
        field_image {
          alt
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 300
                  placeholder: BLURRED
                  formats: AUTO
                  layout: CONSTRAINED
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
    }
  }
`;
