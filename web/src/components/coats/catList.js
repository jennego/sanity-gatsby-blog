import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Select from "react-select";

const CategoryList = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory(sort: { order: ASC, fields: title }) {
        edges {
          node {
            title
            id
            coats {
              id
              title
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
      }
    }
  `);

  const existingCat = data.allSanityCategory.edges.filter(
    ({ node }) => node.coats !== null
  );

  let catValues = existingCat.map((obj) => ({
    label: obj.node.title,
    value: obj.node.title.toLowerCase(),
  }));

  return (
    <div>
      Categories
      <Select
        isMulti
        name="colors"
        options={catValues}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={props.handleCategory}
      ></Select>
    </div>
  );
};

export default CategoryList;
