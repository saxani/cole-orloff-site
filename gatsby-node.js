/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;


    if(node.internal.type === "StrapiProject"){
        const slug = "/" + node.title.replace(" ", "-").toLowerCase();

        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })

    }
}




exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const template = path.resolve(`src/templates/project.js`)

  return graphql(`
    {
      allStrapiProject {
        edges {
          node {
            fields {
                slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allStrapiProject.edges.forEach(({ node }) => {
        // const pageRoute = node.title.replace(" ", "-").toLowerCase();

      createPage({
        path: node.fields.slug,
        component: template,
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}