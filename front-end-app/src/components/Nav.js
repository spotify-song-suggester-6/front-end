import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex"
  }
}));

function Nav() {
  const classes = useStyles();
  return (
    <nav classname={classes.nav}>
      <a href="./protected"> Home </a>
      <a href="./search"> Search </a>
      {/* Might make into overlay component? */}
      <a href="./about"> About </a>
      {/* Link to Jonah's about page */}
    </nav>
  );
}
export default Nav;
