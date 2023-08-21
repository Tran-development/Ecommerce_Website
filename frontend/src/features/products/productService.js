import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProduct = async (data) => {
  // console.log(data);
  const respone = await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}&&`: ""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`: ""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`: ""}${data?.tag?`tags=${data?.tag}&&`: ""}${data?.sort?`sort=${data?.sort}&&`: ""}`)
  if (respone.data) {

    return respone.data
  }
}

const getAProduct = async (id) => {
  const respone = await axios.get(`${base_url}product/${id}`)
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

const rateProduct = async (data) => {
  try {
    const response = await axios.put(
      `${base_url}product/rating`,
      data,
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
  addToWish,
  getAProduct,
  rateProduct
}