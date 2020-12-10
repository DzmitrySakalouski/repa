import React, { useEffect } from "react";
import { AuthView, HomeDashboard } from "../";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "../../components/privateRoute";
import firebase from "firebase";

export const MainView = (props) => {
  const isAuthenticated = false;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("onAuthStateChanged", user.uid);
    });
  }, []);

  return (
      <Router>
        <Switch>
          <Route path="/login" component={AuthView} />
          <PrivateRoute
            path="/"
            exact
            component={HomeDashboard}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Router>
  );
};
