import React from 'react'
import { Link } from "react-router-dom";
const AdminInfo = () => {
  return (
    <div className='adminInfo'>
      <div className="image-email">
        <img src="http://localhost:3000/designImage/image4.jpg" alt="" />
        <span>farid@gmail.com</span>
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