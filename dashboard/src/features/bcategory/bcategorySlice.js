import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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


export const createbCategory = createAsyncThunk(
    "blogcategory/create-blogcategory",
    async (bcateData, thunkAPI) => {
        try {
            return await bCategoryService.createbCategory(bcateData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const getABCategory = createAsyncThunk(
    "blogcategory/get-blogcategory",
    async (id, thunkAPI) => {
        try {
            return await bCategoryService.getbCategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateABCategory = createAsyncThunk(
    "blogcategory/update-blogcategory",
    async (bcategory, thunkAPI) => {
        try {
            return await bCategoryService.updatebCategory(bcategory);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteABCategory = createAsyncThunk(
    "blogcategory/delete-blogcategory",
    async (id, thunkAPI) => {
        try {
            return await bCategoryService.deletebCategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all")

const initialState = {
    bCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}


export const bCategorySlice = createSlice({
    name: "blogcategory-list",
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
            })
            .addCase(getbCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(createbCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createbCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.createdbCate = action.payload
            })
            .addCase(createbCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(getABCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getABCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.bcategoryName = action.payload.title
            })
            .addCase(getABCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(updateABCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateABCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.updatedbCategory = action.payload
            })
            .addCase(updateABCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(deleteABCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteABCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.deletedbCategory = action.payload
            })
            .addCase(deleteABCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(resetState, () => initialState)
    }
})


export default bCategorySlice.reducer