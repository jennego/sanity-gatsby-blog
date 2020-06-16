import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CoatSingle from "../components/coats/coat-single";

import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query CoatTemplateQuery($id: String!) {
    coat: sanityCoat(id: { eq: $id }) {
      id
      mainImage {
        caption
        asset {
          url
          title
        }
      }
      title
      link
      useNum
      bgName
      limited
      categories {
        _id
        title
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const CoatTemplate = (props) => {
  const { data, errors, pageContext } = props;
  const coat = data && data.coat;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {coat && <CoatSingle {...coat} nav={pageContext} />}
    </Layout>
  );
};

export default CoatTemplate;
