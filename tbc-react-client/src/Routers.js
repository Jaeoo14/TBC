import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./member/Login";
import UserSetting from "./member/UserSetting";
import EditProject from "./components/EditProject";
import Discover from "./Discover/Discover";

class Routers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Login" component={Login} exact />
          <Route path="/u" component={UserSetting} />
          <Route path="/EditProject" component={EditProject} />
          <Route path="/discover" component={Discover} />
          <Route path="/Discover" component={Discover} />
          

        </Switch>
      </Router>
    );
  }
}
export default Routers;
