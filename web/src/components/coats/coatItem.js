import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "gatsby";
import { HeartBeat, Zoom } from "react-awesome-reveal";

const CoatItem = (props) => {
  return (
    <Col md={4} key={props.coat.id} className="d-inline-flex">
      <Link to={`/coat/${props.coat.slug.current}`}>
        <Zoom delay={props.delay}>
          <Card className="bg-dark text-white coat-item">
            {console.log(props)}
            <Card.Img src={props.coat.mainImage.asset.url} alt="Card image" />
            <Card.ImgOverlay>
              <a className="coat-link" href={`${props.coat.link}`}>
                <i class="fas fa-link fa-2x"></i>
              </a>
              <div className="hover-detail">{props.coat.title}</div>
              {props.delay}
            </Card.ImgOverlay>
          </Card>
        </Zoom>
      </Link>
    </Col>
  );
};

export default CoatItem;
