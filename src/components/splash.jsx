import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { COLORS } from "../constants/colors";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundColor: COLORS.DARK,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Splash = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <LibraryMusicIcon style={{ color: "#fff", height: "50%", width: "50%" }} />
    </Container>
  );
};
