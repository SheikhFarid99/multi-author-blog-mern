import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsListUl } from "react-icons/bs";
const Navbar = ({nav}) => {
    return (
        <div ref={nav}  id='navbar' className="navbar">
            <div className="container">
                <div className="row">
                    <input type="checkbox" id='toggle' />
                    <div className="col-4">
                        <div className="image-menubar">
                            <Link className='image' to='/'>
                                <img src="http://localhost:3000/designImage/myBlog.png" alt="" />
                            </Link>
                            <label className='menu_icon' htmlFor="toggle"><BsListUl /></label>
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className="link-list toggle">
                            <li className="link-item">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="link-item">
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className="link-item">
                                <Link to='/policy'>Policy</Link>
                            </li>
                            <div className="social-icon">
                                <li className="link-item">
                                    <Link to='/about'><span><FaFacebookSquare /></span></Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/about'><span><FaTwitterSquare /></span></Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/about'><span><FaYoutube /></span></Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/about'><span><FaGithubSquare /></span></Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/about'><span><ImLinkedin /></span></Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
