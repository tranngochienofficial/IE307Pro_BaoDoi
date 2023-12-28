import axios from "axios";
import { REACT_APP_API_URL } from "@env"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${REACT_APP_API_URL}/user/sign-in`, data)
    return res.data
}

export const getDetailUser = async (id,access_token) => {
    const res = await axios.get(`${REACT_APP_API_URL}/user/get-detail-user/${id}`,{
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const signUpUser = async (data) => {
    const res = await axios.post(`${REACT_APP_API_URL}/user/create`, data)
    return res.data
}
