import { Component } from "react";
import Tabbar from "./components/Tabbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./style/UserSetting.css";

import { withRouter } from "react-router-dom";

class UserSetting extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("myStorage"));
    if (user === null) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Container
          style={{
            paddingLeft: "3rem",
            paddingRight: "3rem",
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

export default withRouter(UserSetting);
