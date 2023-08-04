import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

export const getOrders = createAsyncThunk(
    "enquiry/get-enquiries",
    async (thunkAPI) => {
        try {
            return await orderService.getOrders()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

// const orders = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))
//     : null

 
const initialState = {
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.orders = action.payload
            // state.message = "success"
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default orderSlice.reducer