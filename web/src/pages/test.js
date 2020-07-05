import React from "react";
import { connect } from "react-redux";

import { toggleDarkMode } from "../state/app";

const IndexPage = ({ isDarkMode, dispatch }) => (
  <div>
    <h1>Hi Redux</h1>
    {console.log(process.env.NODE_ENV)}
  </div>
);

export default connect(
  (state) => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage);
