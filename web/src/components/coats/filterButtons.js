import React, { useState } from "react";
// import FormControl from "react-bootstrap/FormControl";
// import FormGroup from "react-bootstrap/FormGroup";
// import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
import { toggleIsLimited, coatDataLoad } from "../../state/filterButtons";
import { filterLimited } from "../../state/filterButtons";

import { selectCategory, filterCategory } from "../../state/filterButtons";

import { connect } from "react-redux";
import Select from "react-select";
import CategoryList from "./catList";

// import { useStaticQuery, graphql } from "gatsby";

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allSanityCategory(sort: { order: ASC, fields: title }) {
//         edges {
//           node {
//             title
//             id
//           }
//         }
//       }
//     }
//   `);
//   return <pre>{JSON.stringify(data, null, 4)}</pre>;
// };

// export default ComponentName;

const FilterButtons = ({ isLimited, coatData, allCoats, dispatch }) => {
  const limitToggleHandler = (e) => {
    if (isLimited === false) {
      dispatch(toggleIsLimited(true));
      const filtered = coatData.filter(({ node }) => node.limited == true);
      dispatch(filterLimited(filtered));
      console.log(coatData);
    } else {
      dispatch(toggleIsLimited(false));
      dispatch(filterLimited(allCoats));
      /// maybe add another value in state for all items?
      /// maybe sort into 2 arrays?
      /// how to make sure others get filtered too? Refilter?
    }
  };
  const spaceToggleHandler = (e) => {
    return e.target.checked;
  };

  const categoryHandler = (e) => {
    console.log(e);
    if (e === null || e.length === 0) {
      dispatch(coatDataLoad(allCoats));
      console.log("show all categories", allCoats);
    } else {
      let selectedCategory = e.map((val) => val.value);
      console.log(selectedCategory);
      categoryFilter(selectedCategory);
      dispatch(selectCategory(selectedCategory));
    }
  };

  const categoryFilter = (categories) => {
    let hasCategory = [];
    const notCategory = [];
    console.log("cat filter", categories);

    for (const { node } of allCoats) {
      const simple = node.categories.map((cat) => cat.title.toLowerCase());
      let includesAll = (array_to_check) =>
        categories.reduce(
          (accumulator, current) =>
            accumulator && array_to_check.includes(current),
          true
        );
      if (includesAll(simple)) {
        hasCategory.push({ node });
        if (isLimited) {
          hasCategory = hasCategory.filter(({ node }) => node.limited == true);
        }
      } else {
        notCategory.push(node);
      }
    }

    if (hasCategory.length === 0) {
      return "no matching items";
    }

    console.log("hasCategory arr", hasCategory);

    dispatch(filterCategory(hasCategory));
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
        <CategoryList handleCategory={categoryHandler}></CategoryList>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  isLimited: state.filterButtons.isLimited,
  coatData: state.filterButtons.coatData,
  allCoats: state.filterButtons.allCoats,
});

// const mapDispatchToProps = (dispatch) => ({
//   limitToggleHandler
// });

export default connect(mapStateToProps)(FilterButtons);
