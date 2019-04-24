import React, { Component } from 'react';
class FetchinUserInfo extends Component {
  constructor() {
    super();
    this.state = { info: [], isLoading: false };
    this.fetching = this.fetching.bind(this);
  }

  componentDidMount() {
    this.fetching();
  }

  fetching() {
    fetch('http://5cbc116dfa84180014bdb224.mockapi.io/users?page=1&limit=12')
      .then(results => results.json())
      .then(data => {
        const info = data;
        this.setState({ info: info, isLoading: true });
      });
  }

  render() {
    const listStyle = {
      display: 'inline-block',
      width: '20em',
      listStyleType: 'none',
    };
    const { info, isLoading } = this.state;
    if (isLoading === false) {
      return <p>page is loading...</p>;
    }
    return (
      <ul>
        {info.map(item => (
          <li style={listStyle} key={item.id}>
            <img alt="profile pic" src={item.avatar} />
            <p className="name">name: {item.name}</p>
            <p className="createdTime">create time: {item.createdAt}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default FetchinUserInfo;
