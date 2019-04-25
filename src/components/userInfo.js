import React from 'react';
import FetchinUserInfo from './fetching-component';

class Userinfo extends React.Component {
  render() {
    return (
      <div className="container">
        <FetchinUserInfo />
      </div>
    );
  }
}

export default Userinfo;
