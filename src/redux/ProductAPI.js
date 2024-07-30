import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance  from "../helpers/AxiosInstance";


export const getProduct = createAsyncThunk(
    "/products/getAllProducts",
    async (data,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance().get(`/products/?page=${data.page}&limit=${data.limit}`);
            const result = response.data;
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)