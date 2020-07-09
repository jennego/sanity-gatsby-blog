import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

import CoatItemArch from "../components/coats/archive-item";

const categoryArchive = (props) => {
  const { data, pageContext } = props;
  return (
    <Layout>
      <Container>
        <h1>
          Here are the things that are tagged
          <Badge variant="dark">{pageContext.title}</Badge>
        </h1>
        {data.allSanityCoat.nodes.length === 0 ? (
          <p> Nothing with tagged with {pageContext.title} </p>
        ) : (
          data.allSanityCoat.nodes.map((item) => (
            <CoatItemArch coat={item} {...props} />
          ))
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query CatTemplateQuery($id: String!) {
    allSanityCoat(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        mainImage {
          asset {
            url
            title
          }
        }
        title
        id
        limited
        link
        preCreation
        useNum
        slug {
          current
        }
        categories {
          title
          id
        }
      }
    }
  }
`;

export default categoryArchive;
