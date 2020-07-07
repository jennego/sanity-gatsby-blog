import React, { useState } from "react";
// import FormControl from "react-bootstrap/FormControl";
// import FormGroup from "react-bootstrap/FormGroup";
// import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
import { toggleIsLimited } from "../../state/filterButtons";
import { filterLimited } from "../../state/filterButtons";

import { connect } from "react-redux";
import Select from "react-select";

const FilterButtons = ({ isLimited, coatData, dispatch }) => {
  const limitToggleHandler = (e) => {
    if (isLimited === false) {
      dispatch(toggleIsLimited(true));
      const filtered = coatData.filter(({ node }) => node.limited == true);
      dispatch(filterLimited(filtered));
      console.log(coatData);
    } else {
      dispatch(toggleIsLimited(false));
      const filtered = [];
      dispatch(filterLimited(filtered));
      /// maybe add another value in state for all items?
      /// maybe sort into 2 arrays?
      /// how to make sure others get filtered too? Refilter?
    }
  };
  const spaceToggleHandler = (e) => {
    return e.target.checked;
  };

  const catHandler = (e) => {
    let value = e.map((val) => val.value);
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
        <Select
          isMulti
          name="colors"
          options={[
            { value: "blue", label: "blue" },
            { value: "red", label: "red" },
            { value: "purple", label: "PUrpLe" },
          ]}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={catHandler}
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  isLimited: state.filterButtons.isLimited,
  coatData: state.filterButtons.coatData,
});

// const mapDispatchToProps = (dispatch) => ({
//   limitToggleHandler
// });

export default connect(mapStateToProps)(FilterButtons);
