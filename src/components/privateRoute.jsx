import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({component: Component, isAuthenticated, logout, ...rest}) => {
    console.log(isAuthenticated);
    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                return <Component logout={logout} />
            } else {
                return (
                    <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
                )
            }
        }} />
    )
}