import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData)
    if (response.data) {
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data))
        }
        return response.data
    }
}

const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData)
    if (response.data) {

        return response.data
    }
}

const getUserWishList = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config)
    if (response.data) {
        return response.data
    }
}

const addToCart = async (cartData) => {
    try {
        const response = await axios.get(`${base_url}user/cart`, { cartData }, config
        );
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getCart = async () => {
    try {
        const response = await axios.get(`${base_url}user/cart`, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const removeProdFromCart = async (cartItemId) => {
    try {
        const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const updateProdFromCart = async (cartDetail) => {
    try {
        const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const authService = {
    register,
    login,
    getUserWishList,
    addToCart,
    getCart,
    removeProdFromCart,
    updateProdFromCart
}