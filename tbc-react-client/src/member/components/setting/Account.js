import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../../style/Setting.css";
import Paper from "@material-ui/core/Paper";

class Account extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div id="div1">
            이메일
            <span>
              <a href="#"></a> <a href="#">변경</a>
            </span>
          </div>
          <br />
          <div>이메일</div>
          {/* 미인증 / 인증 구분 */}
          <hr />
          <div id="div1">
            비밀번호
            <span>
              <a href="#">변경</a>
            </span>
          </div>
          <br />
          <hr />
          <div id="div1">
            연락처
            <span>
              <a href="#">변경</a>
            </span>
          </div>
          <br />
          <div>등록된 연락처가 없습니다.</div>
          <hr />
          <div id="div1">
            페이스북 계정 연동
            <span>
              <a href="#">연동</a>
            </span>
          </div>
          <br />
          <div>연동된 페이스북 계정이 없습니다.</div>
          <hr />
          <div id="div1">
            네이버 계정 연동
            <span>
              <a href="#">연동 or 연동해제</a>
            </span>
          </div>
          <br />
          <div>연동중 입니다.</div>
          <hr />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper id="paper" variant="outlined">
            <p class="p1">이메일과 연락처는 어디에 쓰이나요?</p>
            <div class="p2">
              이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다.
              배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요&nbsp;
              <a href="/u/brown2243"> 내 후원현황 바로가기</a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Account;
