import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ( props ) => {
  const pages = props.pages > 10 ? 10 : props.pages;
  const pageValues = Array.from( Array( pages ) ).map( ( ele, index ) => index );
  return (
    <ul className="pagination m-auto">
      {
        pageValues.map( ele => (
          <li key={ele} className="page-item">
            <a className="page-link" >{ele + 1} </a>
          </li>
        ) )}
    </ul > )
}

Pagination.propTypes = {
  pages: PropTypes.number
}


export default Pagination;