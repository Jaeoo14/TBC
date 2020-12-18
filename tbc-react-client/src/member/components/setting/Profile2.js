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
      profileImg: "",
      nickname: "",
      intro: "",
      editImg: false,
      editNick: false,
      editIntro: false,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("myStorage"));
    if (user) {
      this.setState({
        id: user.id,
        userId: user.userId,
        profileImg: user.profileImg,
        nickname: user.nickname,
        intro: user.intro,
      });
    }
  }

  startEdit = (e, target) => {
    e.preventDefault();
    this.setState(
      {
        editImg: false,
        editNick: false,
        editIntro: false,
      },
      () => this.setState({ [target]: true })
    );
  };
  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div id="first">
            <div className="div1">이메일</div>
            <div className="div2">{this.state.userId}</div>
            <hr />
          </div>

          {this.state.editImg ? (
            <div>asdasd</div>
          ) : (
            <div>
              <div className="div1">
                프로필 사진
                <span>
                  <button onClick={(e) => this.startEdit(e, "editImg")}>
                    변경
                  </button>
                </span>
              </div>
              <div>
                <Avatar>D</Avatar>
              </div>
              <hr />
            </div>
          )}

          {this.state.editNick ? (
            <div>asdasd</div>
          ) : (
            <div className="div1">
              <div className="div1">
                닉네임
                <span>
                  <button onClick={(e) => this.startEdit(e, "editNick")}>
                    변경
                  </button>
                </span>
              </div>
              <div className="div2">{this.state.nickname}</div>
              <hr />
            </div>
          )}

          {this.state.editIntro ? (
            <div>asdasd</div>
          ) : (
            <div className="div1">
              <div className="div1">
                소개
                <span>
                  <button onClick={(e) => this.startEdit(e, "editIntro")}>
                    변경
                  </button>
                </span>
              </div>
              <div className="div2">{this.state.intro}</div>
            </div>
          )}
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
