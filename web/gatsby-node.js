const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: {
          id,
          next:
            index === postEdges.length - 1
              ? null
              : postEdges[index + 1].node.slug.current,
          prev: index === 0 ? null : postEdges[index - 1].node.slug.current,
        },
      });
    });
}

async function createCoatPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCoat(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const coatEdges = (result.data.allSanityCoat || {}).edges || [];

  coatEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/coat/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/coat.js"),
        context: {
          id,
          next:
            index === postEdges.length - 1
              ? null
              : coatEdges[index + 1].node.slug.current,
          prev: index === 0 ? null : coatEdges[index - 1].node.slug.current,
        },
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createCoatPages(graphql, actions);
};
