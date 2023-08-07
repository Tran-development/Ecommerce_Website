import axios from "axios";
import { base_url } from '../../utils/base_url'
import { config } from "../../utils/axiosconfig";


const getbCategories = async() => {
    const respone = await axios.get(`${base_url}blogcategory`)
    
    return respone.data
}

const createbCategory = async (bcate) => {
    const response = await axios.post(`${base_url}blogcategory/`, bcate, config);

    return response.data;
};

const bCategoryService = {
    getbCategories,
    createbCategory
}

export default bCategoryService