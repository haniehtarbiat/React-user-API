import React from 'react';
import PropTypes from 'prop-types';

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
List.propTypes = {
  info:PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.string), PropTypes.number,null]),
};

List.defaultProps = {
  info: '',
};

export default List;
