import React,{useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { Link,useParams} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { edit_category,update_category } from "../../store/actions/Dashborad/categoryAction";

const EditCategory = ({history}) => {

    const dispatch = useDispatch();
    const {cateSlug} = useParams();

    const {categoryError, categorySuccessMessage,editCategory,editRequest } = useSelector(state => state.dashboradCategory);

    const [state, setState] = useState({
        categoryName: '',
        categoryDes: ''
    })
    
    useEffect(()=>{
        if(editRequest){
            setState({
                categoryName : editCategory.categoryName,
                categoryDes : editCategory.categoryDes
            })
            dispatch({type : 'EDIT_REQUEST_CLEAR'})
        }else{
            dispatch(edit_category(cateSlug));
        }
    },[editCategory,cateSlug]);


    useEffect(()=>{
        if(categorySuccessMessage){
            history.push('/dashborad/all-category')
        }
    },[categorySuccessMessage])

    const inputHendle = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const update = (e)=>{
        e.preventDefault();
        dispatch(update_category(editCategory._id,state));
    }
    
    return (
        <div className='add-category'>
            <Helmet>
                <title>Category Edit</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Edit Category</h2>
                    <Link className='btn' to="/dashborad/all-category">All Category</Link>
                </div>
                <form onSubmit={update}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category name</label>
                        <input onChange={inputHendle} type="text" value={state.categoryName} name='categoryName' className="form-control" placeholder='category name' id='category_name' />
                        <p className='error'>{categoryError && categoryError.categoryName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Category description</label>
                        <textarea onChange={inputHendle} value={state.categoryDes} name='categoryDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        <p className='error'>{categoryError && categoryError.categoryDes}</p>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Update Category</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCategory;