import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({title}) => {
    return (
      <nav className = "nnavbar bg-primary" >
        <h1>
        <FontAwesomeIcon icon={faHome} /> {title}
        </h1>
        <ul>
          <li>
            <Link to="/" > Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
    );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
