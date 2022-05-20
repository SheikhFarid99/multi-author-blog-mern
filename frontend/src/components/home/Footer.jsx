import React from 'react';
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="title">
                                <h3>Old Artical</h3>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-4">
                            <div className="title-cate-tag">
                                <div className="title">
                                    <h3>Category</h3>
                                </div>
                                <div className="cate-tag">
                                    <div className="cate">
                                        <ul className="cate-list">
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight/>
                                                    <Link>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight/>
                                                    <Link>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight/>
                                                    <Link>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="tag">
                                        <div className="title">
                                            <h3>Tag</h3>
                                        </div>
                                        <ul className="tag-list">
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link>Computer</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title">
                                <h3>Recent Recipse</h3>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to='/artical/details/sdfhgs'>Lorem Ipsum is simply dummy text of the printing</Link>
                                            <br/>
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;
