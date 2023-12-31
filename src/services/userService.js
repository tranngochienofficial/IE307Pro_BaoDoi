import axios from "axios";
// import { REACT_APP_API_URL } from "@env"

const REACT_APP_API_URL = 'http://10.0.2.2:3001/api'

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

export const updateUser = async (id, updateData) => {
    const res = await axios.put(`${REACT_APP_API_URL}/user/update/${id}`, updateData)
    return res.data
}