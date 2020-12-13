import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core/";

import FBButton from "./FBButton";
import Nbtn from "./Nbtn";
import Loginbtn from "./Loginbtn";
import "./../../style/Login.css";

const useStyles = makeStyles((theme) => ({
  root3: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(36),
      height: theme.spacing(58),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root3}>
      <Paper elevation={2}>
        <Grid container direction="row" justify="center" alignItems="center">
          <FBButton />
          <Nbtn />
          {/* 현타오네 */}
          <div className="text1 div1">
            ――――――――&nbsp;&nbsp;&nbsp; 또는 &nbsp;&nbsp; ――――――――
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="이메일 주소 입력"
              aria-describedby="basic-addon2"
            />
          </div>
          <div>
            <input
              type="password"
              class="form-control"
              placeholder="비밀번호 입력"
              aria-describedby="basic-addon2"
            />
          </div>
          <Loginbtn />
        </Grid>
        <div className="text1 text2">
          아직 계정이 없으신가요? <a className="a1">텀블벅 가입하기</a>
        </div>
        <hr />
        <div className="text3">
          <a className="a1">혹시 비밀번호를 잊으셨나요?</a>
        </div>
      </Paper>
    </div>
  );
}
