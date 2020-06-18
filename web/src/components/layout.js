import React from "react";
import Header from "./header";
import Helmet from "react-helmet";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet>
      <script
        src="https://kit.fontawesome.com/1ee357d2bb.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <Header siteTitle={siteTitle} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <p>
            <a href="https://sanity-gatsby-blog-studio-dbt4phk4.netlify.app/">
              admin
            </a>
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
