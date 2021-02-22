import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <nav className="nav-wrapper light-blue darken-2">
    <a className="brand-logo center" href="#!">
      {title}
    </a>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
