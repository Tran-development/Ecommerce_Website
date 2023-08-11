import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProduct = async () => {
    const respone = await axios.get(`${base_url}product`)
    if (respone.data) {

        return respone.data
    }
}

const addToWish = async (prodId) => {
    const respone = await axios.put(`${base_url}product/wishlist`, { prodId }, config)
    if (respone.data) {

        return respone.data
    }
}

export const productService = {
    getProduct,
    addToWish
}