import axios from "axios";
import { base_url, config  } from "../../utils/axiosConfig";


const getProduct = async () => {
    const respone = await axios.get(`${base_url}product`)
    if (respone.data) {

        return respone.data
    }
}

const addToWish = async (prodId) => {
    try {
      const response = await axios.post(
        `${base_url}product/wishlist`,
        { prodId },
        config
      );  
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };


export const productService = {
    getProduct,
    addToWish
}