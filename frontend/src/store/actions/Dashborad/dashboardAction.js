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