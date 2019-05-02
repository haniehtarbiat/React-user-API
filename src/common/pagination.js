import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const listStyle = {
  display: 'inline-block',
  width: '1em',
  listStyleType: 'none',
};

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            style={listStyle}
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <Link className="page-link" onClick={() => onPageChange(page)} to={`/?page=${page}`} >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
Pagination.propTypes= {
  itemsCount: PropTypes.number.isRequired,
   pageSize: PropTypes.number.isRequired,
 currentPage:PropTypes.string.isRequired,
 onPageChange:PropTypes.func.isRequired
}

export default Pagination;
