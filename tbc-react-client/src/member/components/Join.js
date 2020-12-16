import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core/";

import FBButton from "./Login/FBButton";
import Nbtn from "./Login/Nbtn";
import "../style/Login.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root3: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(36),
      height: theme.spacing(70),
    },
  },

  button: {
    margin: theme.spacing(1.5),
    marginBottom: theme.spacing(0),
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

export default function Join() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div className={classes.root3}>
        <Paper elevation={2}>
          <Grid container direction="row" justify="center" alignItems="center">
            <FBButton />
            <Nbtn />
            <form>
              <div className="text1 div1">
                ――――――――&nbsp;&nbsp;&nbsp; 또는 &nbsp;&nbsp; ――――――――
              </div>
              <div className="input-group-sm">
                이름
                <input
                  type="text"
                  className="form-control"
                  placeholder="사용하실 이름을 입력해주세요"
                />
              </div>
              <div className="input-group-sm mar">
                이메일 주소
                <input
                  type="text"
                  className="form-control"
                  placeholder="이메일 주소를 입력해주세요"
                />
                <input
                  type="password"
                  class="form-control"
                  placeholder="이메일 주소를 확인합니다"
                />
              </div>
              <div className="input-group-sm mar">
                비밀번호
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="비밀번호를 입력해주세요"
                />
                <input
                  type="password"
                  class="form-control"
                  placeholder="비밀번호를 확인합니다"
                />
              </div>
            </form>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              회원가입
            </Button>
          </Grid>
          <hr />
          <div className="text3">
            <div className="text3">이미 계정이 있으신가요?</div>
            <Link to={"/login"} className="a1">
              기존 계정으로 로그인하기
            </Link>
          </div>
        </Paper>
      </div>
    </Grid>
  );
}
