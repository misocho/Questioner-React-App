import React from "react";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="login-box">
          <div className="welcome-box">
            <div className="welcome-text">Hi</div>
            <div className="page-text">Login</div>
          </div>
          <div className="login-form">
            <form>
              <div className="textbox">
                <input
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  type="text"
                  placeholder="Username"
                  name=""
                  id="username"
                />
              </div>

              <div className="textbox">
                <input
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  name=""
                  id="password"
                />
              </div>
              <div className="account page-text">
                Don't have an account? <a href="signup.html">Signup</a>
              </div>
              <div
                className="button"
                onClick={evt => {
                  console.log("clicked");
                }}
              >
                <input
                  id="signin-btn"
                  className="signup-btn"
                  type="button"
                  name=""
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

export default LoginForm;
