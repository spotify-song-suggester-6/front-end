import React from "react";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  favorites: {}
}));

function Favorites() {
  const classes = useStyles();
  return (
    <div className={classes.favorites}>
      <Nav />
      <h2> This is the fav page</h2>
    </div>
  );
}
export default Favorites;
