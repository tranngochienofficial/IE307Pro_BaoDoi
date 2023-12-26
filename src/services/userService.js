import axios from "axios";
import { REACT_APP_API_URL } from "@env"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${REACT_APP_API_URL}/user/sign-in`, data)
    return res.data
}