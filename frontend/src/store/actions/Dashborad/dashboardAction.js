import axios from 'axios';
export const dashboard_index_data_get = () => async (dispatch) => {
    try {
        const { data: { userView, articleCount, categoryCount, tagCount, subAdminCount } } = await axios.get('http://localhost:5000/rest-api/get-dashboard-index-data', { withCredentials: true });
        dispatch({
            type: 'DASHBOARD_INDEX_DATA_GET',
            payload: {
                userView,
                articleCount,
                categoryCount,
                tagCount,
                subAdminCount
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const get_notification = (id) => async (dispatch) => {
    try {
        const { data: { notification } } = await axios.get(`http://localhost:5000/rest-api/get-notification/${id}`, { withCredentials: true });
        dispatch({
            type: 'NOTIFICATION_GET_SUCCESS',
            payload: notification
        })
    } catch (error) {

    }
}
export const seen_notification = (id) => async (dispatch) => {
    try {
        await axios.get(`http://localhost:5000/rest-api/seen-notification/${id}`, { withCredentials: true });
    } catch (error) {
        console.log(error.response.data)
    }
}

export const delete_notification = (id) => async (dispatch) => {
    try {
        const { data: { message } } = await axios.get(`http://localhost:5000/rest-api/delete-notification/${id}`, { withCredentials: true });
        console.log(message)
        dispatch({
            type: 'NOTIFICATION_DELETE_SUCCESS',
            payload: {
                message
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
}