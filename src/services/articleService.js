import axios from "axios";

export const getArticleByCategory = async (category) => {
    const res = await axios.get(`https://baodoi-be-f5973c632bd1.herokuapp.com/api/article/getByCategory/${category}`)
    return res.data
}