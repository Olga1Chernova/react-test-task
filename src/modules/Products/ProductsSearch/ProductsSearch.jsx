import PropTypes from 'prop-types';

import styles from './ProductSearch.module.scss';

const ProductsSearch = ({ handleChange, value }) => {

  return (
    <form className={styles.form}>
      <div className={styles.form__wrapper}>
        <label className={styles.form__label}>Products search query</label>
        <input
          className={styles.form__input}
          onChange={handleChange}
          placeholder="Enter a product name or a category"
          type="text"
          name="name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </div>
    </form>
  );
};

export default ProductsSearch;

ProductsSearch.propTypes = { 
  handleChange: PropTypes.func.isRequired,
};
