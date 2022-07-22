import React, { useState, useEffect } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaLock, FaFacebook, FaGoogle } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { user_login } from '../../store/actions/authAction'
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
const Login = ({ history }) => {
    const dispatch = useDispatch();
    const { errorMessage, loader, authenticate } = useSelector(state => state.adminReducer)
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        if (authenticate) {
            return history.push('/dashborad')
        }
        if (errorMessage.error) {
            toast.error(errorMessage.error)
            dispatch({ type: 'ERROR_CLEAR' })
        }
    }, [errorMessage?.error, authenticate])

    useEffect(() => {
        dispatch({ type: 'ERROR_CLEAR' })
    }, [])

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const login = (e) => {
        e.preventDefault()
        dispatch(user_login(state))
    }
    return <>
        <Navbar />
        <div className="login">
            <Toaster
                position={'bottom-center'}
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '16px'
                    }
                }}
            />
            <div className="card">
                <div className="auth">
                    <h3>Login</h3>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="icon-input">
                                <div className="icon"><BsAt /></div>
                                <input onChange={inputHandle} type="email" name='email' id='email' placeholder='email' className="form-control" />
                            </div>
                            <p>{errorMessage?.email}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="icon-input">
                                <div className="icon"><FaLock /></div>
                                <input onChange={inputHandle} type="password" name='password' id='password' placeholder='password' className="form-control" />
                            </div>
                            <p>{errorMessage?.password}</p>
                        </div>
                        <div className="form-group">
                            {
                                loader ? <button className="btn btn-block">
                                    <div className="spinner">
                                        <div className="spinner1"></div>
                                        <div className="spinner2"></div>
                                        <div className="spinner3"></div>
                                    </div>
                                </button> : <button onClick={login} className="btn btn-block">
                                    Login
                                </button>
                            }


                        </div>
                    </form>
                    <div className="or">or</div>
                    <div className="fb-google-auth">
                        <div className="fb-google-logo">
                            <div className="fb">
                                <button><FaFacebook /> <span>signup with facebook</span></button>
                            </div>
                            <div className="google">
                                <button><FaGoogle /><span>signup with google</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="login-page">
                        <Link to='/register'>Register your account</Link>
                    </div>
                </div>
                <div className="image-logo">
                    <img src="http://localhost:3000/designImage/image4.jpg" alt="" />
                </div>
            </div>
        </div>
    </>;
};

export default Login;
