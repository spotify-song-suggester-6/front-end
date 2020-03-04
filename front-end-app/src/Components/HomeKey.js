import React from "react";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {
    backgroundColor: "red"
  }
}));

function HomeKey() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Nav />
      <h2> This is the home page</h2>
    </div>
  );
}
export default HomeKey;
