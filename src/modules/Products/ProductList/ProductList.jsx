import PropTypes from 'prop-types';

//import { nanoid } from 'nanoid';

import styles from './ProductList.module.scss';
import { useState } from 'react';

const ProductList = ({ products, deleteProduct }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState(null);

  const sortProducts = key => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const filterProducts = category => {
    setCategoryFilter(category ? category.toLowerCase() : null);
  };

  const filteredProducts = products.filter(
    product =>
      !categoryFilter || product.category.toLowerCase() === categoryFilter
  );

  const sortedProducts = sortKey
    ? filteredProducts.slice().sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return sortDirection === 'asc' ? -1 : 1;
        } else if (a[sortKey] > b[sortKey]) {
          return sortDirection === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      })
    : filteredProducts;
  console.log(sortedProducts)

  return (
    <div>
      <div className={styles.productList_wrapper}>
        <div className={styles.sort_column}>
          <p className={styles.filter}>Sort by:</p>
          <div className={styles.button_wrapper}>
            <button
              className={styles.filter_button}
              onClick={() => sortProducts('id')}
            >
              ID
            </button>
            <button
              onClick={() => sortProducts('price')}
              className={styles.filter_button}
            >
              Price
            </button>
          </div>
        </div>
        <div className={styles.filter_column}>
          <p className={styles.filter}>Filter by:</p>
          <div className={styles.button_wrapper}>
            <button
              onClick={() => filterProducts(null)}
              className={styles.filter_button}
            >
              All
            </button>
            <button
              onClick={() => filterProducts('Smartphones')}
              className={styles.filter_button}
            >
              Smartphones
            </button>
            <button
              onClick={() => filterProducts('Clothing')}
              className={styles.filter_button}
            >
              Clothing
            </button>
            <button
              onClick={() => filterProducts('Books')}
              className={styles.filter_button}
            >
              Books
            </button>
          </div>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  width="190px"
                />
              </td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <button
                  className={styles.delete}
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
ProductList.defaultProps = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
