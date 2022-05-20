import React,{useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { Link,useParams} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { edit_tag,update_tag } from "../../store/actions/Dashborad/tagAction";

const EditTag = ({history}) => {
    const dispatch = useDispatch();
    const {tagSlug} = useParams();

    const {tagError, tagSuccessMessage,editTag,editRequest } = useSelector(state => state.dashboradTag);

    const [state, setState] = useState({
        tagName: '',
        tagDes: ''
    })
    
    useEffect(()=>{
        if(editRequest){
            setState({
                tagName : editTag.tagName,
                tagDes : editTag.tagDes
            })
            dispatch({type : 'EDIT_REQUEST_CLEAR'})
        }else{
            dispatch(edit_tag(tagSlug));
        }
    },[editTag,tagSlug]);


    useEffect(()=>{
        if(tagSuccessMessage){
            history.push('/dashborad/all-tag')
        }
    },[tagSuccessMessage])

    const inputHendle = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const update = (e)=>{
        e.preventDefault();
        dispatch(update_tag(editTag._id,state));
    }
    return (
        <div className='add-category'>
            <Helmet>
                <title>Tag Edit</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Edit Tag</h2>
                    <Link className='btn' to="/dashborad/all-tag">All Tag</Link>
                </div>
                <form onSubmit={update}>
                    <div className="form-group">
                        <label htmlFor="category_name">Tag name</label>
                        <input onChange={inputHendle} type="text" value={state.tagName} name='tagName' className="form-control" placeholder='tag name' id='category_name' />
                        <p className='error'>{tagError && tagError.tagName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Tag description</label>
                        <textarea onChange={inputHendle} value={state.tagDes} name='tagDes' type="text" className="form-control" placeholder='tag description' id='category_des' />
                        <p className='error'>{tagError && tagError.tagDes}</p>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Update Tag</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTag;