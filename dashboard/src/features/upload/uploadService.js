import axios from "axios";
import { base_url } from '../../utils/base_url'
import { config } from "../../utils/axiosconfig";

const uploadImg = async(date) => {
    const respone = await axios.get(`${base_url}`, data, config)

    return respone.data
}

const uploadService = {
    uploadImg
}

export default uploadService