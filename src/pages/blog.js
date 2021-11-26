import React from "react";
import { Col, Row } from "antd";
import { graphql } from "gatsby";

import LayoutWrapper from "../layout/layout-wrapper";
import BlogCard from "../components/blog-card/blog-card";

import dummyImage from "../assets/images/laurent.jpg";
import * as styles from "./blog.module.scss";

const dummyBlogPosts = [
  {
    title: "blog 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
  {
    title: "blog 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
  {
    title: "blog 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lacus aliquam, faucibus magna efficitur, pulvinar metus. Sed in magna justo. Curabitur sodales nulla mi, sit amet semper velit scelerisque eu. Morbi accumsan leo vitae consectetur eleifend. Etiam vel augue cursus nulla pulvinar feugiat vel at odio.",
    image: dummyImage,
    author: "Santa",
  },
];

const Blog = ({ data }) => {
  /* const {
    allMarkdownRemark: { nodes },
  } = data; */
  return (
    <LayoutWrapper>
      <div className={styles.blogHeader}>
        <h1>Blogs</h1>
      </div>
      <Row gutter={[16, 16]}>
        {/* {nodes.map((node) => {
          const blogPost = {
            title: node.frontmatter.title,
            author: node.frontmatter.authors?.join(", "),
            description: node.excerpt,
            image: dummyImage,
          };
          return (
            <Col xs={24} sm={12} md={8}>
              <BlogCard blogPost={blogPost} />
            </Col>
          );
        })} */}
        <Col xs={24} sm={12} md={8}>
          <BlogCard blogPost={dummyBlogPosts[0]} />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <BlogCard blogPost={dummyBlogPosts[1]} />
        </Col>
        <Col xs={0} sm={0} md={8}>
          <BlogCard blogPost={dummyBlogPosts[2]} />
        </Col>
      </Row>
    </LayoutWrapper>
  );
};

export default Blog;

/* export const query = graphql`
  query BlogPage {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          title
          authors
          date
        }
        id
        excerpt(truncate: true, pruneLength: 150)
      }
    }
  }
`; */
