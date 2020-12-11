import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserPersonalData} from '../../store/actions/User/actions/user.actions';

export const HomeDashboard = props => {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useState(() => {
        dispatch(getUserPersonalData(user?.uid));
    }, []);

    return (
        <div>
            Homejk;jlkj
        </div>
    )
}