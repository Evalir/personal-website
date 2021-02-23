const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

const POSTS_PER_PAGE = 10

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

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

  const numOfPosts = result.data.allMarkdownRemark.edges.length
  const numOfPages = Math.ceil(numOfPosts / POSTS_PER_PAGE)

  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numOfPages,
        currentPage: i + 1,
      },
    })
  })

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
