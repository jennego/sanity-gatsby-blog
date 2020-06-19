// import React from "react";
// import { graphql } from "gatsby";
// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import SEO from "../components/seo";
// import Layout from "../containers/layout";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import CoatItem from "../components/coats/coatItem";
// import AboutCoat from "../components/coats/aboutCoat";

// // filter by category name. Will need more content first.

// export const query = graphql`

//   query IndexPageQuery {
//     coat: allSanityCoat(
//       limit: 6
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           title
//           link
//           mainImage {
//             asset {
//               url
//             }
//           }
//           slug {
//             current
//           }
//           categories {
//             id
//             title
//           }
//         }
//       }
//     }
//   }
// `;

// const IndexPage = (props) => {
//   const { data, errors } = props;

//   return (
//     <Layout>
//       <SEO
//         title={site.title}
//         description={site.description}
//         keywords={site.keywords}
//       />
//       <Container>
//         <h1 hidden>Welcome to {site.title}</h1>
//         {console.log(data)}

//         <Row>
//           <AboutCoat />
//         </Row>

//         <Row>
//           {data.coat.edges.map(({ node }).filter(node => (
//             <CoatItem coat={node} />
//             // <Col md={4}>
//             //   {≈ !== null ? (
//             //     <img className="img-fluid" src={node.mainImage.asset.url} />
//             //   ) : (
//             //     ""
//             //   )}
//             //   {console.log(node)}
//             // </Col>
//           ))}
//         </Row>
//         {/* {postNodes && (
//               <BlogPostPreviewList
//               title="Latest blog posts"
//               nodes={postNodes}
//               browseMoreHref="/archive/"
//               />
//             )} */}
//       </Container>
//     </Layout>
//   );
// };

// export default IndexPage;
