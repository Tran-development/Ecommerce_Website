import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

export const getCategories = createAsyncThunk(
    "productCategory/get-categories",
    async (thunkAPI) => {
        try {
            return await categoryService.getCategories()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createCategory = createAsyncThunk(
    "productCategory/create-category",
    async (categoryData, thunkAPI) => {
        try {
            return await categoryService.createCategory(categoryData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const categorySlice = createSlice({
    name: "list-category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.categories = action.payload
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(createCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.createdCategory = action.payload
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default categorySlice.reducer