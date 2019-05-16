import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Alert } from "reactstrap";

const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      color: "",
      visible: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
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
            message: data.message,
            color: "success"
          });
          setTimeout(() => {
            this.props.history.push("/");
          }, 2000);
        } else {
          this.setState({
            message: data.message,
            color: "danger"
          });
        }
      });
  }

  render() {
    return (
      <div className="form-container">
        {this.state.message && (
          <Alert
            color={this.state.color}
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            {this.state.message}
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

export default withRouter(LoginForm);
