import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bcategoryService";

export const getbCategories = createAsyncThunk(
    "blogcategory/get-blogcategories",
    async (thunkAPI) => {
        try {
            return await bCategoryService.getbCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
) 

const initialState = {
    bCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}


export const bCategorySlice = createSlice({
    name: "blog-category-list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getbCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getbCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.bCategories = action.payload
            // state.message = "success"
        })
        .addCase(getbCategories.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default bCategorySlice.reducer