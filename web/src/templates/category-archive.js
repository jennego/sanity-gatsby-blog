import React from "react";
import { graphql } from "gatsby";

const categoryArchive = (props) => {
  const { data, errors, pageContext } = props;
  return (
    <div>
      {console.log(data.allSanityCoat.nodes)}
      <h1> Category Archive Page for {pageContext.title} </h1>
      {data.allSanityCoat.nodes.length === 0 ? (
        <p> Nothing with tagged with {pageContext.title} </p>
      ) : (
        data.allSanityCoat.nodes.map((item) => <p> {item.title} </p>)
      )}
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
