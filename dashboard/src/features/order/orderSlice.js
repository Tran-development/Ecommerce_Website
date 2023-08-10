import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

export const getOrders = createAsyncThunk(
    "enquiry/get-orders",
    async (thunkAPI) => {
        try {
            return await orderService.getOrders()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const getOrderByUser = createAsyncThunk(
    "order/get-order",
    async (id, thunkAPI) => {
        try {
            return await orderService.getOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

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
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(getOrderByUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getOrderByUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.orderbyuser = action.payload
        })
        .addCase(getOrderByUser.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default orderSlice.reducer