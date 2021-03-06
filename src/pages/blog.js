import React, { useState } from "react";
import { Col, Row, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LayoutWrapper from "../layout/layout-wrapper";
import BlogCard from "../components/blog-card/blog-card";

import * as styles from "./blog.module.scss";

const Blog = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;

  const [sorting, setSorting] = useState("desc");

  const getNodes = () => {
    return sorting === "asc"
      ? nodes.sort(
          (a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
        )
      : nodes.sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
  };

  const handleMenuClick = (e) => setSorting(e.key);

  const getSortingButtonLabel = (direction) =>
    direction === "asc" ? "oudste eerst" : "nieuwste eerst";

  const sortMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="desc">{getSortingButtonLabel("desc")}</Menu.Item>
      <Menu.Item key="asc">{getSortingButtonLabel("asc")}</Menu.Item>
    </Menu>
  );

  return (
    <LayoutWrapper>
      <div className={styles.blogHeader}>
        <h1>Blogs</h1>
        <Dropdown
          overlay={sortMenu}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button>
            {getSortingButtonLabel(sorting)} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Row gutter={[16, 16]}>
        {getNodes().map((node) => {
          const blogPost = {
            id: node.id,
            title: node.frontmatter.title,
            author: node.frontmatter.authors?.join(", "),
            description: node.excerpt,
            image: <GatsbyImage image={getImage(node.frontmatter.image)} alt={node.frontmatter.title} />
          };
          return (
            <Col xs={24} sm={12} md={8}>
              <Link to={`/blog/${blogPost.id}`}>
                <BlogCard blogPost={blogPost} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </LayoutWrapper>
  );
};

export default Blog;

export const query = graphql`
  query BlogPage {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
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
`;
