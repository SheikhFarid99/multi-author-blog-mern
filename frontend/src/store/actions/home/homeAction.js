import axios from 'axios'
export const get_all_article = (currentPage, searchValue) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/home-article-get?currentPage=${currentPage}&&searchValue=${searchValue}`, { withCredentials: true });
        dispatch({
            type: "HOME_ARTICLE_GET_SUCCESS",
            payload: {
                articles: response.data.articles,
                parPage: response.data.parPage,
                countArticle: response.data.countArticle,
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const get_home_tag_category = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/rest-api/home/get-tag-category', { withCredentials: true })
        dispatch({
            type: "HOME_CATEGORY_TAG_GET_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_old_recent_acticle = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/rest-api/article/recent-old-get', { withCredentials: true })
        dispatch({
            type: "GET_OLD_REACT_ATICLE_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_category_article = (categorySlug, currentPage) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/category-article-get?categorySlug=${categorySlug}&&currentPage=${currentPage}`, { withCredentials: true })
        dispatch({
            type: 'CATEGORY_ARTICLE_GET_SUCCESS',
            payload: {
                categoryArticle: response.data.categoryArticle,
                countCateArticle: response.data.countCateArticle,
                parPage: response.data.parPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_tag_article = (tagSlug, currentPage) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/tag-article-get?tagSlug=${tagSlug}&&currentPage=${currentPage}`, { withCredentials: true })
        dispatch({
            type: 'TAG_ARTICLE_GET_SUCCESS',
            payload: {
                tagArticle: response.data.tagArticle,
                countTagArticle: response.data.countTagArticle,
                parPage: response.data.parPage
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const userView = () => async () => {
    try {
        await axios.get(`http://localhost:5000/rest-api/user-view`, { withCredentials: true })
    } catch (error) {

    }
}