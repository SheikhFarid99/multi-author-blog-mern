import React from 'react'
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaEye, FaPlusCircle, FaRegCaretSquareRight, FaTag } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
const Sidebar = () => {
    return (
        <div className='dashborad-main-content-sidebar'>
            <ul>
                <input type="checkbox" id='article' />
                <input type="checkbox" id='category' />
                <input type="checkbox" id='tag' />
                <input type="checkbox" id='user' />
                <li>
                    <Link to='/dashborad'>
                        <label>
                            <h3>
                                <span><AiFillDashboard /></span>
                                <span>Dashborad</span>
                            </h3>
                        </label>
                    </Link>
                </li>
                <li>
                    <label htmlFor='article'>
                        <h3>
                            <span><RiArticleLine /></span>
                            <span>Article</span>
                        </h3>
                        <span className='right_icon1'><BsChevronRight /></span>
                    </label>
                    <div className="article_category">
                        <Link to='/dashborad/all-article'>
                            <span><FaEye /></span>
                            <span>All Article</span>
                        </Link>
                        <Link to='/dashborad/article-add'>
                            <span><FaPlusCircle/></span>
                            <span>Add Article</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <label htmlFor='category'>
                        <h3>
                            <span><FaRegCaretSquareRight /></span>
                            <span>Category</span>
                        </h3>
                        <span className='right_icon2'><BsChevronRight /></span>
                    </label>
                    <div className="category_category">
                        <Link to='/dashborad/all-category'>
                            <span><FaEye /></span>
                            <span>All Category</span>
                        </Link>
                        <Link to='/dashborad/add-category'>
                            <span><FaPlusCircle/></span>
                            <span>Add Category</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <label htmlFor='tag'>
                        <h3>
                            <span><FaTag /></span>
                            <span>Tag</span>
                        </h3>
                        <span className='right_icon3'><BsChevronRight /></span>
                    </label>
                    <div className="tag_category">
                        <Link to='/dashborad/all-tag'>
                            <span><FaEye /></span>
                            <span>All Tag</span>
                        </Link>
                        <Link to='/dashborad/add-tag'>
                            <span><FaPlusCircle/></span>
                            <span>Add Tag</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <label htmlFor='user'>
                        <h3>
                            <span><HiUserGroup /></span>
                            <span>User</span>
                        </h3>
                        <span className='right_icon4'><BsChevronRight /></span>
                    </label>
                    <div className="user_category">
                        <Link to='/dashborad/all-user'>
                            <span><FaEye /></span>
                            <span>All User</span>
                        </Link>
                        <Link to='/dashborad/all-sub-admin'>
                            <span><FaEye/></span>
                            <span>All sub-admin</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <Link to='/dashborad/comments'>
                        <label>
                            <h3>
                                <span><AiFillDashboard /></span>
                                <span>Comments</span>
                            </h3>
                        </label>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;