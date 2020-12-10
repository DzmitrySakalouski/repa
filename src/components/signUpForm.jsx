import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, TextField, Paper, Button } from "@material-ui/core";
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/User/actions/user.actions";

const useStyles = makeStyles({
  form: {
    padding: "30px 60px",
    display: "flex",
    flexDirection: "column",
    width: 300,
  },
  input: {
    marginTop: 30,
  },
  loginButton: {
    marginBottom: 40,
    color: COLORS.BLUE,
    fontSize: 14,
    cursor: "pointer",
  },
  button: {
    marginTop: 30,
  },
});

export const SignUpForm = (props) => {
  const { loginPress } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleCreateAccount = () => {
    if (!email && !name) return;
    if (isPasswordValid()) {
      const userData = {
        email,
        name,
        password
      }

      dispatch(signUp(userData));
    }
  };

  const isPasswordValid = () => {
    return (
      password &&
      passwordConfirm &&
      password === passwordConfirm &&
      password.length > 6
    );
  };

  return (
    <Paper elevation={4}>
      <Box className={classes.form}>
        <Typography component="h6">Регистрация</Typography>
        <TextField
          id="standard-disabled"
          label="Имя"
          className={classes.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-disabled"
          label="Email"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Подтвердите Пароль"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button
          className={classes.button}
          onClick={handleCreateAccount}
          variant="contained"
          color="primary"
        >
          Создать аккаунт
        </Button>
      </Box>
      <div className={classes.loginButton} onClick={loginPress}>
        Есть аккаунт?
      </div>
    </Paper>
  );
};
