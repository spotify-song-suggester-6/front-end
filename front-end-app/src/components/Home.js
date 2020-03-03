import React from "react";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {},
  nav: {
    backgroundColor: "black",
    "& a": {
      margin: "0 2rem",
      backgroundColor: "grey",
      textDecoration: "none",
      color: "white"
    }
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={classes.nav}>
        <Nav />
      </div>
      <h2> This is the home page</h2>
    </div>
  );
}
export default Home;
