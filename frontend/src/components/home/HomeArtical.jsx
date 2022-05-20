import React from 'react';
import { Link } from "react-router-dom";
import Pagination from './Pagination';

const HomeArtical = () => {
    return (
        <>
        <div className="home-articals">
            <div className="home-artical">
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to='/artical/details/farid'>Lorem Ipsum is simply dummy text of the printing</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Sheikh farid</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                <Link to='/artical/details/farid'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-artical">
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to='/'>Lorem Ipsum is simply dummy text of the printing</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Sheikh farid</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-artical">
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to='/'>Lorem Ipsum is simply dummy text of the printing</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Sheikh farid</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-artical">
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to='/'>Lorem Ipsum is simply dummy text of the printing</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Sheikh farid</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-artical">
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to='/'>Lorem Ipsum is simply dummy text of the printing</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Sheikh farid</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/artical/details/farid'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination/>
        </>
    );
};

export default HomeArtical;
