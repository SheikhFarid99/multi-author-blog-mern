import React from 'react';
import { BsBell, BsListUl } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import AdminInfo from './AdminInfo';
import UserMessage from './UserMessage';

const DashboradNavbar = () => {
    return (
        <>
        <div className='dashborad-navbar'>
            <div className="dashborad-navbar-left-side">
                <label htmlFor="" className='dash'><span>D</span></label>
                <label className='bar' htmlFor="sidebar"><span><BsListUl /></span></label>
                <h2><Link to='/dashborad'>Sheikh Farid</Link></h2>
            </div>
            <div className="dashborad-navbar-right-side">
                <h2><Link to='/dashborad'><span>View site</span></Link></h2>
                <div className="search">
                    <input type="text" placeholder='search' className="form-control" />
                </div>
                <div className="user">
                    <div className="natification-message">
                        <div className="natification">
                            <div>
                                <span><BsBell/></span>
                                <div className="nCount">5</div>
                            </div>
                            <div className="natifications show">
                                <ul>
                                    <li>
                                        <Link to='#'>Farid comment your Article</Link>
                                        <div className="nDelete"><FaTrash/></div>
                                    </li>
                                    <li>
                                        <Link to='#'>Farid comment your Article</Link>
                                        <div className="nDelete"><FaTrash/></div>
                                    </li>
                                    <li>
                                        <Link to='#'>Farid comment your Article</Link>
                                        <div className="nDelete"><FaTrash/></div>
                                    </li>
                                    <li>
                                        <Link to='#'>Farid comment your Article</Link>
                                        <div className="nDelete"><FaTrash/></div>
                                    </li>
                                    <li>
                                        <Link to='#'>Farid comment your Article</Link>
                                        <div className="nDelete"><FaTrash/></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <UserMessage/>
                    </div>
                    <label htmlFor="adminInfo"><img src="http://localhost:3000/designImage/image4.jpg" alt="" /></label>
                    <div className="name-time">
                        <h3>Sheikh Farid</h3>
                        <span>2 jun 2021</span>
                    </div>
                </div>
        
            </div>
        </div>
        <AdminInfo/>
        </>
    )
}

export default DashboradNavbar