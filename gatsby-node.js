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
  const setupTemplate = require.resolve('./src/templates/setup')

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

  const blogNodes = result.data.allMarkdownRemark.edges.filter(({ node }) =>
    node.frontmatter.slug.includes('blog')
  )
  const journalNodes = result.data.allMarkdownRemark.edges.filter(({ node }) =>
    node.frontmatter.slug.includes('journal')
  )
  const setupNode = result.data.allMarkdownRemark.edges.find(({ node }) =>
    node.frontmatter.slug.includes('setup')
  )

  const numOfPosts = blogNodes.length + journalNodes.length
  const numOfPages = Math.ceil(numOfPosts / POSTS_PER_PAGE)

  // Setup page
  createSinglePage({
    createPage,
    context: {
      slug: setupNode.node.frontmatter.slug,
    },
    template: setupTemplate,
    path: '/setup',
  })

  // Blog pagination
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

  // Journal posts
  createPosts({
    createPage,
    nodes: journalNodes,
    template: journalPostTemplate,
  })

  // Blog posts
  createPosts({
    createPage,
    nodes: blogNodes,
    template: blogPostTemplate,
  })
}

function createSinglePage({ createPage, template, context, path }) {
  createPage({
    path,
    component: template,
    context,
  })
}

function createPosts({ createPage, nodes, template }) {
  nodes.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: template,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
