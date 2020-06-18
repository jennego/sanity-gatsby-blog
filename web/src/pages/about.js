import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../containers/layout";
import Container from "react-bootstrap/Container";

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const About = ({ data }) => (
  <Layout>
    <Container>
      <h2>{data.sanityAbout.title}</h2>
      <BlockContent
        blocks={data.sanityAbout._rawBody}
        serializers={serializers}
      ></BlockContent>
    </Container>
  </Layout>
);

export const query = graphql`
  {
    sanityAbout {
      title
      _rawBody
    }
  }
`;

export default About;
