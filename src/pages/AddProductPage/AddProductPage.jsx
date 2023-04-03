import { useDispatch } from "react-redux";

import {fetchAddProduct} from 'redux/products/products-operations';


import AddProductForm from "modules/AddProductForm/AddProductForm";

const AddProductPage = () => {
    const dispatch = useDispatch();

  const onAddProduct = ({ title, author, year, category, rating, price, stock, photo, description }) => {
      const action = fetchAddProduct({
        title,
        author,
        year,
        category,
        rating,
        price,
        stock,
        photo,
        description,
      });
      dispatch(action);
    };

    return (
        <AddProductForm onSubmit={onAddProduct}/>
    )
}
export default AddProductPage;