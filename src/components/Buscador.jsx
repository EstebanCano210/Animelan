import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="d-flex justify-content-center mt-4">
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>&laquo; anterior</button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(index)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Siguiente &raquo;</button>
        </li>
      </ul>
    </nav>
  </div>
);

export default Pagination