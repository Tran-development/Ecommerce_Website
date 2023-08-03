import axios from "axios";
import { base_url } from '../../utils/base_url'

const getbCategories = async() => {
    const respone = await axios.get(`${base_url}blogcategory`)
    
    return respone.data
}

const bCategoryService = {
    getbCategories,
}

export default bCategoryService