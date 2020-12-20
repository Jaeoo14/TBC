import React from "react";
import "./Header2.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Header2 = () => {
  return (
    <div className="myStyle">
      <ul>
        <li>
          <Link to="/discover">
            <MenuIcon />
            프로젝트 둘러보기
          </Link>
        </li>

        <li>
          <Link to="/start">프로젝트 올리기</Link>
        </li>

        <li className="login">
          <Link to="/login" style={{textDecoration:'none'}}>로그인/회원가입</Link>
        </li>

        <li className="search">
          <Link to="/#">
            <SearchIcon />
          </Link>
        </li>
        <Link to="/">
          {/* 로고에 링크 걸릴지 테스트로 걸어놓았습니다 나중에 메인으로 수정할게요 */}
          <img className="logo" src="logo.png" alt="logo" />
        </Link>
      </ul>
    </div>
  );
};

export default Header2;
