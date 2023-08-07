import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


const getOrders = async () => {
    const respone = await axios.get(`${base_url}user/get-allorder`, config)

    return respone.data
}

const orderService = {
    getOrders
}

export default orderService