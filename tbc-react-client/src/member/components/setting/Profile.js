import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../../style/Setting.css";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";

class Profile extends Component {
  if (localStorage != null){
    
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
            이름
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>닉네임</div>
          <hr />
          <div id="div1">
            사용자 이름(URL)
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>사용자 이름(URL)</div>
          <hr />
          <div id="div1">
            소개
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>소개</div>
          <hr />
          <div id="div1">
            웹사이트
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>웹사이트</div>
          <hr />
          <div id="div1">
            프라이버시
            <span>
              <button>변경</button>
            </span>
          </div>
          <br />
          <div>웹사이트</div>
          <hr />
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
