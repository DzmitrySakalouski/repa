import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { LoginForm } from "../../components/loginForm";
import { COLORS } from "../../constants/colors";
import { SignUpForm } from "../../components/signUpForm";
import { useSelector } from "react-redux";

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
  const classes = useStyles();
  const [loginVisible, setLoginVisible] = useState(true);
  const {user} = useSelector(state => state.user);

  const navigateToRegister = () => setLoginVisible(false);

  const navigateToLogin = () => setLoginVisible(true);

  if (user.uid) {
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
