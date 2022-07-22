import axios from 'axios'
export const get_article_details = (articleSlug) => async (dispath) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/home/article-details/${articleSlug}`, { withCredentials: true })
        dispath({
            type: 'READ_ARTICLE_GET_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error.response)
    }
}

export const like_dislike_get = (articleSlug) => async (dispath) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/home/like-dislike-get/${articleSlug}`, { withCredentials: true })
        console.log(response)
    } catch (error) {
        console.log(error.response)
    }
}