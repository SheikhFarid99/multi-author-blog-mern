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
    if (type === 'COMMENT_SUCCESS') {
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
    return state
}