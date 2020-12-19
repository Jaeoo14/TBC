import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import FBButton from "./FBButton";
import Nbtn from "./Nbtn";
import validate from "./validate";
import ProjectApiService from "../../../ProjectApiService";
import "../../style/Login.css";

const useStyles = makeStyles((theme) => ({
  root3: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(36),
      height: theme.spacing(58),
    },
  },
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

function SimplePaper(props) {
  const classes = useStyles();

  const [values, setValues] = useState({ userId: "", pwd: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log(values);
    setSubmitting(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setErrors(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        ProjectApiService.login(values.userId)
          .then((res) => {
            if (values.pwd === res.data.pwd) {
              console.log("login 값", res.data);
              localStorage.setItem("myStorage", JSON.stringify(res.data));
              props.history.push("/setting");
            } else {
              console.error("잘못된 비밀번호 입니다");
              alert("잘못된 비밀번호 입니다");
            }
          })
          .catch((err) => {
            console.error("로그인 에러!", err);
            alert("시스템 에러입니다.");
          });
      } else {
        if (errors.userId !== undefined) {
          alert(errors.userId);
        } else {
          alert(errors.pwd);
        }
      }
      setSubmitting(false);
    }
  });

  return (
    <div className={classes.root3}>
      <Paper elevation={2}>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction="row" justify="center" alignItems="center">
            <FBButton />
            <Nbtn />
            <div className="logintext1 logindiv1">
              ――――――――&nbsp;&nbsp;&nbsp; 또는 &nbsp;&nbsp; ――――――――
            </div>
            <div>
              <label>
                <input
                  className="input1"
                  name="userId"
                  value={values.userId}
                  onChange={handleChange}
                  type="email"
                  class="form-control"
                  placeholder="이메일 주소 입력"
                  aria-describedby="basic-addon2"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  className="input1"
                  name="pwd"
                  value={values.pwd}
                  onChange={handleChange}
                  type="password"
                  class="form-control"
                  placeholder="비밀번호 입력"
                  aria-describedby="basic-addon2"
                />
              </label>
            </div>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              로그인
            </Button>
          </Grid>
        </form>

        <div className="logintext1 logintext2">
          아직 계정이 없으신가요?{" "}
          <Link to={"/join"} className="a1">
            텀블벅 가입하기
          </Link>
        </div>
        <hr />
        <div className="logintext1 logintext4">
          <div className="a1" onClick={(alert = "관리자에게 문의하세요")}>
            혹시 비밀번호를 잊으셨나요?
          </div>
        </div>
      </Paper>
    </div>
  );
}
export default withRouter(SimplePaper);
