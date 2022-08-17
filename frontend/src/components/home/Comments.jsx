import React, { useState, useEffect } from 'react';
import { BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { FaFacebookSquare, FaGoogle, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { user_comment } from '../../store/actions/home/homeCommentAction'
import toast, { Toaster } from 'react-hot-toast'

const Comments = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.adminReducer)
    const [commentText, setCommentText] = useState('')
    const { read_article } = useSelector(state => state.homeReducer)
    const { loader, comment_message } = useSelector(state => state.userComment)

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
            toast.success(comment_message);
            dispatch({ type: 'COMMENT_MESSAGE_CLEAR' })
        }
    }, [comment_message])
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
                <div className="main-reply-comment">
                    <div className="image-comment-time-name">
                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                        <div className="name-time-comment">
                            <div className="name-time">
                                <h4>Sheikh Farid</h4>
                                <span>10 day ago</span>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                            <div className="replay_btn">
                                <button>Reply</button>
                            </div>
                            <div className="reply_box">
                                <div className="image-input">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <input type="text" required placeholder='add a public reply' />
                                </div>
                                <div className="reply_submit">
                                    <button className='cancle'>Cancel</button>
                                    <button className='submit'>Submit</button>
                                </div>
                            </div>
                            <div className="reply_comment">
                                <div className="reply_comment_image_name_time">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <div className="name-time-comment">
                                        <div className="name-time">
                                            <h4>Sheikh Farid</h4>
                                            <span>10 day ago</span>
                                        </div>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                        <div className="replay_btn">
                                            <button>Reply</button>
                                        </div>
                                        <div className="reply_box">
                                            <div className="image-input">
                                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                                <input type="text" required placeholder='add a public reply' />
                                            </div>
                                            <div className="reply_submit">
                                                <button className='cancle'>Cancel</button>
                                                <button className='submit'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action"><BsTrash /></div>
                            </div>
                            <div className="reply_comment">
                                <div className="reply_comment_image_name_time">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <div className="name-time-comment">
                                        <div className="name-time">
                                            <h4>Sheikh Farid</h4>
                                            <span>10 day ago</span>
                                        </div>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                        <div className="replay_btn">
                                            <button>Reply</button>
                                        </div>
                                        <div className="reply_box">
                                            <div className="image-input">
                                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                                <input type="text" required placeholder='add a public reply' />
                                            </div>
                                            <div className="reply_submit">
                                                <button className='cancle'>Cancel</button>
                                                <button className='submit'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action"><BsTrash /></div>
                            </div>
                        </div>
                    </div>
                    <div className="action"><BsTrash /></div>
                </div>

                <div className="main-reply-comment">
                    <div className="image-comment-time-name">
                        <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                        <div className="name-time-comment">
                            <div className="name-time">
                                <h4>Sheikh Farid</h4>
                                <span>10 day ago</span>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                            <div className="replay_btn">
                                <button>Reply</button>
                            </div>
                            <div className="reply_box">
                                <div className="image-input">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <input type="text" required placeholder='add a public reply' />
                                </div>
                                <div className="reply_submit">
                                    <button className='cancle'>Cancel</button>
                                    <button className='submit'>Submit</button>
                                </div>
                            </div>
                            <div className="reply_comment">
                                <div className="reply_comment_image_name_time">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <div className="name-time-comment">
                                        <div className="name-time">
                                            <h4>Sheikh Farid</h4>
                                            <span>10 day ago</span>
                                        </div>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                        <div className="replay_btn">
                                            <button>Reply</button>
                                        </div>
                                        <div className="reply_box">
                                            <div className="image-input">
                                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                                <input type="text" required placeholder='add a public reply' />
                                            </div>
                                            <div className="reply_submit">
                                                <button className='cancle'>Cancel</button>
                                                <button className='submit'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action"><BsTrash /></div>
                            </div>
                            <div className="reply_comment">
                                <div className="reply_comment_image_name_time">
                                    <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                    <div className="name-time-comment">
                                        <div className="name-time">
                                            <h4>Sheikh Farid</h4>
                                            <span>10 day ago</span>
                                        </div>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                        <div className="replay_btn">
                                            <button>Reply</button>
                                        </div>
                                        <div className="reply_box">
                                            <div className="image-input">
                                                <img src="http://localhost:3000/articalImage/ss.jpeg" alt="" />
                                                <input type="text" required placeholder='add a public reply' />
                                            </div>
                                            <div className="reply_submit">
                                                <button className='cancle'>Cancel</button>
                                                <button className='submit'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action"><BsTrash /></div>
                            </div>
                        </div>
                    </div>
                    <div className="action"><BsTrash /></div>
                </div>
            </div>
            <div className="comment_submit">
                <h2>Give Your Comment</h2>
                {
                    userInfo && userInfo.role === 'user' ? <form>
                        <div className="form-group">
                            <textarea required onChange={(e) => setCommentText(e.target.value)} className='form-control' placeholder='write something' name="" id="" cols="20" rows="10"></textarea>
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