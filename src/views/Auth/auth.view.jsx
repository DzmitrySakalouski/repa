import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { LoginForm } from "../../components/loginForm";
import { COLORS } from "../../constants/colors";
import { SignUpForm } from "../../components/signUpForm";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.DARK,
  },
});

export const AuthView = (props) => {
  const isAuthenticated = false;
  const classes = useStyles();

  const [loginVisible, setLoginVisible] = useState(true);

  const navigateToRegister = () => setLoginVisible(false);

  const navigateToLogin = () => setLoginVisible(true);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container maxWidth="xl" className={classes.root}>
      {loginVisible ? (
        <LoginForm registrationPress={navigateToRegister} />
      ) : (
        <SignUpForm loginPress={navigateToLogin} />
      )}
    </Container>
  );
};
