import axios from "axios";
import { REACT_APP_API_URL } from "@env"

export const getArticleByCategory = async (category) => {
    const res = await axios.get(`${REACT_APP_API_URL}/article/getByCategory/${category}`)
    return res.data
}