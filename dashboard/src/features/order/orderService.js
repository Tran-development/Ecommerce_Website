import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null

export const config = {
    headers: {
        'Authorization': `Bearer ${getTokenFromLocal.token}`,
        'Accept'       : 'application/json'
       }
}

const getOrders = async () => {
    const respone = await axios.get(`${base_url}user/get-allorder`, config)

    return respone.data
}

const orderService = {
    getOrders
}

export default orderService