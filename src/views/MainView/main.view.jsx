import React, { useEffect, useState } from "react";
import { AuthView, HomeDashboard } from "../";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "../../components/privateRoute";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUID } from "../../store/actions/User/actions/user.actions";
import { Splash } from "../../components/splash";

export const MainView = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [splashVisible, setSplashVisible] = useState(false);

  useEffect(() => {
    setSplashVisible(true);
    firebase.auth().onAuthStateChanged(
      (auth) => {
        setTimeout(() => setSplashVisible(false), 1000);
        
        if (auth?.uid) {
          dispatch(setUID(auth.uid));
        } else {
          dispatch(setUID(null));
        }
      },
      (error) => setSplashVisible(false)
    );
  }, []);

  if (splashVisible) {
    return <Splash />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthView} />
        <PrivateRoute
          path="/"
          exact
          component={HomeDashboard}
          isAuthenticated={!!user?.uid}
        />
        {user?.uid ? <Redirect to="/" /> : <Redirect to="/login" />}
      </Switch>
    </Router>
  );
};
