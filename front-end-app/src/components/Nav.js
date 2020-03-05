import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    "& a": {
      margin: "0 2rem",
      backgroundColor: "grey",
      textDecoration: "none",
      color: "white"
    }
  }
}));

function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Link to="/home"> Home </Link>
      <Link to="/search"> Search </Link>
      {/* Might make into overlay component? */}
      <Link to="/favorites"> Favorites </Link>
      <Link to="/about"> About </Link>
      {/* Link to Jonah's about page */}
    </nav>
  );
}
export default Nav;
