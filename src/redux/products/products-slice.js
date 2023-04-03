import { createSlice } from '@reduxjs/toolkit';
import { fetchAddProduct, fetchDeleteProduct } from './products-operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddProduct.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAddProduct.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddProduct.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })


      .addCase(fetchDeleteProduct.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchDeleteProduct.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteProduct.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;