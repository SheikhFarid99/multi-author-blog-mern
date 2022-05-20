import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { htmlToText } from "html-to-text";
import Pagination from '../home/Pagination'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { get_all_category,delete_category } from "../../store/actions/Dashborad/categoryAction";

const AllCategory = () => {

    const dispatch = useDispatch()
    const { currentPage } = useParams();
    const { parPage, allCategory, categoryCount,categorySuccessMessage } = useSelector(state => state.dashboradCategory);

    useEffect(() => {
        if(categorySuccessMessage){
            toast.success(categorySuccessMessage);
            dispatch({type : 'CATE_SUCCESS_MESSAGE_CLEAR'});
        }
        dispatch(get_all_category(currentPage ? currentPage.split('-')[1] : 1));
    }, [currentPage,categorySuccessMessage])

    return (
        <div className='all-category'>
            <Helmet>
                <title>All Category</title>
            </Helmet>
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
            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Category (22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input onChange={(e)=>dispatch(get_all_category(currentPage ? currentPage.split('-')[1] : 1,e.target.value))} type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/add-category'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                    <div className="categorys">
                        {
                            allCategory.length > 0 ? allCategory.map(c => <div className="category">
                                <div className="name">{c.categoryName}</div>
                                <div className="action">
                                    <span><Link to={`/dashborad/category/edit/${c.categorySlug}`}><MdEdit /></Link></span>
                                    <span onClick={()=>dispatch(delete_category(c._id))}><MdDelete /></span>
                                </div>
                            </div>) : "category not found..."
                        }
                    </div>
                </div>
                <Pagination 
                    pageNumber ={currentPage ? currentPage.split('-')[1]:1}
                    parPage = {parPage}
                    itemCount = {categoryCount}
                    path = '/dashborad/all-category'
                />
            </div>
        </div>
    )
}

export default AllCategory