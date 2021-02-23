module.exports = {
  siteMetadata: {
    title: 'Enrique Ortiz',
    siteUrl: 'https://enriqueortiz.dev',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
        site {
            siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
            }
        }
        }
    `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
            ) {
                edges {
                node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                    title
                    date
                    }
                }
                }
            }
            }
        `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            link: 'https://feeds.feedburner.com/gatsby/blog',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Enrique Ortiz',
        short_name: 'Enrique Ortiz',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // Useful note:
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 656,
            },
          },
        ],
      },
    },
  ],
}
