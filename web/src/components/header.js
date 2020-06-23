import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ siteTitle }) => (
  <Navbar className="transparent" expand="lg">
    <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/" className="nav-link">
          Purple Howrses
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
