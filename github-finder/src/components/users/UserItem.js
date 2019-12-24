import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
  //We straight away specify what we need in the props section only
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
