// import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './ProductList.module.scss';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: '$10.00',
      stock: 5,
      category: 'Category A',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$20.00',
      stock: 10,
      category: 'Category B',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30.00',
      stock: 2,
      category: 'Category C',
    },
  ]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;

// ProductList.defaultProps = {
//   //items: [],
// };

// ProductList.propTypes = {
  
// };
