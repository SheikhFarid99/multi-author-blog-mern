import axios from 'axios';

export const admin_login = (data) => async (dispatch) => {
    dispatch({
        type: 'LOADER_RUN',
    })
    try {
        const response = await axios.post('http://localhost:5000/rest-api/admin-login', data, { withCredentials: true });
        localStorage.setItem('blog_token', response.data.token);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                successMessage: response.data.successMessage,
                token: response.data.token
            }
        })
    } catch (error) {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: {
                error: error.response.data.errorMessage
            }
        })
    }
}

export const register = (data) => async (dispatch) => {
    dispatch({ type: 'LOADER_RUN' })
    try {
        const response = await axios.post('http://localhost:5000/rest-api/user-register', data, { withCredentials: true });
        dispatch({
            type: "OTP_SEND_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: "REGISTER_ERROR",
            payload: error.response.data.errorMessage
        })
    }
}

export const verify_email = (otp) => async (dispatch) => {
    dispatch({ type: 'LOADER_RUN' })
    try {
        const response = await axios.post('http://localhost:5000/rest-api/verify-email', { otp }, { withCredentials: true });
        localStorage.setItem('blog_token', response.data.token)
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: "REGISTER_ERROR",
            payload: error.response.data.errorMessage
        })
    }
}

export const user_login = (data) => async (dispatch) => {
    dispatch({ type: 'LOADER_RUN' })
    try {
        const response = await axios.post('http://localhost:5000/rest-api/user-login', data, { withCredentials: true });
        localStorage.setItem('blog_token', response.data.token)
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: "LOGIN_ERROR",
            payload: error.response.data.errorMessage
        })
    }
}


export const logout_user = ({ role, history }) => async (dispatch) => {
    try {
        await axios.get('http://localhost:5000/rest-api/logout-user', { withCredentials: true });
        localStorage.removeItem('blog_token')
        dispatch({
            type : 'LOGOUT_SUCCESS'
        })
        if (role === 'admin') {
            history.push('/admin/login')
        } else {
            history.push('/login')
        }

    } catch (error) {
        console.log(error.response.data)
    }
}


