import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Grid, Avatar } from "@material-ui/core";
import ProfileImage from "../member/components/ProfileImage";

const Header = ({}) => {
  const user = JSON.parse(localStorage.getItem("myStorage"));
  return (
    <div className="myStyle">
      <Grid
        container
        spacing={2}
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

        <Grid item>
          <Link to="/">
            <img className="logo" src="logo.png" alt="logo" />
          </Link>
        </Grid>

        <Grid item>
          <span>
            <Link className="link1">
              {user !== null ? <ProfileImage userId={user.id} /> : <Avatar />}
            </Link>
          </span>
          {user !== null ? (
            <span>
              <Link className="link" to="/setting">
                {user.nickname !== ""
                  ? user.nickname
                  : user.name !== ""
                  ? user.name
                  : user.userId}
              </Link>
            </span>
          ) : (
            <span>
              <Link className="link" to="/login">
                로그인/회원가입
              </Link>
            </span>
          )}
          <span>
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
