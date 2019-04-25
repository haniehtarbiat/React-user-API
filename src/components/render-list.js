import React from 'react';

const listStyle = {
  display: 'inline-block',
  width: '20em',
  listStyleType: 'none',
};

const List = props => {
  const { info } = props;
  if (!info) return <p>data is loading...</p>;
  if (!info.length) return <p>No repos, sorry</p>;
  return (
    <ul>
      {info.map(item => (
        <li style={listStyle} key={item.id}>
          <img alt="profile pic" src={item.avatar} />
          <p className="name">name:{item.name}</p>
          <p className="createdTime">create time:{item.createdAt}</p>
        </li>
      ))}
    </ul>
  );
};
export default List;
