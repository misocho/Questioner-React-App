import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Alert } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";

import { display_message } from "../actions/message";

const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.props.display_message({ visible: false });
  }

  handleChange(prop) {
    return event => {
      this.setState({
        [prop]: event.target.value
      });
    };
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    event.preventDefault();
    axios
      .post(`${BASE_URL}/auth/signin`, {
        username,
        password
      })
      .then(response => {
        let data = response.data;
        if (data.status === 200) {
          this.props.display_message({
            message: data.message,
            color: "success",
            visible: true
          });
          setTimeout(() => {
            this.props.history.push("/");
          }, 2000);
        } else {
          this.props.display_message({
            message: data.message,
            color: "danger",
            visible: true
          });
        }
      })
      .catch(error => {
        let data = error.response.data;
        this.props.display_message({
          message: data.error,
          color: "danger",
          visible: true
        });
      });
  }

  render() {
    return (
      <div className="form-container" data-test="component-login">
        {this.props.messageBox.visible && (
          <Alert
            color={this.props.messageBox.color}
            isOpen={this.props.messageBox.visible}
            toggle={this.onDismiss}
          >
            {this.props.messageBox.message}
          </Alert>
        )}
        <div className="login-box">
          <div className="welcome-box">
            <div className="welcome-text">Hi</div>
            <div className="page-text">Login</div>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <div className="textbox">
                <input
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  name="username"
                  id="username"
                />
              </div>

              <div className="textbox">
                <input
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="account page-text">
                Don't have an account? <NavLink to="/signup">Signup</NavLink>
              </div>
              <div className="button">
                <input
                  id="signin-btn"
                  className="signup-btn"
                  type="submit"
                  name="submit"
                  value="Signin"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageBox: state.messageBox
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      display_message
    }
  )(LoginForm)
);
