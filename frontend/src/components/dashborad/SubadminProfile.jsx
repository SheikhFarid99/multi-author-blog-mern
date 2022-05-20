import React from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";

const SubadminProfile = () => {
    const user = 'admin'
    return (
        <div className='sub_admin_profile'>
            <Helmet>
                <title>Sub Admin Profile</title>
            </Helmet>
            <div className="profile-contents">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Profile</h2>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/all-sub-admin'>sub admin</Link>
                    </div>
                </div>
                <div className="profile-image-article">
                    <div className="profile-image-details">
                        <div className="image">
                            <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                        </div>
                        <ul className='profile-details'>
                            <li>
                                <span>Name : </span>
                                <span>Sheikh Farid</span>
                            </li>
                            {
                                user === 'admin' && <li>
                                    <span>Email : </span>
                                    <span>farid@gmail.com</span>
                                </li>
                            }
                            <li>
                                <span>Role : </span>
                                <span>Sub admin</span>
                            </li>
                            <li>
                                <span>Account create : </span>
                                <span>2 jun 2022</span>
                            </li>
                            <li>
                                <span>Article Write : </span>
                                <span>3</span>
                            </li>
                        </ul>
                    </div>
                    <div className="write-articles">
                        <h2>Article</h2>
                        <div className="articles">
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                            <Link className='article' to="/artical/details/farid">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubadminProfile