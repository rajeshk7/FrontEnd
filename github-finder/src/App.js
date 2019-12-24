import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/NavBar';
import User from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import About from './components/pages/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Alert from './components/layout/Alert'
import './App.css';

let global_res = [];  //We'll store the initial git profiles fetched here

class App extends Component {
  state = {
    users: [],
    lodaing: false,
    flag: false,
    alert: null
  }

  async componentDidMount() {
    //If we need to store global variables in our local environment, we need to use process.env
    this.setState({ loading: true });
    const res =  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    global_res = res;
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res =  await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false, flag: true });
  }

  clearUser = () => this.setState({users:global_res.data, loading: false, flag: false});

  setAlert = (msg, type) => {
    this.setState({alert: {msg, type} });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render()  {
    const {users, loading, flag} = this.state;
    return (
      <Router>
      <div className = 'App' >
          <Navbar title='Github Finder'/>
            <div className="container">
              <Alert alert={this.state.alert} />
              <Switch> 
                <Route exact path='/' render={props => (
                  <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUser={this.clearUser}
                    showClear={users.length && flag > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <User
                    loading={loading}
                    users={users}
                  />
                </Fragment>
                )} />
                <Route exact path='/about' component={About}/>
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

// It works with promises, so then
// componentDidMount() {
//   axios.get('https://api.github.com/users').then(res => console.log(res.data));
// }
//Switch is used so that once a matching route is found, it stops searching for more 
// to have more specific matching we use exact