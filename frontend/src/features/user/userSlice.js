import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from 'react-toastify'

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getUserWishList = createAsyncThunk(
    "user/wishlist",
    async (thunkAPI) => {
        try {
            return await authService.getUserWishList()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const addToCart = createAsyncThunk(
    "user/cart/add",
    async (cartData, thunkAPI) => {
        try {
            return await authService.addToCart(cartData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getUserCart = createAsyncThunk(
    "user/cart/get",
    async (thunkAPI) => {
        try {
            return await authService.getCart()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteCartProduct = createAsyncThunk(
    "user/cart/product/delete",
    async (id, thunkAPI) => {
        try {
            return await authService.removeProdFromCart(id)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateCartProduct = createAsyncThunk(
    "user/cart/product/update",
    async (cartDetail, thunkAPI) => {
        try {
            return await authService.updateProdFromCart(cartDetail)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createAnOrder = createAsyncThunk(
    "user/cart/create-order",
    async (orderDetail, thunkAPI) => {
        try {
            return await authService.createOrder(orderDetail)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getOrders = createAsyncThunk(
    "user/order/get",
    async (thunkAPI) => {
        try {
            return await authService.getUserOrders()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateProfile = createAsyncThunk(
    "user/profile/update",
    async (data, thunkAPI) => {
        try {
            return await authService.updateUser(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const getCustomerFromLocal = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null



const initialState = {
    user: getCustomerFromLocal,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.createdUser = action.payload
                if (state.isSuccess === true) {
                    toast.info("User Created Successfully !")
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.user = action.payload
                if (state.isSuccess === true) {
                    localStorage.setItem("token", action.payload.token)
                    toast.info("User Login Successfully !")
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })
            .addCase(getUserWishList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserWishList.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.wishlist = action.payload                
            })
            .addCase(getUserWishList.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.cartProd = action.payload   
                if (state.isSuccess === true) {
                    toast.success("Product Added To Cart")
                }             
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(getUserCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserCart.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.cartProducts = action.payload                           
            })
            .addCase(getUserCart.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(deleteCartProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCartProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.deletedCartProd = action.payload     
                if (state.isSuccess) {
                    toast.success("Product Deleted Successfully")
                }                      
            })
            .addCase(deleteCartProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isSuccess) {
                    toast.error("Something Went Wrong!")
                } 
            })
            .addCase(updateCartProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCartProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.updatedCartProd = action.payload     
                if (state.isSuccess) {
                    toast.success("Product Updated Successfully")
                }                      
            })
            .addCase(updateCartProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isSuccess) {
                    toast.error("Something Went Wrong!")
                } 
            })
            .addCase(createAnOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAnOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.orderedProduct = action.payload     
                if (state.isSuccess) {
                    toast.success("Ordered Successfully !")
                }                      
            })
            .addCase(createAnOrder.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isSuccess) {
                    toast.error("Something Went Wrong!")
                } 
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.getorders = action.payload                
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.updatedUser = action.payload     
                if (state.isSuccess) {
                    toast.success("Profile Updated Successfully !")
                }                      
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isSuccess) {
                    toast.error("Something Went Wrong!")
                } 
            })
    }
})

export default authSlice.reducer
