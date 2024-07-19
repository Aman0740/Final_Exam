import React from 'react';

const Pagination = ({ totalItems, currentPage, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          data-testid="page-btn"
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;