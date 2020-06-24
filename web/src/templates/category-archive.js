import React from "react";
import { graphql } from "gatsby";

const categoryArchive = (props) => {
  const { data, errors, pageContext } = props;
  return (
    <div>
      <h1> Category Archive Page for {pageContext.title} </h1>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      {console.log(pageContext)}
    </div>
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
        categories {
          title
          id
        }
      }
    }
  }
`;

export default categoryArchive;
