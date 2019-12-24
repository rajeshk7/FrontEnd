import React, {Component} from 'react';
import Navbar from './components/layout/NavBar'
import UserItem from './components/users/UserItem'
import './App.css';

class App extends Component {
  render()  {
    return (
      <div className = 'App' >
        <Navbar title='Github Finder'/>
        <UserItem />
      </div>
    );
  }
}

export default App;
