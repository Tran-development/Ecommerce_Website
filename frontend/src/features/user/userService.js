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

const addToCart = async (data) => {
    try {
        const response = await axios.get(`${base_url}user/cart`, { data }, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getCart = async (data) => {
    console.log(data);
    try {
        const response = await axios.get(`${base_url}user/cart`, data);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const removeProdFromCart = async (data) => {
    try {
        const response = await axios.delete(`${base_url}user/delete-product-cart/${data.id}`, data.config2);
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

const createOrder = async (orderDetail) => {
    try {
        const response = await axios.post(`${base_url}user/cart/create-order`, orderDetail, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getUserOrders = async () => {
    try {
        const response = await axios.get(`${base_url}user/getmyorders`, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}; 

const updateUser = async (data) => {
    try {
        const response = await axios.put(`${base_url}user/edit-user`, data, config);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const forgotPassWord = async (data) => {
    try {
        const response = await axios.post(`${base_url}user/forgot-password-token`, data);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
} 

const resetPassword = async (data) => {
    try {
        const response = await axios.put(`${base_url}user/reset-password/:${data.token}`, {password: data?.password});
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
} 

export const authService = {
    register,
    login,
    getUserWishList,
    addToCart,
    getCart,
    removeProdFromCart,
    updateProdFromCart,
    createOrder,
    getUserOrders,
    updateUser,
    forgotPassWord,
    resetPassword
}