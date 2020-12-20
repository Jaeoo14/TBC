import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core/";

import FBButton from "./Login/FBButton";
import Nbtn from "./Login/Nbtn";
import validate from "../components/Login/validate";
import "../style/Login.css";
import { Link, withRouter } from "react-router-dom";
import ProjectApiService from "../../ProjectApiService";

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

function Join(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    userId: "",
    checkId: "",
    pwd: "",
    checkpwd: "",
  });
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

  useEffect(
    () => {
      console.log('Join.useEffect submitting=', submitting);
      if (submitting) {
        if (Object.keys(errors).length === 0) {
          if (
            values.userId === values.checkId &&
            values.pwd === values.checkpwd
          ) {
            ProjectApiService.join(values)
              .then(() => {
                console.log("회원가입 되었습니다 로그인 하세요.");
                props.history.push("/login");
              })
              .catch((err) => {
                console.error("회원가입 전송 오류!", err);
              });
          } else if (values.userId !== values.checkId) {
            alert("이메일이 다릅니다");
          } else if (values.pwd !== values.checkpwd) {
            alert("비밀번호가 다릅니다");
          } else {
            console.error("회원가입 입력 오류");
          }
        } else {
          if (errors.userId !== undefined) {
            alert(errors.userId);
          } else {
            alert(errors.pwd);
          }
        }
        setSubmitting(false);
      }
    },
    [errors]
  );

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <form method="post" onSubmit={handleSubmit} noValidate>
          <div className={classes.root3}>
            <Paper elevation={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <FBButton />
                <Nbtn />
                <div className="logintext1 logindiv1 joinleft">
                  ――――――――&nbsp;&nbsp;&nbsp; 또는 &nbsp;&nbsp; ――――――――
                  <div className="input-group-sm" style={{ textAlign: "left" }}>
                    이름
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="사용하실 이름을 입력해주세요"
                    />
                  </div>
                  <div
                    className="input-group-sm mar"
                    style={{ textAlign: "left" }}
                  >
                    이메일 주소
                    <input
                      name="userId"
                      value={values.userId}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="이메일 주소를 입력해주세요"
                    />
                    <input
                      name="checkId"
                      value={values.checkId}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="이메일 주소를 확인합니다"
                    />
                    <div>{errors.userId && <span>{errors.userId}</span>} </div>
                  </div>
                  <div
                    className="input-group-sm mar"
                    style={{ textAlign: "left" }}
                  >
                    비밀번호
                    <input
                      name="pwd"
                      value={values.pwd}
                      onChange={handleChange}
                      type="password"
                      className="form-control input-lg"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <input
                      name="checkpwd"
                      value={values.checkpwd}
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      placeholder="비밀번호를 확인합니다"
                    />
                  </div>
                  <div>{errors.pwd && <span>{errors.pwd}</span>}</div>
                </div>
                <Button
                  variant="contained"
                  className={classes.button}
                  type="submit"
                >
                  회원가입
                </Button>
              </Grid>
              <hr />
              <div className="logintext1 logintext4">
                <div className="logintext1 logintext4">
                  이미 계정이 있으신가요?
                </div>
                <Link to={"/login"} className="a1">
                  기존 계정으로 로그인하기
                </Link>
              </div>
            </Paper>
          </div>
        </form>
      </Grid>
    </div>
  );
}

export default withRouter(Join);
