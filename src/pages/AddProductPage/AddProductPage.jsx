import { useDispatch } from "react-redux";

import {fetchAddProduct} from 'redux/products/products-operations';


import AddProductForm from "modules/AddProductForm/AddProductForm";

const AddProductPage = () => {
    const dispatch = useDispatch();

  const onAddProduct = ({ name, author, year, category }) => {
      const action = fetchAddProduct({ name, author, year, category });
      dispatch(action);
    };

    return (
        <AddProductForm onSubmit={onAddProduct}/>
    )
}
export default AddProductPage;