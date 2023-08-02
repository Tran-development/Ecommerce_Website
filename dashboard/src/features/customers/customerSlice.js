import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

export const getUsers = createAsyncThunk(
    "auth/login",
    async (thunkAPI) => {
        try {
            return await customerService.getUsers();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const customerSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.customers = action.payload
            state.message = "success"
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})