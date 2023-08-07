import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getBlogs = createAsyncThunk(
    "blog/get-blogs",
    async (thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createBlog = createAsyncThunk(
    "blog/create-blogs",
    async (BlogData, thunkAPI) => {
        try {
            return await blogService.createBlog(BlogData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const blogSlice = createSlice({
    name: "blog-list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBlogs.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getBlogs.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.blogs = action.payload
        })
        .addCase(getBlogs.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(createBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createBlog.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.createdBlog = action.payload
        })
        .addCase(createBlog.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default blogSlice.reducer