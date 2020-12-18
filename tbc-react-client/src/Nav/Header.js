import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const user = JSON.parse(localStorage.getItem("myStorage"));
let onLogin = false;
if (user) {
  onLogin = true;
}
const Header = () => {
  return (
    <div className="myStyle">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <span className="span1">
            <Link className="link" to="/start">
              프로젝트 올리기
            </Link>
          </span>
          <span>
            <Link className="link" to="/discover">
              <MenuIcon />
              프로젝트 둘러보기
            </Link>
          </span>
        </Grid>

        <Grid item justify="center">
          <Link to="/" className="logo1">
            {/* 로고에 링크 걸릴지 테스트로 걸어놓았습니다 나중에 메인으로 수정할게요 */}
            <img className="logo" src="logo.png" alt="logo" />
          </Link>
        </Grid>

        <Grid item>
          <span>
            {/* <span>{user.userId}</span> */}
            <Link className="link" to="/login">
              로그인/회원가입
            </Link>
          </span>
          <span className="span2">
            <Link className="link" to="/#">
              <SearchIcon />
            </Link>
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
