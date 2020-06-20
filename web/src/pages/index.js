import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoatItem from "../components/coats/coatItem";
import AboutCoat from "../components/coats/aboutCoat";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    coat: allSanityCoat(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          title
          link
          limited
          mainImage {
            asset {
              url
            }
          }
          slug {
            current
          }
          categories {
            id
            title
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {console.log(data)}

        <Row>
          <AboutCoat />
        </Row>

        <Row>
          {data.coat.edges.map(({ node }) => (
            <CoatItem coat={node} />
            // <Col md={4}>
            //   {≈ !== null ? (
            //     <img className="img-fluid" src={node.mainImage.asset.url} />
            //   ) : (
            //     ""
            //   )}
            //   {console.log(node)}
            // </Col>
          ))}
        </Row>
        {/* {postNodes && (
              <BlogPostPreviewList
              title="Latest blog posts"
              nodes={postNodes}
              browseMoreHref="/archive/"
              />
            )} */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
