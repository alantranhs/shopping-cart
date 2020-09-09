import React from 'react';
import './style.scss';

const Pagination = (props) => {
  const { productsPerPage, currentPage, paginate, totalProducts } = props;

  let pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <ul>
        {currentPage === 1 ? '' : (
          <li className="false"  onClick={() => paginate(currentPage-1)}>Prev</li>
        )}
        {pageNumbers.map((item, index) => (
           <li className={currentPage === item+1 ? 'true active' : 'false'} key={index}  onClick={() => paginate(item+1)}>{item+1}</li>
         ))
        }
        {currentPage === pageNumbers.pop() + 1 ? '' : (
          <li className="false"  onClick={() => paginate(currentPage+1)}>Next</li>
        )}
      </ul>
    </div>
  )
};
export default Pagination
