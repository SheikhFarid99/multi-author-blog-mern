const initState = {
    like: 0,
    dislike: 0,
    like_status: '',
    dislike_status: '',
    like_dislike_error: '',
    like_dislike_message: ''
}
export const likeDislikeReducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === 'LIKE_DISLIKE_GET_SUCCESS') {
        return {
            ...state,
            like: payload.like,
            dislike: payload.dislike,
            dislike_status: payload.dislike_status,
            like_status: payload.like_status
        }
    }
    if (type === 'USER_LIKE_SUCCESS' || type === 'USER_DISLIKE_SUCCESS') {
        return {
            ...state,
            like_dislike_message: payload.successMessage
        }
    }
    if (type === 'USER_LIKE_DISLIKE_MESSAGE_CLEAR') {
        return {
            ...state,
            like_dislike_message: ''
        }
    }
    return state;
}