import React from "react";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  search: {}
}));

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <Nav />
      <h2> This is the search page</h2>
    </div>
  );
}
export default Search;
