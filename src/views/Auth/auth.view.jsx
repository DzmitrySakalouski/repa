import React from "react";
import { Redirect } from "react-router-dom";

export const AuthView = (props) => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return <div>Auth</div>;
};
