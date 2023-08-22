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


export const getOrder = createAsyncThunk(
    "order/get-order",
    async (id, thunkAPI) => {
        try {
            return await orderService.getAOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getMonthlyData = createAsyncThunk(
    "order/month-data",
    async (thunkAPI) => {
        try {
            return await orderService.getMonthlyOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getYearlyData = createAsyncThunk(
    "order/year-data",
    async (thunkAPI) => {
        try {
            return await orderService.getYearOrder();
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
        .addCase(getOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.singleorder = action.payload
            state.message = "success"
        })
        .addCase(getOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(getMonthlyData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getMonthlyData.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.monthlydata = action.payload
            state.message = "success"

        })
        .addCase(getMonthlyData.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(getYearlyData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getYearlyData.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.yearlydata = action.payload
            state.message = "success"

        })
        .addCase(getYearlyData.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default orderSlice.reducer