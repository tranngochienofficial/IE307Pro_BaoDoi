import axios from "axios";
// import { REACT_APP_API_URL } from "@env"
const REACT_APP_API_URL = 'http://10.0.2.2:3001/api'

export const getArticleByCategory = async (category, num) => {
    const res = await axios.get(`${REACT_APP_API_URL}/article/getByCategory/${category}?limit=${num}`)
    return res.data
}

export const getArticleById = async (id) => {
    const res = await axios.get(`${REACT_APP_API_URL}/article/getById/${id}`)
    return res.data
}