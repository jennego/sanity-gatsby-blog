// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import SEO from "../components/seo";
// import Layout from "../containers/layout";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import CoatItem from "../components/coats/coatItem";
// import AboutCoat from "../components/coats/aboutCoat";

// // filter by category name. Will need more content first.

// const filter = ($query = "Blue", props) => {
//   const data = useStaticQuery(graphql`
//     {
//       coat: allSanityCoat(
//         filter: { categories: { elemMatch: { title: { eq: $query } } } }
//       ) {
//         edges {
//           node {
//             id
//             title
//             link
//             mainImage {
//               asset {
//                 url
//               }
//             }
//             slug {
//               current
//             }
//             categories {
//               id
//               title
//             }
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Layout>
//       <SEO
//         title={site.title}
//         description={site.description}
//         keywords={site.keywords}
//       />
//       <Container>
//         <h1 hidden>Welcome to {site.title}</h1>
//         <h2>Filtering from GraphQL</h2>
//         {console.log(data)}
//       </Container>
//     </Layout>
//   );
// };

// export default filter;
