import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import { Link } from "gatsby";

const Category = () => {
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

  return (
    <Layout>
      <Container>
        {console.log(data)}
        <h2>Category Archive Pages</h2>
        {existingCat.map((cat) => (
          <div key={cat.node.id}>
            <Link
              to={`/category/${cat.node.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
            >
              {cat.node.title}
            </Link>
          </div>
        ))}
      </Container>
    </Layout>
  );
};

export default Category;
