import axios from 'axios'
export const user_comment = (data) => async (dispatch) => {
    dispatch({ type: 'COMMENT_LOADER_TRUE' })
    try {
        const response = await axios.post('http://localhost:5000/rest-api/home/user-comment', data, { withCredentials: true })
        dispatch({
            type: 'COMMENT_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error.response)
    }
}
export const get_comment = (articleId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/get-home-comment/${articleId}`)
        dispatch({
            type: 'COMMENT_GET_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const reply_comment = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:5000/rest-api/comment-reply`, data, { withCredentials: true })
        dispatch({
            type: 'REPLY_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const comment_delete = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:5000/rest-api/comment-home-delete`, data, { withCredentials: true })
        dispatch({
            type: 'COMMENT_DELATE_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const comment_reply_delete = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:5000/rest-api/comment-reply-home-delete`, data, { withCredentials: true })
        dispatch({
            type: 'COMMENT_REPLY_DELATE_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}