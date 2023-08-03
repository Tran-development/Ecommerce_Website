import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/product/productSlice'
import brandReducer from '../features/brand/brandSlice'
import categoryReducer from '../features/category/categorySlice'
import blogReducer from "../features/blog/blogSlice"
import bCategoryReducer from "../features/bcategory/bcategorySlice"
import colorReducer from "../features/color/colorSlice"
import enquiryReducer from "../features/enquiry/enquirySlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        category: categoryReducer,
        blog: blogReducer,
        bCategory: bCategoryReducer,
        color: colorReducer,
        enquiry: enquiryReducer
    },
})