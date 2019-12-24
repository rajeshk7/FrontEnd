import React, { Component } from 'react'

class UserItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     //We maintain state here for future use
  //     id: 'id',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo'
  //   }
  // }

    state = {
        //We can use it without constructor too
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      }

    render() {
        // const {login, avatar_url, html_url} = this.state;
        const {login, avatar_url, html_url} = this.props.user;
        //Ths first one uses data from state and next one uses from props

        return (
          <div className="card text-center">
              <img
                src={avatar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
                />
              <h3>{login}</h3>
              <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
              </div>
          </div>

        );
    }
}

export default UserItem
