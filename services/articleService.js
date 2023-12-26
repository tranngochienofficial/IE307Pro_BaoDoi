import axios from "axios";

export const getArticleByCategory = async (category) => {
    const res = await axios.get(`http://10.0.2.2:3001/api/article/getByCategory/${category}`)
    return res.data
}