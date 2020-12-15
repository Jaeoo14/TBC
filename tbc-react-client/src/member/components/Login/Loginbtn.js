import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),

    width: theme.spacing(27),
    height: theme.spacing(4.5),
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#fa6462",
    "&:hover": {
      backgroundColor: "#e74f4d",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
}));

export default function LoginButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button} type="submit">
        로그인
      </Button>
    </div>
  );
}
