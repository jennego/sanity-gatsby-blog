import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import BlockContent from "@sanity/block-content-to-react";

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

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

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
              <i class="fas fa-chevron-left fa-7x"></i>
            </Link>
          )}
        </div>
        <Col xs={8} md={5}>
          {mainImage !== null ? (
            <a href={link}>
              <img
                src={props.mainImage.asset.url}
                alt={props.mainImage.caption}
                className="img-fluid"
              />
            </a>
          ) : (
            ""
          )}
        </Col>
        <Col sm={12} md={6} lg={4} xs={(12, { order: 4 })}>
          <div className="item-block">
            <h1> {title} </h1>
            <Badge variant="primary">
              {limited === true ? "Limited" : "Unlimited"}{" "}
            </Badge>
            {console.log(props)}
            {useNum !== null ? <Badge> {useNum} </Badge> : ""}
            {bgName !== null ? (
              <p>
                <strong>Background Name</strong>:{bgName}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="item-block">
            <h5>Categories</h5>
            {categories.map((cat) => (
              <Link
                to={`/category/${cat.title.replace(/ /g, "-").toLowerCase()}`}
              >
                <Badge pill variant="dark" key={cat.id}>
                  {cat.title}
                </Badge>
              </Link>
            ))}
          </div>
          <BlockContent
            blocks={_rawBody}
            serializers={serializers}
            className="item-block body-text"
          ></BlockContent>
        </Col>
        <div
          className="col-xs-1 d-flex align-items-center order-xs-3 order-lg-4"
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
