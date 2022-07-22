import React, { useState } from 'react'
import Navbar from '../home/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { verify_email } from '../../store/actions/authAction'
import { useEffect } from 'react'

const EmailVerify = ({ history }) => {
    const dispatch = useDispatch();
    const { errorMessage, authenticate, loader } = useSelector(state => state.adminReducer)
    const [otp, setOtp] = useState("")

    useEffect(() => {
        if (authenticate) {
            history.push('/dashborad')
        }
        if (errorMessage.error) {
            toast.error(errorMessage.error);
        }
    }, [authenticate, errorMessage.error])
    return (
        <div className="verify_email">
            <Navbar />
            <Toaster
                position={'bottom-center'}
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '16px'
                    }
                }}
            />
            <div className="verify">
                <div className="otp">
                    <p>Check your email and submit OTP</p>
                    <div className="form-group">
                        <input onChange={(e) => setOtp(e.target.value)} type="text" className='form-control' id='otp' placeholder='otp' />
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button onClick={() => dispatch(verify_email(otp))} className="btn btn-block">
                                Register
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailVerify