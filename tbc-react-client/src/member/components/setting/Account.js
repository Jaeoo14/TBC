import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../../style/Setting.css";
import { Paper } from "@material-ui/core/";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      userId: "",
      pwd: "",
      name: "",
      nickname: "",
      intro: "",
      tel: "",
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("myStorage"));
    this.setState({
      id: user.id,
      userId: user.userId,
      pwd: user.pwd,
      name: user.name,
      nickname: user.nickname,
      intro: user.intro,
      tel: user.tel,
    });
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div id="div1">이메일</div>
          <br />
          <div>{this.state.userId}</div>
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
          <div
            readonly
            defaultValue="미등록 상태입니다."
            value={this.state.tel}
          ></div>
          <hr />
          <div id="div1">
            페이스북 계정 연동
            <span>
              <a href="#">미구현</a>
            </span>
          </div>
          <br />
          <div>연동된 페이스북 계정이 없습니다.</div>
          <hr />
          <div id="div1">
            네이버 계정 연동
            <span>
              <a href="#">미구현</a>
            </span>
          </div>
          <br />
          <div>연동중 입니다.</div>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper id="paper" variant="outlined">
            <p class="p1">이메일과 연락처는 어디에 쓰이나요?</p>
            <div class="p2">
              이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다.
              배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요&nbsp;
              <Link to="#">{"내 후원현황 바로가기"}</Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Account;
