import axios from 'axios';

export const add_tag = (data)=>async(dispatch)=>{
    dispatch({type : 'SET_LOADER'});
    try {
        const response = await axios.post('http://localhost:5000/rest-api/add-tag',data,{withCredentials:true});
        dispatch({
            type : 'TAG_ADD_SUCCESS',
            payload : {
                successMessage : response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type : 'TAG_ADD_FAIL',
            payload : {
                error : error.response.data.errorMessage
            }
        })
    }
}

export const get_all_tag = (page,searchValue) =>async(dispatch)=>{
    try {
        const response  = await axios.get(`http://localhost:5000/rest-api/get-tag?page=${page}&&searchValue=${searchValue}`,{withCredentials:true});
        dispatch({
            type : "DASHBORAD_TAG_GET_SUCCESS",
            payload : {
                allTag : response.data.allTag,
                parPage : response.data.parPage,
                tagCount : response.data.tagCount
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}
export const delete_tag = (id)=> async(dispatch)=>{
    try {
        const response = await axios.delete(`http://localhost:5000/rest-api/delete-tag/${id}`,{withCredentials:true});
        dispatch({
            type : 'TAG_DELETE_SUCCESS',
            payload : {
                successMessage : response.data.successMessage
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}
export const edit_tag = (categorySlug)=>async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/edit-tag/${categorySlug}`,{withCredentials:true});
        dispatch({
            type : 'EDIT_TAG_GET_SUCCESS',
            payload : {
                editTag : response.data.editTag
            }
        });
        dispatch({
            type : 'EDIT_REQUEST_SET'
        })
    } catch (error) {
        console.log(error.response)
    }
}

export const update_tag = (id,data)=>async(dispatch)=>{
    try {
        const response = await axios.patch(`http://localhost:5000/rest-api/update-tag/${id}`,data,{withCredentials:true});
        dispatch({
            type : 'TAG_UPDATE_SUCCESS',
            payload : {
                successMessage : response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type : 'TAG_UPDATE_FAIL',
            payload : {
                error : error.response.data.errorMessage
            }
        })
    }
}