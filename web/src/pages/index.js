import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoatItem from "../components/coats/coatItem";
import AboutCoat from "../components/coats/aboutCoat";
import FilterButtons from "../components/coats/filterButtons";

import { coatDataLoad } from "../state/filterButtons";
import { connect } from "react-redux";

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

const IndexPage = ({ data, errors, dispatch, coatData }) => {
  const { query, setQuery } = useState();

  const coatResults = data.coat.edges;

  useEffect(() => {
    if (coatData.length === 0) {
      dispatch(coatDataLoad(coatResults));
      console.log("useeffect", coatResults);
    }
  });

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
      {console.log("redux", coatData)}
      <Container fluid>
        <h1 hidden>Welcome to {site.title}</h1>
        {console.log(data)}

        <Row>
          <Container>
            <AboutCoat />
          </Container>
        </Row>

        <Row>
          <Col>
            <Row noGutters={true}>
              {coatData.map(({ node }, x) => (
                <CoatItem coat={node} delay={x * 200} />
              ))}
            </Row>
            {/* {postNodes && (
              <BlogPostPreviewList
              title="Latest blog posts"
              nodes={postNodes}
              browseMoreHref="/archive/"
              />
            )} */}
          </Col>
          <Col md={3}>
            <FilterButtons />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  coatData: state.filterButtons.coatData,
});

export default connect(mapStateToProps)(IndexPage);
