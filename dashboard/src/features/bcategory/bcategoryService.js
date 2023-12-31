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

const getbCategory = async (id) => {
    const response = await axios.get(`${base_url}blogcategory/${id}`, config);

    return response.data;
};

const updatebCategory = async (bcategory) => {
    const response = await axios.put(
        `${base_url}blogcategory/${bcategory.id}`,
        { title: bcategory.bcategoryData.title },
        config
    );

    return response.data;
};

const deletebCategory = async (id) => {
    const response = await axios.delete(`${base_url}blogcategory/${id}`, config);

    return response.data;
};

const bCategoryService = {
    getbCategories,
    createbCategory,
    getbCategory,
    updatebCategory,
    deletebCategory
}

export default bCategoryService