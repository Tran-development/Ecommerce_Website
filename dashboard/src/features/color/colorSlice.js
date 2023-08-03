import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";

export const getColors = createAsyncThunk(
    "color/get-colors",
    async (thunkAPI) => {
        try {
            return await colorService.getColors()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = {
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const blogSlice = createSlice({
    name: "list-color",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getColors.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getColors.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.colors = action.payload
            // state.message = "success"
        })
        .addCase(getColors.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
    }
})


export default blogSlice.reducer