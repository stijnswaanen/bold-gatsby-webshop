import React from "react";
import { Col, Row } from "antd";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogCard from "../blog-card/blog-card";
import dummyImage from "../../assets/images/laurent.jpg";

const LatestBlogs = () => {
  // TODO: static graphql query fetching posts
  const data = useStaticQuery(graphql`
    query LatestBlogs {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            authors
            date
            image {
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
          id
          excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { nodes },
  } = data;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Our latest blogs</h2>
      <Row gutter={[16, 16]}>
        {nodes.map((node, i) => {
          const blogPost = {
            id: node.id,
            title: node.frontmatter.title,
            author: node.frontmatter.authors?.join(", "),
            description: node.excerpt,
            image: (
              <GatsbyImage
                image={getImage(node.frontmatter.image)}
                alt={node.frontmatter.title}
              />
            ),
          };
          return (
            <Col xs={24} sm={12} md={8} key={i}>
              <BlogCard key={blogPost.id} blogPost={blogPost} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default LatestBlogs;
