import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "gatsby";
import { Zoom } from "react-awesome-reveal";

const CoatItem = (props) => {
  return (
    <Col lg={4} md={6} key={props.coat.id} className="d-inline-flex">
      <a className="coat-link" href={`${props.coat.link}`}>
        <i class="fas fa-link fa-2x"></i>
      </a>
      <Link to={`/coat/${props.coat.slug.current}`}>
        <Zoom delay={props.delay}>
          <Card className="bg-dark text-white coat-item">
            <Card.Img src={props.coat.mainImage.asset.url} alt="Card image" />
            <Card.ImgOverlay>
              <div className="hover-detail">
                <span>{props.coat.title}</span>
                {props.coat.limited === true ? (
                  <Badge pill variant="primary">
                    Limited
                  </Badge>
                ) : (
                  ""
                )}
              </div>
            </Card.ImgOverlay>
          </Card>
        </Zoom>
      </Link>
    </Col>
  );
};

export default CoatItem;
