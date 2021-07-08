import * as React from "react";
import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo.png";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props}>
      <Typography
        variant="h7"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <a href="http://localhost:3000">
        <img src={Logo} alt="Komunikate" width="370em" />
      </a>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
