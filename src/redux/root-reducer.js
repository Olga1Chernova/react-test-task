import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./products/products-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    products: productsReducer,
    filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;