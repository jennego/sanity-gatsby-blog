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
      <div className="row d-flex justify-content-center">
        <div
          className="col-xs-1 d-flex align-items-center"
          d-flex
          align-items-center
        >
          {props.nav.prev === null ? (
            <i className="fas fa-chevron-left fa-7x text-light"></i>
          ) : (
            <Link to={`/coat/${props.nav.prev}`}>
              {" "}
              <i class="fas fa-chevron-left fa-7x"></i>
            </Link>
          )}
        </div>
        <Col xs={8} md={6}>
          {mainImage !== null ? (
            <a href={link}>
              <img src={props.mainImage.asset.url} class="img-fluid" />{" "}
            </a>
          ) : (
            ""
          )}
        </Col>
        <Col xs={12} sm={12} md={4} xs={{ order: 4 }}>
          <h1> {title} </h1>
          <p> {limited === true ? "Limited" : "Unlimited"} </p>
        </Col>
        <div
          className="col-xs-1 d-flex align-items-center order-xs-3 order-md-4"
          d-flex
          align-items-center
        >
          {props.nav.next === null ? (
            <i className="fas fa-chevron-right fa-7x text-light"></i>
          ) : (
            <Link to={`/coat/${props.nav.next}`}>
              {" "}
              <i class="fas fa-chevron-right fa-7x"></i>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CoatSingle;
