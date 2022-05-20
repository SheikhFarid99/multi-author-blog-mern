import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { add_tag } from "../../store/actions/Dashborad/tagAction";
import { useDispatch, useSelector } from "react-redux";

const AddTag = ({ history }) => {
    const dispatch = useDispatch();
    const { loader, tagError, tagSuccessMessage } = useSelector(state => state.dashboradTag);

    const [state, setState] = useState({
        tagName: '',
        tagDes: ''
    })
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const addTag = (e) => {
        e.preventDefault();
        dispatch(add_tag(state));
    }

    useEffect(() => {
        if (tagError && tagError.error) {
            toast.error(tagError.error);
            dispatch({ type: 'TAG_ERROR_MESSAGE_CLEAR' });
        }
        if (tagSuccessMessage) {
            toast.success(tagSuccessMessage);
            dispatch({ type: 'TAG_SUCCESS_MESSAGE_CLEAR' });
            history.push('/dashborad/all-tag');
        }
    }, [tagError, tagSuccessMessage])
    return (
        <div className='add-category'>
            <Toaster position={'bottom-center'}
                reverseOrder={false}
                toastOptions={
                    {
                        style: {
                            fontSize: '15px'
                        }
                    }
                }
            />
            <Helmet>
                <title>Tag add</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Add Tag</h2>
                    <Link className='btn' to="/dashborad/all-tag">All Tag</Link>
                </div>
                <form onSubmit={addTag}>
                    <div className="form-group">
                        <label htmlFor="category_name">Tag name</label>
                        <input onChange={inputHendle} value={state.tagName} type="text" name='tagName' className="form-control" placeholder='category name' id='category_name' />
                        <p className='error'>{tagError? tagError.tagName : ""}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Tag description</label>
                        <textarea onChange={inputHendle} value={state.tagDes} name='tagDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        <p className='error'>{tagError? tagError.tagDes : ""}</p>
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button className="btn btn-block">Add Tag</button>

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTag