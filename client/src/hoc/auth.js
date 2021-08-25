import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import { Alert } from 'antd';

export default function (ComposedClass, reload, adminRoute = null, masterAdminRoute = null) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (reload) {
                        props.history.push('/login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        alert('Not Authorized!!!')
                        props.history.push('/')
                    }
                    else if (masterAdminRoute && !response.payload.isMasterAdmin) {
                        alert('Not Authorized!!!')
                        props.history.push('/')
                    }
                    else {
                        if (reload === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [dispatch, props.history, user.googleAuth])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


