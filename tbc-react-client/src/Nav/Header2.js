import React from "react";
import "./Header2.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const Header2 = () => {
  return (
    <div className="myStyle">
      <ul>
        <li>
          <a href="/discover">
            <MenuIcon /> 프로젝트 둘러보기
          </a>
        </li>
        <li>
          <a href="#">프로젝트 올리기</a>
        </li>
        <li className="login">
          <a href="/login"> 로그인/회원가입</a>
        </li>
        <li className="search">
          <a href="#">
            <SearchIcon />
          </a>
        </li>
      
        <a href="/login">
          {/* 로고에 링크 걸릴지 테스트로 걸어놓았습니다 나중에 메인으로 수정할게요 */}
          <img
          className="logo"
          src="logo.png"
          alt="logo"/></a>
        
      </ul>
    </div>
  );
};

export default Header2;
