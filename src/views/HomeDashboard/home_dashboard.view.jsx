import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants/colors";
import { getUserPersonalData, signOut } from "../../store/actions/User/actions/user.actions";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: COLORS.DARK,
  },
  title: {
    fontWeight: "bold",
    flexGrow: 1,
  },
  logOutMenuItem: {
      color: COLORS.RED,
      textTransform: "uppercase",
  }
});

export const HomeDashboard = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useState(() => {
    dispatch(getUserPersonalData(user?.uid));
  }, []);

  const toggleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
      dispatch(signOut());
      handleClose();
  }

  return (
    <AppBar position="static">
      <Toolbar classes={{ root: classes.toolbar }}>
        <Typography className={classes.title}>JAM STUDIOS</Typography>
        <IconButton color="inherit" onClick={toggleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Аккаунт</MenuItem>
          <MenuItem onClick={handleLogout} className={classes.logOutMenuItem}>Выйти</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
