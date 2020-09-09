import React, { useEffect } from 'react';
import { getProducts } from '../../action';
import { useSelector, useDispatch } from 'react-redux';
import ShelfHeader from './shelf-header';
import Product from './products';
import Filter from './filter/filter';
import './style.scss';
import Pagination from '../pagination';

const Shelf = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage, setProductsPerPage] = React.useState(8);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productList = useSelector(state => state.products.data);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPages = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <ShelfHeader productsLength={productList.length} productList={productList}/>
      <div children="shelf-container-filter">
        <Filter/>
        <div className="shelf-container">
          {currentPages.map(product => (
            <Product product={product} key={product.id}/>
          ))}
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={productList.length}
            paginate={paginate}
            products={productList}
          />
        </div>
      </div>
    </React.Fragment>
  )
};

export default Shelf;