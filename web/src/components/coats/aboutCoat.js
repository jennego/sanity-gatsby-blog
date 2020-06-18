import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useStaticQuery, graphql } from "gatsby";

const AboutCoat = () => {
  const data = useStaticQuery(graphql`
    {
      sanityCoatIntro {
        _rawBody
      }
    }
  `);
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <div>
      {console.log(data.sanityCoatIntro._rawBody)}
      <BlockContent
        blocks={data.sanityCoatIntro._rawBody}
        serializers={serializers}
      ></BlockContent>
    </div>
  );
};

export default AboutCoat;
