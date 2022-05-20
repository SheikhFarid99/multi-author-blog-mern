import React from 'react';
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { AiFillTag, AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Comments from './Comments';

const ArticalDetails = () => {
    return (
        <div className="article-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link>Algorithm</Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>Lorem Ipsum is simply dummy text of the printing</span>
            </div>
            <div className="title">
                <h3><Link>Lorem Ipsum is simply dummy text of the printing</Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link>Programming</Link></span>
                </div>
                <div className="time">
                    <span>2 jun 2020</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
            </div>
            <div className="home-artical-text">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered the undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the theory
                    of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p> <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" /></p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">
                    <div className="dislike">
                        <button className='icon red'><AiFillDislike /></button>
                        {/* <button disabled className='icon'><AiFillDislike /></button>*/}
                        <div className="like-number">(12)</div>
                    </div>
                    <div className="like">
                        <button className='icon blue'><AiFillLike /></button>
                        {/*<button disabled className='icon'><AiFillLike /></button>*/}
                        <div className="dislike-number">(12)</div>
                    </div>
                </div>
                <div className="view">
                    <span>211</span>
                    <span>view</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read more : </span>
                <Link to='/'>Lorem Ipsum is simply dummy text of the printing</Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>
                <Link>Computer</Link>
                <Link>Programming</Link>
                <Link>Java</Link>
            </div>
            <div className="social-icons">
                <a className='l1' href=""><FaFacebookSquare /></a>
                <a className='l2' href=""><FaTwitterSquare /></a>
                <a className='l3' href=""><FaGithubSquare /></a>
                <a className='l4' href=""><ImLinkedin /></a>
            </div>
            <div className="related-article">
                <div className="more">
                    <h3>Related Articles</h3>
                </div>
                <div className="articles">
                    <Link className='article'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                    <span>very popular during the Renaissance. The first line of</span>
                    </Link>
                    <Link className='article'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                    <span>very popular during the Renaissance. The first line of</span>
                    </Link>
                    <Link className='article'><img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                    <span>very popular during the Renaissance. The first line of</span>
                    </Link>
                    
                </div>
            </div>
            <div className="comment_title">
                <h3>Article comments</h3>
            </div>
            <Comments/>
        </div>
    )
};

export default ArticalDetails;
