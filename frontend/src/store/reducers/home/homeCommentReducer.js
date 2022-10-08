const initState = {
    loader: false,
    comment: [],
    comment_message: '',
    comment_error: ''
}
export const homeCommentReducer = (state = initState, action) => {
    const { payload, type } = action;
    if (type === 'COMMENT_LOADER_TRUE') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'COMMENT_SUCCESS' || type === 'REPLY_SUCCESS') {
        return {
            ...state,
            comment_message: payload.successMessage,
            loader: false,
            comment_error: ''
        }
    }
    if (type === 'COMMENT_MESSAGE_CLEAR') {
        return {
            ...state,
            comment_message: '',
        }
    }
    if (type === 'COMMENT_GET_SUCCESS') {
        return {
            ...state,
            comment: payload.comment
        }
    }
    if (type === 'COMMENT_DELATE_SUCCESS' || type === 'COMMENT_REPLY_DELATE_SUCCESS') {
        return {
            ...state,
            comment_message: payload.successMessage
        }
    }
    return state
}