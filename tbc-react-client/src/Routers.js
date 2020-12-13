import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./member/Login";
import UserSetting from "./member/UserSetting";
import EditProject from "./components/EditProject";

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
        </Switch>
      </Router>
    );
  }
}
export default Routers;
