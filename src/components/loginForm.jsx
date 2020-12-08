import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, TextField, Paper, Button } from "@material-ui/core";
import { COLORS } from "../constants/colors";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "30px 60px",
    display: "flex",
    flexDirection: "column",
    width: 300,
  },
  input: {
    marginTop: 30,
  },
  signUpButton: {
    marginBottom: 40,
    color: COLORS.BLUE,
    fontSize: 14,
    cursor: "pointer",
  },
  button: {
      marginTop: 30,
  }
});

export const LoginForm = (props) => {
  const { registrationPress } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  return (
    <Paper elevation={4}>
      <Box className={classes.form}>
        <Typography component="h6">Вход</Typography>
        <TextField
          id="standard-disabled"
          label="Логин"
          className={classes.input}
          value={email}
        />
        <TextField
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          value={password}
        />
        <Button className={classes.button} variant="contained" color="primary">
          Войти
        </Button>
      </Box>
      <div onClick={registrationPress} className={classes.signUpButton}>
        Нет аккаунта?
      </div>
    </Paper>
  );
};
