import React, { useState } from "react";
// import FormControl from "react-bootstrap/FormControl";
// import FormGroup from "react-bootstrap/FormGroup";
// import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
import { toggleIsLimited } from "../../state/filterButtons";
import { connect } from "react-redux";

const FilterButtons = ({ isLimited, dispatch }) => {
  const limitToggleHandler = (e) => {
    if (isLimited === false) {
      dispatch(toggleIsLimited(true));
    } else {
      dispatch(toggleIsLimited(false));
    }
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
        onClick={limitToggleHandler}
      />
      {isLimited}
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

const mapStateToProps = (state) => ({
  isLimited: state.filterButtons.isLimited,
});

// const mapDispatchToProps = (dispatch) => ({
//   limitToggleHandler
// });

export default connect(mapStateToProps)(FilterButtons);
