import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


const getOrders = async () => {
    const respone = await axios.get(`${base_url}user/getallorders`, config)

    return respone.data
}

const getOrder = async (id) => {
    const response = await axios.post(
        `${base_url}user/getorderbyuser/${id}`,
        "",
        config
    );

    return response.data
}

const getMonthlyOrders = async () => {
    const response = await axios.get(
        `${base_url}user/getmonthorderincome`,
        config
    )
    return response.data
}

const getYearOrder = async () => {
    const response = await axios.get(
        `${base_url}user/getyearordercount`,
        config
    )
    return response.data
}


const orderService = {
    getOrders,
    getOrder,
    getMonthlyOrders,
    getYearOrder
}

export default orderService