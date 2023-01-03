const indexState = {
    dashboard_data: {},
    articleCount: 0,
    categoryCount: 0,
    tagCount: 0,
    subAdminCount: 0,
    notifications: []

}
export const dashboardReducer = (state = indexState, action) => {
    const { type, payload } = action;
    if (type === 'DASHBOARD_INDEX_DATA_GET') {
        return {
            ...state,
            dashboard_data: payload.userView,
            articleCount: payload.articleCount,
            categoryCount: payload.categoryCount,
            tagCount: payload.tagCount,
            subAdminCount: payload.subAdminCount
        }
    }
    if (type === 'NOTIFICATION_GET_SUCCESS') {
        return {
            ...state,
            notifications: payload
        }
    }
    return state;
}