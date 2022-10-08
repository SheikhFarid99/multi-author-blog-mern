import React, { useState, useEffect } from 'react';
import { BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { FaFacebookSquare, FaGoogle, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { user_comment, get_comment, reply_comment, comment_delete, comment_reply_delete } from '../../store/actions/home/homeCommentAction'
import toast, { Toaster } from 'react-hot-toast'

const Comments = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.adminReducer)
    const [show_reply, setReply] = useState('')
    const [commentText, setCommentText] = useState('')
    const [replyText, setReplyText] = useState("");
    const { read_article } = useSelector(state => state.homeReducer)
    const { loader, comment_message, comment } = useSelector(state => state.userComment)

    const commentSubmit = (e) => {
        e.preventDefault();
        const data = {
            articleId: read_article._id,
            articleSlug: read_article.slug,
            articleTitle: read_article.title,
            userName: userInfo.name,
            userImage: userInfo.image,
            commentText
        }
        if (commentText) {
            dispatch(user_comment(data))
        }
    }
    useEffect(() => {
        if (comment_message) {
            setCommentText('')
            setReplyText("")
            setReply('')
            toast.success(comment_message);
            dispatch({ type: 'COMMENT_MESSAGE_CLEAR' })
            dispatch(get_comment(read_article._id))
        }
    }, [comment_message])
    useEffect(() => {
        if (read_article) {
            dispatch(get_comment(read_article._id))
        }
    }, [read_article])

    const replySubmit = (commentId) => {
        const data = {
            commentId,
            replyText,
            replyName: userInfo.name,
            replyImage: userInfo.image
        }
        if (replyText) {
            dispatch(reply_comment(data))
        }
        setReplyText("")
        setReply('')
    }
    return (
        <>
            <div className='comments'>
                <Toaster
                    position={'bottom-center'}
                    reverseOrder={false}
                    toastOptions={{
                        style: {
                            fontSize: '16px'
                        }
                    }}
                />
                {
                    comment.length > 0 ? comment.map((c, index) => <div className="main-reply-comment">
                        <div className="image-comment-time-name">
                            <img src={c.userImage} alt="" />
                            <div className="name-time-comment">
                                <div className="name-time">
                                    <h4>{c.userName}</h4>
                                    <span>10 day ago</span>
                                </div>
                                <p>{c.commentText}</p>
                                <div className="replay_btn">
                                    {
                                        userInfo && <button onClick={() => setReply(c._id)}>Reply</button>
                                    }
                                </div>
                                <div className={show_reply === c._id ? 'reply_box show' : 'reply_box'}>
                                    <div className="image-input">
                                        <img src={c.userImage} alt="" />
                                        <input value={replyText} onChange={(e) => setReplyText(e.target.value)} type="text" required placeholder='add a public reply' />
                                    </div>
                                    <div className="reply_submit">
                                        <button onClick={() => setReply("")} className='cancle'>Cancel</button>
                                        <button onClick={() => replySubmit(c._id)} className='submit'>Submit</button>
                                    </div>
                                </div>
                                {
                                    c.replyComment.length > 0 && c.replyComment.map((rc, index) => <div className="reply_comment">
                                        <div className="reply_comment_image_name_time">
                                            <img src={rc.replyImage} alt="" />
                                            <div className="name-time-comment">
                                                <div className="name-time">
                                                    <h4>{rc.replyName}</h4>
                                                    <span>10 day ago</span>
                                                </div>
                                                <p>{rc.replyText}</p>
                                                <div className="replay_btn">
                                                    {
                                                        userInfo && <button onClick={() => setReply(rc._id)}>Reply</button>
                                                    }
                                                </div>
                                                <div className={show_reply === rc._id ? 'reply_box show' : 'reply_box'}>
                                                    <div className="image-input">
                                                        <img src={c.userImage} alt="" />
                                                        <input onChange={(e) => setReplyText(e.target.value)} value={replyText} type="text" required placeholder='add a public reply' />
                                                    </div>
                                                    <div className="reply_submit">
                                                        <button onClick={() => setReply("")} className='cancle'>Cancel</button>
                                                        <button onClick={() => replySubmit(c._id)} className='submit'>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            ((userInfo.role === 'admin') || (userInfo.role === 'sub admin' && userInfo.id === read_article.adminId)) && <div className="action" onClick={() => dispatch(comment_reply_delete({
                                                commentId: c._id,
                                                role: userInfo.role,
                                                articleId: read_article._id,
                                                adminId: userInfo.id,
                                                replyId: rc._id
                                            }))} ><BsTrash /></div>
                                        }
                                    </div>)
                                }
                            </div>
                        </div>
                        {
                            ((userInfo.role === 'admin') || (userInfo.role === 'sub admin' && userInfo.id === read_article.adminId)) && <div onClick={() => dispatch(comment_delete({
                                commentId: c._id,
                                role: userInfo.role,
                                articleId: read_article._id,
                                adminId: userInfo.id
                            }))} className="action"><BsTrash /></div>
                        }
                    </div>) : ""
                }
            </div>
            <div className="comment_submit">
                <h2>Give Your Comment</h2>
                {
                    userInfo && userInfo.role === 'user' ? <form>
                        <div className="form-group">
                            <textarea value={commentText} required onChange={(e) => setCommentText(e.target.value)} className='form-control' placeholder='write something' name="" id="" cols="20" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <button disabled={loader ? true : false} onClick={commentSubmit} className="btn">Submit</button>
                        </div>
                    </form> : <u className='login-first'>
                        <li className='btn'>
                            <span><FaFacebookSquare /></span>
                            <button className='btn'>Login Facebook</button>
                        </li>
                        <li className='btn'>
                            <span><FaLock /></span>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='btn'>
                            <span><FaGoogle /></span>
                            <button className='btn'>Login Google</button>
                        </li>
                    </u>
                }
            </div>
        </>
    )
}

export default Comments