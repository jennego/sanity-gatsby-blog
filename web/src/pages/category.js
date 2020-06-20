import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Category = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory(sort: { order: ASC, fields: title }) {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `);
  return data.allSanityCategory.edges.map((cat) => (
    <div key={cat.node.id}>
      <p> {cat.node.title} </p>
    </div>
  ));
};

export default Category;
