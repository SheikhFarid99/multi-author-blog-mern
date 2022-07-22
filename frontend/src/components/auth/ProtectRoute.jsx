import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
const ProtectRoute = ({ path, component, exact }) => {

    const { userInfo } = useSelector(state => state.adminReducer);

    if (!userInfo) {
        return <Redirect to='/admin/login' />
    } else {
        if (userInfo.role === 'admin' || userInfo.role === 'sub admin') {
            if (userInfo.role === 'admin') {
                return <Route path={path} component={component} exact={exact} />
            } else {
                if (userInfo.accessStatus === 'block') {
                    return <Redirect to='/user/block' />
                } else {
                    return <Route path={path} component={component} exact={exact} />
                }
            }
        } else {
            if (userInfo.accessStatus === 'block') {
                return <Redirect to='/user/block' />
            } else {
                return <Redirect to='/' />
            }
        }
    }

}

export default ProtectRoute;