import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

  state = {
    text: ''
  };

  onChange = (e) => { //takes event as paramater
    this.setState({ [e.target.name]: e.target.value });
  };  //It will capture whatever we type in the search box
  //Here we only have one field, we can have email and what not
  //So here we have used e.target.name to store the values in the respective fields

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  //If we use arrow functions we don't have to bind things explicitely
  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '')  {
      this.props.setAlert('Please enter something', 'light');
    }
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' })
  }

  render()  {
    const {clearUser, showClear} = this.props;
    return  (
        <div>
          <form onSubmit={this.onSubmit} className="form">
            <input type="text" name="text" placeholder= 'Search users ' value = {this.state.text} onChange={this.onChange}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
          </form>
          {showClear && (
            <button
              className="btn btn-light btn-block"
              onClick={clearUser}> Clear
            </button>)
          }
        </div>
    )
  }
}

export default Search
