import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Row } from "antd";
import ProductCard from "../product-card/product-card";

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
            image: (
              <GatsbyImage
                image={getImage(node.relationships.field_image.localFile)}
                alt={node.field_image.alt}
              />
            ),
          };
          return (
            <Col xs={24} sm={12} md={6} key={index}>
              <Link to={`/product/${node.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FeaturedProducts;
