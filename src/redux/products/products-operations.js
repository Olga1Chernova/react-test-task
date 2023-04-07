import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as api from "../../shared/services/products-api";

export const fetchAddProduct = createAsyncThunk(
    "products/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addProduct(data);
            if (result) {
                return result && Notify.success('Product was successfully created');
            }
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    });

export const fetchDeleteProduct = createAsyncThunk(
    "products/delete",
    async ( id, { rejectWithValue }) => {
        try {
            await api.deleteProduct(id);
            return id && Notify.success('Product was successfully deleted');
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)