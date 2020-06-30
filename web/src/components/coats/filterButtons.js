import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";

const FilterButtons = (props) => {
  const limitToggleHandler = (e) => {
    return e.target.checked;
  };
  const spaceToggleHandler = (e) => {
    return e.target.checked;
  };

  const catHandler = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log(value);
  };
  return (
    <Form>
      <h3>Filters</h3>
      <Form.Check
        type="switch"
        id="limited"
        label="Limited"
        data-toggle="button"
        defaultChecked={false}
        onChange={limitToggleHandler}
      />
      <Form.Check
        type="switch"
        id="pre-creation-space"
        label="Pre Creation Space"
        onChange={spaceToggleHandler}
      />
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as="select" multiple onChange={catHandler}>
          <option>blue</option>
          <option>pink</option>
          <option>red</option>
          <option>green</option>
          <option>unicorn</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default FilterButtons;
