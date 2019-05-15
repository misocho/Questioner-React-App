import React from "react";

import Navigation from "../components/Navigation";
import LoginForm from "../components/Login";

import "../css/input.css";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="page-body">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
