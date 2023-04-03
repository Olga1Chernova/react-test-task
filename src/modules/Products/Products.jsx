import { useSelector, useDispatch } from 'react-redux';

import { getFilteredProducts } from 'redux/products/products-selectors';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { fetchDeleteProduct } from 'redux/products/products-operations';

import ProductList from './ProductList/ProductList';
import ProductsSearch from './ProductsSearch/ProductsSearch';

import styles from './Products.module.scss';

const Products = () => {

  const filter = useSelector(getFilter);
  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const dispatch = useDispatch();
  const filteredProducts = useSelector(getFilteredProducts);

  const onDeleteProduct = id => {
    const action = fetchDeleteProduct(id);
    dispatch(action);
  }


  return (
    <div className={styles.mainWrapper}>
      <ProductsSearch value={filter} handleChange={handleFilter} />
      <ProductList deleteProduct={onDeleteProduct} products={filteredProducts} />
    </div>
  );
};
export default Products;
