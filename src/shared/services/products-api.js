import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const getAllProducts = async() => {
    const { data } = await instance.get("/products");
    return data;
}

export const addProduct = async (data) => {
    const { data: result } = await instance.post("/products/add", data);
    return result;
}