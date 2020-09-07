import React from 'react';
import './style.scss';

const Pagination = ({products}) => {
  console.log(products);
  return (
    <div className="pagination">
      <ul>
        <li className="false">Prev</li>
        <li className="false">1</li>
        <li className="false">2</li>
        <li className="active">3</li>
        <li className="false">4</li>
        <li className="false">5</li>
        <li className="false">6</li>
        <li className="false">7</li>
        <li className="false">8</li>
        <li className="false">9</li>
        <li className="false">Next</li>
      </ul>
    </div>
  )
};

export default Pagination
