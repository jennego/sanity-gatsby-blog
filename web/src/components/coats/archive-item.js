import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "gatsby";
import { Zoom } from "react-awesome-reveal";

const CoatItemArch = (props) => {
  return (
    <Col lg={6} md={12} key={props.coat.id} className="d-inline-flex">
      <Link to={`/coat/${props.coat.slug.current}`}>
        <Zoom delay={props.delay}>
          <Card className="bg-white archive-coat">
            <Row noGutters={true}>
              <Col>
                {console.log(props)}
                <Card.Img
                  src={props.coat.mainImage.asset.url}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <a className="coat-link" href={`${props.coat.link}`}>
                    <i class="fas fa-link fa-2x"></i>
                  </a>
                </Card.ImgOverlay>
              </Col>
              <Col>
                <Card.Body>
                  <h2>{props.coat.title}</h2>
                  {props.coat.categories.map((cat) =>
                    cat.title === props.pageContext.title ? (
                      <Badge pill variant="warning" style={{ margin: "2px" }}>
                        {cat.title}
                      </Badge>
                    ) : (
                      <Badge pill variant="secondary" style={{ margin: "2px" }}>
                        {cat.title}
                      </Badge>
                    )
                  )}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Zoom>
      </Link>
    </Col>
  );
};

export default CoatItemArch;
