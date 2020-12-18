import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../../style/Setting.css";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";

class Profile extends Component {
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
    if (user) {
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
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div id="div1">
            프로필 사진
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>
            <Avatar>D</Avatar>
          </div>
          <hr />

          <div id="div1">
            닉네임
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>{this.state.nickname}</div>
          <hr />

          <div id="div1">
            소개
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>{this.state.intro}</div>
          <hr />

          <div id="div1">
            유저URL
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>u/{this.state.userId}</div>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper id="paper" variant="outlined">
            <p class="p1">어떤 정보가 프로필에 공개되나요?</p>
            <div class="p2">
              프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과
              관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 프라이버시
              설정을 활성화하시면 밀어준 프로젝트 목록을 숨길 수 있습니다.&nbsp;
              <a href="/u/brown2243">내 프로필 바로가기</a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Profile;
