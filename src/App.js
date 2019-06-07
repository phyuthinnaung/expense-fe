import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "pages/dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route render={props => <Dashboard {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
