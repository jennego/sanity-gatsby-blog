import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "..xxszaa/../lib/image-url";
// import PortableText from "./portableText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

function CoatSingle(props) {
  const {
    _rawBody,
    categories,
    title,
    mainImage,
    link,
    useNum,
    bgName,
    limited,
  } = props;
  return (
    <Container fluid>
      <Row>
        <Col xs={1} sm={1}>
          {props.nav.prev === null ? (
            ""
          ) : (
            <Link to={`/coat/${props.nav.prev}`}> Previous</Link>
          )}
        </Col>
        <Col xs={10} md={6}>
          {mainImage !== null ? (
            <a href={link}>
              <img src={props.mainImage.asset.url} class="img-fluid" />{" "}
            </a>
          ) : (
            ""
          )}
        </Col>
        <Col sm={12} md={4} xs={{ order: 4 }}>
          <h1> {title} </h1>
          <p> {limited === true ? "Limited" : "Unlimited"} </p>
        </Col>
        <Col xs={1} xs={{ order: 3 }} md={{ order: 4 }}>
          {props.nav.next === null ? (
            ""
          ) : (
            <Link to={`/coat/${props.nav.next}`}> Next</Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CoatSingle;
