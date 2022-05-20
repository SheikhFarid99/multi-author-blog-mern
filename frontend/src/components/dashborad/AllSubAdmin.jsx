import React from 'react';
import Helmet from 'react-helmet';
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import Pagination from '../home/Pagination'

const AllSubAdmin = () => {
    const user = 'admin';
    const status = "block"
    return (
        <div className='all-sub-admin'>
            <Helmet>
                <title>Sub admin</title>
            </Helmet>
            <div className="elements-numberOf-search-add_new">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Sub Admin (22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/all-user'>User</Link>
                    </div>
                </div>
                <div className="loading-elements">
                    <div className="elements">
                        <div className="table-wapper">
                            <table>
                                <thead>
                                    <tr className='tr'>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Sheikh farid</td>
                                        <td data-label='Email'>farid@gmail.com</td>
                                        <td data-label='Image' className='image'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></td>
                                        <td data-label='Action'>
                                            {
                                                user === 'admin' ? status === 'block' ? <span className='unsus'>unblock</span> : <span className='sus'>Block</span> : ""
                                            }
                                            <Link to='/dashborad/sub-admin-profile/323'>Profile</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Sheikh farid</td>
                                        <td data-label='Email'>farid@gmail.com</td>
                                        <td data-label='Image' className='image'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></td>
                                        <td data-label='Action'>
                                            {
                                                user === 'admin' ? status === 'block' ? <span className='unsus'>unblock</span> : <span className='sus'>Block</span> : ""
                                            }
                                            <Link to='/dashborad/sub-admin-profile/323'>Profile</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Sheikh farid</td>
                                        <td data-label='Email'>farid@gmail.com</td>
                                        <td data-label='Image' className='image'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></td>
                                        <td data-label='Action'>
                                            {
                                                user === 'admin' ? status === 'block' ? <span className='unsus'>unblock</span> : <span className='sus'>Block</span> : ""
                                            }
                                            <Link to='/dashborad/sub-admin-profile/323'>Profile</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Sheikh farid</td>
                                        <td data-label='Email'>farid@gmail.com</td>
                                        <td data-label='Image' className='image'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></td>
                                        <td data-label='Action'>
                                            {
                                                user === 'admin' ? status === 'block' ? <span className='unsus'>unblock</span> : <span className='sus'>Block</span> : ""
                                            }
                                            <Link to='/dashborad/sub-admin-profile/323'>Profile</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Sheikh farid</td>
                                        <td data-label='Email'>farid@gmail.com</td>
                                        <td data-label='Image' className='image'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></td>
                                        <td data-label='Action'>
                                            {
                                                user === 'admin' ? status === 'block' ? <span className='unsus'>unblock</span> : <span className='sus'>Block</span> : ""
                                            }
                                            <Link to='/dashborad/sub-admin-profile/323'>Profile</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSubAdmin