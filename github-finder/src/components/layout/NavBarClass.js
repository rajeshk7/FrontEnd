import React, {Component} from 'react';
import PropTypes from 'prop-types'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Navbar extends Component {
    static defaultProps = {
      title: 'Github Finder'
      //Whatever we pass as props or assign will overwrite it
    };

    static propTypes = {
      title: PropTypes.string.isRequired
      //It will always expect the title to be of string type
    };

    render()  {
      return (
        <nav className = "nnavbar bg-primary" >
          <h1>
          <FontAwesomeIcon icon={faHome} /> {this.props.title}
          </h1>
        </nav>
      );
  }
}

export default Navbar;
