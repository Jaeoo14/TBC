import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Facebook from "@material-ui/icons/Facebook";
// import "./../../style/Login.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "35px",
    margin: theme.spacing(1),
    width: theme.spacing(27),
    height: theme.spacing(4.5),
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#6d84b4",
    "&:hover": {
      backgroundColor: "#5c71a0",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
}));

export default function LoginButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<Facebook />}
      >
        페이스북 아이디로 로그인
      </Button>
    </div>
  );
}
