import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import { productService } from "./productService";

export const getProducts = createAsyncThunk(
    'product/get-product',
    async (thunkAPI) => {
        try {
            return await productService.getProduct()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const addToWishList = createAsyncThunk(
    'product/wishlist',
    async (proId, thunkAPI) => {
        try {
            return await productService.addToWish(proId)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = {
    product: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.product = action.payload                
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })   
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.addToWishList = action.payload 
                state.message = "Product Added To WishList !"               
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })             
    }
})

export default productSlice.reducer