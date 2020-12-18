import { Component } from "react";
import "./style/UserSetting.css";
import Grid from "@material-ui/core/Grid";
import LoginCard from "./components/Login/LoginCard";
{
  /* member에서 데이터 불러와야 함 */
}
class Login extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <LoginCard></LoginCard>
        </Grid>
      </div>
    );
  }
}

export default Login;
