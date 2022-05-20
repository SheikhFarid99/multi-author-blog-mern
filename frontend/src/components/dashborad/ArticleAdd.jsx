import React, { useState, useRef, useEffect } from 'react'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardImage } from "react-icons/bs";
import JoditEditor from "jodit-react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { get_tag_category, add_articale} from "../../store/actions/Dashborad/articalAction";

const ArticleAdd = ({history}) => {

    const { allCategory, allTag, loader ,articleError,articleSuccessMessage} = useSelector(state => state.dashboradArtical)

    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const editor = useRef();

    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: '',
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


    const imageHendle = (e) => {
        console.log(e.target.files)
        if (e.target.files.length !== 0) {
            setState({
                ...state,
                image: e.target.files[0]
            })
            const imageReader = new FileReader();
            imageReader.onload = () => {
                setImage({
                    ...image,
                    img: imageReader.result,
                    imageName: e.target.files[0].name
                })
            }
            imageReader.readAsDataURL(e.target.files[0]);
        }
    }

    console.log(text)

    const add = (e) => {
        e.preventDefault();
        const { title, image, category, tag } = state;

        const formData = new FormData();

        formData.append('title', title);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('tag', tag);
        formData.append('slug', slug);
        formData.append('text', text);

        dispatch(add_articale(formData))
    }
    const config = {
        readonly: false
    }
    useEffect(() => {
        dispatch(get_tag_category())
    }, [])

    useEffect(()=>{
        if(articleSuccessMessage){
            dispatch({type :'ART_SUCCESS_MESSAGE_CLEAR'})
            history.push('/dashborad/all-article');
        }
    },[articleSuccessMessage])
    return (
        <div className='add-article'>
            <Toaster position={'bottom-center'}
                reverseOrder={false}
                toastOptions={
                    {
                        style: {
                            fontSize: '15px'
                        }
                    }
                }
            />
            <Helmet>
                <title>Article add</title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to="/dashborad/all-article">All Article</Link>
                </div>
                <form onSubmit={add}>
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
                                allTag.length > 0 ? allTag.map((t, index) => <option value={t.tagSlug}>{t.tagName}</option>) : ''
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
                        <label htmlFor="image">Image</label>
                        <div className="image-select">
                            {
                                image.imageName ? <span>{image.imageName}</span> : <span></span>
                            }
                            <label htmlFor="image">Select Image</label>
                            <input onChange={imageHendle} type="file" className="form-control" name='image' id='image' />
                        </div>
                        <div className="image">
                            {
                                image.img ? <img src={image.img} alt="" /> : ''
                            }

                        </div>
                        {
                            articleError?<p className='error'>{articleError.image}</p>:''
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
                            </button> : <button className="btn btn-block">Add Article</button>

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ArticleAdd