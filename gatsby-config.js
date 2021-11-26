module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Bold X-mas Shop",
    baseLine: "A lovely place with even more lovely sweaters!"
  },
  plugins: [
    "gatsby-plugin-sass",
    'gatsby-plugin-antd',
    /*{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogPosts',
        path: `${__dirname}/blogPosts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://ec2-18-130-227-17.eu-west-2.compute.amazonaws.com`,
        apiBase: `jsonapi`,
        links: {
          sweater: `http://ec2-18-130-227-17.eu-west-2.compute.amazonaws.com/jsonapi/products/sweater`
        }
      },
    }, */
  ],
};
