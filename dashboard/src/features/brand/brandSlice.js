import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getBrands = createAsyncThunk(
    "brand/get-brands",
    async (thunkAPI) => {
        try {
            return await brandService.getBrands();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createBrand = createAsyncThunk(
    "brand/create-brand",
    async (brandData, thunkAPI) => {
        try {
            return await brandService.createBrand(brandData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    brands: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const brandSlice = createSlice({
    name: "list-brand",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBrands.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getBrands.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.brands = action.payload
        })
        .addCase(getBrands.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(createBrand.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createBrand.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.createdBrand = action.payload
        })
        .addCase(createBrand.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default brandSlice.reducer