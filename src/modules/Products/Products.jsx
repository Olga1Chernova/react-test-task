//import ProductList from "./ProductList/ProductList";
import ProductsSearch from "./ProductsSearch/ProductsSearch";

import styles from './Products.module.scss'

const Products = () => {
    return (
      <div className={styles.mainWrapper}>
            <ProductsSearch />
            {/* <ProductList/> */}
      </div>
    );
}
export default Products;