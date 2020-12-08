import React from "react";
import { AuthView, HomeDashboard } from "../";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "../../components/privateRoute";

export const MainView = (props) => {
  const isAuthenticated = false;

  return (
    <div className="main">
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
    </div>
  );
};
