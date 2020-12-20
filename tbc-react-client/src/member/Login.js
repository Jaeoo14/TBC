import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LoginCard from "./components/Login/LoginCard";

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
