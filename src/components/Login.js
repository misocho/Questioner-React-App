import React from "react";
import { Alert } from "reactstrap";

const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          this.setState({
            message: data.message
          });
        }
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
            <form onSubmit={this.handleSubmit}>
              <div className="textbox">
                <input
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                  type="text"
                  placeholder="Username"
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
                  name="password"
                  id="password"
                />
              </div>
              <div className="account page-text">
                Don't have an account? <a href="/signup">Signup</a>
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

export default LoginForm;
