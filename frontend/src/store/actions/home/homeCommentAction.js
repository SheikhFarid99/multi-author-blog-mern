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