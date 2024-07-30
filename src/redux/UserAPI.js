import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            // http://192.168.1.213:9999/
            const response = await AxiosInstance().post(`/users/login`, data);
            console.log('>>>>> login response: ', response);
            const result = response.data;
            return result;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const register = createAsyncThunk(
    "user/register",
    async(data,{rejectWithValue})=>{
        try {
            console.log(data)
            // http://192.168.1.213:9999/
            const response = await AxiosInstance().post(`users/register`,data);
           if(response.status === true) return response
            return null;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

