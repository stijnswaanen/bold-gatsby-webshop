import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import LayoutWrapper from "../layout/layout-wrapper";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, authors, image },
    },
  } = data;
  return (
    <LayoutWrapper>
      <h1>{title}</h1>
      <h3>{authors?.join(', ')}</h3>
      <GatsbyImage image={getImage(image)} alt={title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </LayoutWrapper>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        authors
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 300
              placeholder: BLURRED
              formats: AUTO
              layout: CONSTRAINED
            )
          }
        }
      }
      html
    }
  }
`;
