import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {logout_user} from '../../store/actions/authAction'
const AdminInfo = ({ profileModelShow, userInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const logout = () => {
    dispatch(logout_user({ role: userInfo.role, history }))
  }
  return (
    <div className={`adminInfo ${profileModelShow ? 'show' : ''}`}>
      <div className="image-email">
        <img src={userInfo.image} alt="" />
        <span>{userInfo.email}</span>
      </div>
      <ul>
        <li><Link to='/dashborad/profile'>Profile</Link></li>
        <li><Link to='/'>view site</Link></li>
        <li onClick={logout}><span>Logout</span></li>
      </ul>
    </div>
  )
}

export default AdminInfo