import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronRight } from "react-icons/bs";
import { AiFillTag, AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Comments from './Comments';
import { get_article_details, like_dislike_get } from '../../store/actions/home/articleReadAction';
import htmlParser from 'react-html-parser';

const ArticalDetails = () => {

    const dispath = useDispatch();
    const { slug } = useParams()
    const { related_article, readMore, read_article, moreTag } = useSelector(state => state.homeReducer)

    useEffect(() => {
        dispath(get_article_details(slug))
    }, [slug])

    useEffect(() => {
        dispath(like_dislike_get(slug))
    }, [slug])
    return (
        <div className="article-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link to={`/artical/category/${read_article?.category_slug}`}>{read_article?.category}</Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>{read_article?.title}</span>
            </div>
            <div className="title">
                <h3><Link to="#">{read_article?.title}</Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link to={`/artical/tag/${read_article?.tag_slug}`}>{read_article?.tag}</Link></span>
                </div>
                <div className="time">
                    <span>2 jun 2020</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src={`http://localhost:3000/articalImage/${read_article?.image}`} alt="" />
            </div>
            <div className="home-artical-text">
                <p>{htmlParser(read_article?.articleText)}</p>
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
                <Link to={readMore?.slug}>{readMore?.title}</Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>
                {
                    moreTag.length > 0 && moreTag.map((teg, index) => <Link to={`/artical/tag/${teg}`} key={index}>{teg.split('-').join(' ')}</Link>)
                }
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
                    {
                        related_article.length > 0 ? related_article.map((art, index) => <Link to={`/artical/details/${art.slug}`} className='article'>
                            <img src={`http://localhost:3000/articalImage/${art?.image}`} alt="" />
                            <span>very popular during the Renaissance. The first line of</span>
                        </Link>) : <span>Related article not found</span>
                    }

                </div>
            </div>
            <div className="comment_title">
                <h3>Article comments</h3>
            </div>
            <Comments />
        </div>
    )
};

export default ArticalDetails;
