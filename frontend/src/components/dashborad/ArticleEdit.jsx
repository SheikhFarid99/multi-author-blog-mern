import React, { useState, useRef, useEffect } from 'react'
import Helmet from 'react-helmet';
import { Link,useParams } from 'react-router-dom';
import { BsCardImage } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { get_tag_category,article_edit, article_update} from "../../store/actions/Dashborad/articalAction";

const ArticleEdit = ({history}) => {

    const {articleSlug} = useParams();

    const { allCategory, allTag, loader ,articleError,articleSuccessMessage,edtiArticle,editRequest} = useSelector(state => state.dashboradArtical)

    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const editor = useRef();

    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
    })

    const [slug, setSlug] = useState('');
    const [updateBtn, setUpdateBtn] = useState(false);
    const [image, setImage] = useState({
        imageName: '',
        img: ''
    })


    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const titleHendler = (e) => {
        setState({
            ...state,
            title: e.target.value
        })
        const createSlug = e.target.value.trim().split(' ').join('-');
        setSlug(createSlug)
    }

    const slugHendle = (e) => {
        setSlug(e.target.value);
        setUpdateBtn(true)
    }


    const updateSlug = (e) => {
        e.preventDefault();
        const newSlug = slug.trim().split(' ').join('-');
        setSlug(newSlug)
        setUpdateBtn(false)
    }


    const update = (e) => {
        e.preventDefault();
        const { title, category, tag } = state;
        dispatch(article_update({
            title,
            category,
            tag,
            slug,
            text,
            articleId : edtiArticle._id

        }))
    }
    const config = {
        readonly: false
    }
    useEffect(() => {
        dispatch(get_tag_category())
    }, [])

    useEffect(()=>{
        if(articleSuccessMessage){
            history.push('/dashborad/all-article');
        }
    },[articleSuccessMessage])

    useEffect(()=>{
        if(editRequest){
            setState({
                title : edtiArticle.title,
                category : edtiArticle.category_slug,
                tag : edtiArticle.tag_slug,
            })
            setSlug(edtiArticle.slug)
            setText(edtiArticle.articleText)
        }
    },[editRequest])

    useEffect(()=>{
        dispatch(article_edit(articleSlug))
    },[])
    return (
        <div className='add-article'>
            <Helmet>
                <title>Edit Article</title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to="/dashborad/all-article">All Article</Link>
                </div>
                <form onSubmit={update}>
                    <div className="form-group">
                        <label htmlFor="title">Article title</label>
                        <input onChange={titleHendler} value={state.title} type="text" name='title' placeholder='article title' className="form-control" id='title' />
                        {
                            articleError?<p className='error'>{articleError.title}</p>:''
                        }
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Article slug</label>
                        <input value={slug} onChange={slugHendle} type="text" placeholder='article slug' className="form-control" name='slug' id='slug' />
                        {
                            articleError?<p className='error'>{articleError.slug}</p>:''
                        }
                    </div>
                    {
                        updateBtn ? <button onClick={updateSlug} className='btn'>Update</button> : ''
                    }
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select onChange={inputHendle} value={state.category} className='form-control' name="category" id="category">
                            <option value="">--select article category--</option>
                            {
                                allCategory.length > 0 ? allCategory.map((c, index) => {
                                    return <option key={index} value={c.categorySlug}>{c.categoryName}</option>
                                }) : ''
                            }

                        </select>
                        {
                            articleError?<p className='error'>{articleError.category}</p>:''
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select onChange={inputHendle} value={state.tag} className='form-control' name="tag" id="tag">
                            <option value="sdas">--select article tag--</option>
                            {
                                allTag.length > 0 ? allTag.map((t, index) => <option key={index} value={t.tagSlug}>{t.tagName}</option>) : ''
                            }
                        </select>
                        {
                            articleError?<p className='error'>{articleError.tag}</p>:''
                        }
                    </div>
                    <div className="form-group img_upload">
                        <div className="upload">
                            <label htmlFor="upload_image"><BsCardImage /></label>
                            <input type="file" id='upload_image' />
                        </div>
                        <label htmlFor="article text">Article text</label>
                        <JoditEditor
                            value={text}
                            tabIndex={1}
                            ref={editor}
                            config={config}
                            onBlur={newText => setText(newText)}
                            onChange={newText => { }}
                        />
                        {
                            articleError?<p className='error'>{articleError.text}</p>:''
                        }
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button className="btn btn-block">Update Article</button>

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ArticleEdit