const categoryState = {
    loader : false,
    categoryError : '',
    categorySuccessMessage : '',
    allCategory : [],
    parPage : 0,
    categoryCount : 0,
    editCategory : '',
    editRequest : false
}

export const dashCategoryReducer = (state=categoryState,action)=>{
    const {type,payload} = action;

    if(type === 'SET_LOADER'){
        return {
            ...state,
            loader : true
        }
    }
    if(type === 'CATEGORY_ADD_SUCCESS' || type === 'CATEGORY_DELETE_SUCCESS' || type === 'CATEGORY_UPDATE_SUCCESS'){
        return {
            ...state,
            loader : false,
            categorySuccessMessage : payload.successMessage,
            categoryError : ''
        }
    }
    if(type === 'DASHBORAD_CATEGORY_GET_SUCCESS'){
        return {
            ...state,
            allCategory : payload.allCategory,
            categoryCount : payload.categoryCount,
            parPage : payload.parPage
        }
    }
    if(type === 'EDIT_CATEGORY_GET_SUCCESS'){
        return {
            ...state,
            editCategory :payload.editCategory,
        }
    }
    if(type === 'EDIT_REQUEST_SET'){
        return {
            ...state,
            editRequest :true,
        }
    }
    if(type === 'CATE_SUCCESS_MESSAGE_CLEAR'){
        return {
            ...state,
            categorySuccessMessage : '',
        }
    }
    if(type === 'EDIT_REQUEST_CLEAR'){
        return {
            ...state,
            editRequest : false,
        }
    }
    if(type === 'CATE_ERROR_MESSAGE_CLEAR'){
        return {
            ...state,
            categoryError : '',
        }
    }
    if(type === 'CATEGORY_ADD_FAIL' || type === 'CATEGORY_UPDATE_FAIL'){
        return {
            ...state,
            loader : false,
            categoryError : payload.error,
            categorySuccessMessage : ''
        }
    }
    return state;
}