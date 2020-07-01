import React from "react";
import { connect } from "react-redux";

import { toggleDarkMode } from "../state/app";

const IndexPage = ({ isDarkMode, dispatch }) => (
  <div>
    <h1>Hi Redux</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button
      style={isDarkMode ? { background: "black", color: "white" } : null}
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
    >
      Dark mode {isDarkMode ? "on" : "off"}
    </button>
  </div>
);

export default connect(
  (state) => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage);
