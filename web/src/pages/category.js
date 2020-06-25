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
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <h2>Category Archive Pages</h2>
        {data.allSanityCategory.edges.map((cat) => (
          <div>
            <Link
              to={`/category/${cat.node.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
              key={cat.node.id}
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
