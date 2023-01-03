import React, { useState } from 'react';
import { BsBell, BsListUl } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
import moment from 'moment'
import { Link } from "react-router-dom";
import AdminInfo from './AdminInfo';
import UserMessage from './UserMessage';
import { useSelector, useDispatch } from 'react-redux';
import { get_notification } from '../../store/actions/Dashborad/dashboardAction';
import { useEffect } from 'react';

const DashboradNavbar = () => {

    const dispath = useDispatch()
    const { userInfo } = useSelector(state => state.adminReducer)
    const { notifications } = useSelector(state => state.dashboardIndex)
    const [profileModelShow, setProfileModelShow] = useState(false)
    const [nModelShow, setNModelShow] = useState(false)

    const profileModel = () => {
        if (profileModelShow) {
            setProfileModelShow(false)
        } else {
            setNModelShow(false)
            setProfileModelShow(true)
        }
    }

    const nModel = () => {
        if (nModelShow) {
            setNModelShow(false)
        } else {
            setProfileModelShow(false)
            setNModelShow(true)
        }
    }
    useEffect(() => {
        dispath(get_notification(userInfo.id))
    }, [])
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
                                <div onClick={nModel}>
                                    <span><BsBell /></span>
                                    <div className="nCount">{notifications.length}</div>
                                </div>
                                {

                                }
                                <div className={`natifications ${nModelShow ? 'show' : ''}`}>
                                    <ul>
                                        {
                                            notifications.map((n, i) => <li key={i}>
                                                <Link to={`/artical/details/${n.slug}`}>{n.subject}</Link>
                                                <div className="nDelete"><FaTrash /></div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <UserMessage />
                        </div>
                        <label onClick={profileModel} htmlFor="adminInfo"><img src={userInfo.image} alt="" /></label>
                        <div className="name-time">
                            <h3>{userInfo.name}</h3>
                            <span>{moment(userInfo.createdAt).format('ll')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <AdminInfo profileModelShow={profileModelShow} userInfo={userInfo} />
        </>
    )
}

export default DashboradNavbar