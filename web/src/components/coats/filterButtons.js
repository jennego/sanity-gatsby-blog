import React from "react";
import Form from "react-bootstrap/Form";
import {
  toggleIsLimited,
  coatDataLoad,
  noResults,
} from "../../state/filterButtons";
import { filterLimited } from "../../state/filterButtons";

import { selectCategory, filterCategory } from "../../state/filterButtons";

import { connect } from "react-redux";
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

const FilterButtons = ({
  isLimited,
  coatData,
  allCoats,
  dispatch,
  errors,
  hasResults,
}) => {
  const limitToggleHandler = (e) => {
    let input = e.target.value;

    // / next check if category is present
    // / combine true/false arrays?

    if (input === "true") {
      dispatch(toggleIsLimited(true));
      console.log("is limited filtered true");

      // const filtered = coatData.filter(({ node }) => node.limited === true);
      // dispatch(filterLimited(filtered));
      // if (filtered.length === 0) {
      //   dispatch(noResults(false));
      // }
    } else if (input === "false") {
      dispatch(toggleIsLimited(false));
      console.log("is filtered unlimited");
      // const filtered = coatData.filter(({ node }) => node.limited === false);
      // dispatch(filterLimited(filtered));
      // if (filtered.length === 0) {
      //   dispatch(noResults(false));
      // }
      /// maybe sort into 2 arrays?
      /// how to make sure others get filtered too? Refilter?
    } else if (input === "all") {
      dispatch(toggleIsLimited("all"));
      console.log("is limited filtered all");
      // dispatch(filterLimited(allCoats));
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
    console.log("cat filter", categories, allCoats);

    for (const { node } of allCoats) {
      const simple = node.categories.map((cat) => cat.title.toLowerCase());
      console.log(simple);
      let includesAll = (array_to_check) =>
        categories.reduce(
          (accumulator, current) =>
            accumulator && array_to_check.includes(current),
          true
        );
      if (includesAll(simple)) {
        console.log("match");
        hasCategory.push({ node });
        // if (isLimited) {
        //   hasCategory = hasCategory.filter(({ node }) => node.limited === true);
        // }
      } else {
        notCategory.push(node);
      }
    }
    console.log("hasCategory arr", hasCategory);

    if (hasCategory.length === 0) {
      dispatch(noResults(false));
    }

    if (hasCategory.length > 0) {
      dispatch(filterCategory(hasCategory));
    }
  };

  return (
    <Form className="sticky-top">
      <h3>Filters</h3>
      Has Results: {hasResults.toString()} <br />
      Is Limited: {isLimited.toString()}
      <Form.Group controlId="formGroupisLimited">
        <Form.Check
          type={"radio"}
          id={`true`}
          label={"Limited"}
          onClick={limitToggleHandler}
          value={true}
          name="isLimited"
        />
        <Form.Check
          type={"radio"}
          id={`false`}
          label={"Unlimited"}
          onClick={limitToggleHandler}
          value={false}
          name="isLimited"
        />
        <Form.Check
          type="radio"
          id="all"
          label="All Limits"
          onClick={limitToggleHandler}
          value="all"
          name="isLimited"
          defaultChecked={true}
        />
      </Form.Group>
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
  hasResults: state.filterButtons.hasResults,
});

// const mapDispatchToProps = (dispatch) => ({
//   limitToggleHandler
// });

export default connect(mapStateToProps)(FilterButtons);
