import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "..xxszaa/../lib/image-url";
// import PortableText from "./portableText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Container>
      <Row>
        <Col md={8}>
          {mainImage !== null ? (
            <a href={link}>
              <img src={props.mainImage.asset.url} class="img-fluid" />{" "}
            </a>
          ) : (
            ""
          )}
        </Col>
        <Col md={4}>
          <h1> {title} </h1>
          <p> {limited === true ? "Limited" : "Unlimited"} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CoatSingle;
