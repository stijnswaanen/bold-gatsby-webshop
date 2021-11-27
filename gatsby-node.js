const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query OverviewQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          id
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/${node.id}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { id: node.id }
    });
  });
};
