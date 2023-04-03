import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/products-api";

export const fetchAddProduct = createAsyncThunk(
    "products/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addProduct(data);
            return result;
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
            return id;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)