import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Nav/Header";

import Login from "./member/Login";
import Join from "./member/components/Join";
import UserSetting from "./member/UserSetting";
import Detail from "./Detail/Detail";
import Start from "./components/Start";
import EditProject from "./components/EditProject";
import Discover from "./Discover/Discover";
import Main from "./Main/Main";

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/setting" component={UserSetting} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/editproject" component={EditProject} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Main} />
        </Switch>
        <hr />
      </Router>
    );
  }
}
export default Routers;
