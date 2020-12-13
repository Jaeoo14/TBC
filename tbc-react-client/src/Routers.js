import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route path="/u" component={UserSetting} />
          <Route path="/EditProject" component={EditProject} />
        </Switch>
      </Router>
    );
  }
}
export default Routers;
