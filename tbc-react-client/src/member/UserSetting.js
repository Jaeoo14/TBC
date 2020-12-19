import { Component } from "react";
import Tabbar from "./components/Tabbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./style/UserSetting.css";
{
  /* member에서 데이터 불러와야 함 */
}

class UserSetting extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("myStorage"));
    if (user === null) {
      alert("로그인 하십시오");
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Container
          Width="md"
          style={{
            paddingLeft: "8.8rem",
            paddingRight: "8.8rem",
          }}
        >
          <Grid container direction="row">
            <Grid item>
              <div id="title"> 설정 </div>

              <Tabbar></Tabbar>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default UserSetting;
