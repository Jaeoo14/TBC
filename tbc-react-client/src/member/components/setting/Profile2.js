import { Component } from "react";
import "../../style/Setting.css";

import { Paper, Grid } from "@material-ui/core";
import Api from "../../../ProjectApiService";
import { Link, withRouter } from "react-router-dom";
import Uploadprofile from "./UploadImage";
import ProfileImage from "../ProfileImage";

const user = JSON.parse(localStorage.getItem("myStorage"));

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 기존값
      id: "",
      userId: "",
      profileImg: "",
      nickname: "",
      intro: "",
      // 변경 가능한 값
      newImg: "",
      newNick: "",
      newIntro: "",
      // 상태
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
  // edit 시작
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
  // edit 취소
  endEdit = () => {
    this.setState({
      editImg: false,
      editNick: false,
      editIntro: false,
    });
  };

  // edit 중
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //state부분만 다름

  updateNick = (e) => {
    e.preventDefault();
    if (this.state.newNick !== "") {
      console.log("intro 업데이트", this.state.newNick);
      user.nickname = this.state.newNick;
      localStorage.setItem("myStorage", JSON.stringify(user));
      Api.updateIntro(user)
        .then()
        .catch((err) => console.log(err));
      this.setState({
        nickname: user.nickname,
      });
      this.endEdit();
    } else {
      alert("입력을 하시오");
    }
  };

  updateIntro = (e) => {
    e.preventDefault();
    if (this.state.newIntro !== "") {
      console.log("intro 업데이트", this.state.newIntro);
      user.intro = this.state.newIntro;
      localStorage.setItem("myStorage", JSON.stringify(user));

      Api.updateIntro(user)
        .then()
        .catch((err) => console.log(err));
      this.setState({
        intro: user.intro,
      });
      this.endEdit();
    } else {
      alert("입력을 하시오");
    }
  };
  logout = () => {
    localStorage.clear();
    document.location.href = "/";
    // this.props.history.push("/");
  };
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div id="first">
            <div className="div1">이메일</div>
            <div className="div2">{this.state.userId}</div>
            <hr />
          </div>

          {this.state.editImg ? (
            <form>
              <div className="div1">
                <div className="div1">
                  프로필 사진
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editImg")}>
                      취소
                    </button>
                  </span>
                </div>
                <Uploadprofile mainImg={this.state.profileImg} />
              </div>

              <hr />
            </form>
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
              <div style={{ textAlign: "left", padding: "2px" }}>
                {user && <ProfileImage userId={user.id} />}
              </div>
              <hr />
            </div>
          )}

          {this.state.editNick ? (
            <form>
              <div className="div1">
                <div className="div1">
                  닉네임
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editNick")}>
                      취소
                    </button>
                  </span>
                </div>
                <input
                  id="newNick"
                  name="newNick"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control div2 input2"
                  placeholder={this.state.nickname}
                />
              </div>
              <div className="div2">
                <button class="btn btn-dark btn1" onClick={this.updateNick}>
                  저장
                </button>
              </div>
              <hr />
            </form>
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
              {this.state.nickname === "''" || this.state.nickname === "" ? (
                <div className="div2">미등록 상태입니다</div>
              ) : (
                <div className="div2">{this.state.nickname}</div>
              )}
              <hr />
            </div>
          )}

          {this.state.editIntro ? (
            <div method="put">
              <div className="div1">
                <div className="div1">
                  소개
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editIntro")}>
                      취소
                    </button>
                  </span>
                </div>
                <textarea
                  width="100px"
                  rows="5"
                  id="newIntro"
                  name="newIntro"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control div2 input2"
                  placeholder={this.state.intro}
                />
              </div>
              <div className="div2">
                <button class="btn btn-dark btn1" onClick={this.updateIntro}>
                  저장
                </button>
              </div>
            </div>
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
              {this.state.intro === "''" || this.state.intro === "" ? (
                <div className="div2">미등록 상태입니다</div>
              ) : (
                <div className="div2">{this.state.intro}</div>
              )}
              <hr />
            </div>
          )}
          <div className="div1" onClick={this.logout}>
            로그아웃
          </div>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper id="paper" variant="outlined">
            <p class="p1">어떤 정보가 프로필에 공개되나요?</p>
            <div class="p2">
              프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과
              관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 프라이버시
              설정을 활성화하시면 밀어준 프로젝트 목록을 숨길 수 있습니다.&nbsp;
              <Link to="#">내 프로필 바로가기</Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Profile);
