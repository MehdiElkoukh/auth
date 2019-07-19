import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../src/assets/images/Logo-header.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "antd";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);
const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="Header">
          <img src={logo} className="img" alt="" />

          <div className="right-side">
            <Link className="link" to="/">
              S'IDENTIFIER
            </Link>
            <Button type="primary" className="btn" shape="round">
              S'INSCRIRE
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
