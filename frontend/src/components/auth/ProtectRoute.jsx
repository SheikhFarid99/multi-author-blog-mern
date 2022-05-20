import React from 'react'
import {Redirect,Route} from 'react-router-dom';
import { useSelector } from "react-redux";
const ProtectRoute = ({path,component,exact}) => {

    const {userInfo} = useSelector(state=>state.adminReducer);

    if(!userInfo){
        return <Redirect to='/admin/login' />
    }else{
        return <Route path={path} component={component} exact />
    }

}

export default ProtectRoute;