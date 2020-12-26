exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogPost.js`)
  const journalPostTemplate = require.resolve(`./src/templates/journalPost.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while fetching blog posts.`)
    return
  }

  // While this will work fine for now, eventually we will wanna paginate
  // blog posts. For posterity, here's a nice way to do it:
  // https://www.gatsbyjs.com/docs/adding-pagination/
  // Also, as this node API requires everything to be done in this function
  // definition, it would be good to pipe all functions that create pages
  // for cleanliness.
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: node.frontmatter.slug.includes('journal')
        ? journalPostTemplate
        : blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
