import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import YoutubeSearchedFor from "@material-ui/icons/YoutubeSearchedFor";
// import "./../../style/Login.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: "20px",
    width: theme.spacing(27),
    height: theme.spacing(4.5),
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#1ec800",
    "&:hover": {
      backgroundColor: "#1aa501",
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
        startIcon={<YoutubeSearchedFor />}
      >
        네이버 아이디로 로그인
      </Button>
    </div>
  );
}
