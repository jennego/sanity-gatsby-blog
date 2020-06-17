import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "gatsby";

const CoatItem = (props) => {
  return (
    <Col md={4} key={props.coat.id}>
      <Link to={`/coat/${props.coat.slug.current}`}>
        <Card className="bg-dark text-white">
          {console.log(props)}
          <Card.Img src={props.coat.mainImage.asset.url} alt="Card image" />
          <Card.ImgOverlay>
            <a className="coat-link" href={`${props.coat.link}`}>
              <i class="fas fa-link fa-2x"></i>
            </a>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  );
};

export default CoatItem;
