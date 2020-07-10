import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const NoResults = () => (
  <Container>
    <Alert variant="warning">
      <h3> No matches! </h3>
      <p> Nothing matches your filters or search query</p>
      <p> Try reducing the number of filters.</p>
    </Alert>
  </Container>
);

export default NoResults;
