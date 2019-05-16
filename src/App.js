import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import CreateMeetup from "./containers/CreateMeetup";

import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="body-box">
        <BrowserRouter>
        <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/meetup" component={CreateMeetup} exact />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
