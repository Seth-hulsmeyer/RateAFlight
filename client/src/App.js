import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
