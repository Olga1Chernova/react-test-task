import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductSearch.module.scss';
import initialState from './initialState';

const ProductsSearch = () => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setState({name: value});
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name });
  //   setState({ ...initialState });
  // };

  const { name } = state;

  return (
    <form className={styles.form}>
      <div className={styles.form__wrapper}>
        <label className={styles.form__label}>Product Name</label>
        <input
          className={styles.form__input}
          onChange={handleChange}
          placeholder="Enter a product name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
        <button className={styles.form__button} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default ProductsSearch;

ProductsSearch.propTypes = {
 // onSubmit: PropTypes.func.isRequired,
};
