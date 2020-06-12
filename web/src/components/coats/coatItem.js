import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CoatItem = (props) => {
  return (
    <Col md={4} key={props.coat.id}>
      <Card className="bg-dark text-white">
        {console.log(props)}
        <Card.Img src={props.coat.mainImage.asset.url} alt="Card image" />
        <Card.ImgOverlay>Link</Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default CoatItem;
