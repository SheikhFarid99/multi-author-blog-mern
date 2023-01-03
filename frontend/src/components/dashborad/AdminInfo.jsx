import React from 'react'
import { Link } from "react-router-dom";
const AdminInfo = ({ profileModelShow, userInfo }) => {
  return (
    <div className={`adminInfo ${profileModelShow ? 'show' : ''}`}>
      <div className="image-email">
        <img src={userInfo.image} alt="" />
        <span>{userInfo.email}</span>
      </div>
      <ul>
        <li><Link to='/dashborad/profile'>Profile</Link></li>
        <li><Link to='/'>view site</Link></li>
        <li><span>Logout</span></li>
      </ul>
    </div>
  )
}

export default AdminInfo