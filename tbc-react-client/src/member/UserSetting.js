import { Component } from "react";
import Tabbar from "./components/Tabbar";
import "./style/UserSetting.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

{
  /* member에서 데이터 불러와야 함 */
}
class UserSetting extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <div id="title"> 설정 </div>
            <Tabbar></Tabbar>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default UserSetting;
