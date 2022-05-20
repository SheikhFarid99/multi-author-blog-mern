import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { add_category } from "../../store/actions/Dashborad/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const AddCategory = ({history}) => {

    const dispatch = useDispatch();
    const { loader, categoryError, categorySuccessMessage } = useSelector(state => state.dashboradCategory);
    
    const [state, setState] = useState({
        categoryName: '',
        categoryDes: ''
    })
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const addCategory = (e) => {
        e.preventDefault();
        dispatch(add_category(state));
    }

    useEffect(()=>{
        if(categoryError && categoryError.error){
            toast.error(categoryError.error);
            dispatch({type : 'CATE_ERROR_MESSAGE_CLEAR'});
        }
        if(categorySuccessMessage){
            toast.success(categorySuccessMessage);
            dispatch({type : 'CATE_SUCCESS_MESSAGE_CLEAR'});
            history.push('/dashborad/all-category');
        }
    },[categoryError,categorySuccessMessage])
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
                <title>Category add</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Add Category</h2>
                    <Link className='btn' to="/dashborad/all-category">All Category</Link>
                </div>
                <form onSubmit={addCategory}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category name</label>
                        <input onChange={inputHendle} type="text" name='categoryName' className="form-control" placeholder='category name' id='category_name' />
                        <p className='error'>{categoryError? categoryError.categoryName : ""}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Category description</label>
                        <textarea onChange={inputHendle} name='categoryDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        <p className='error'>{categoryError? categoryError.categoryDes : ""}</p>
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> :<button className="btn btn-block">Add Category</button>

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCategory