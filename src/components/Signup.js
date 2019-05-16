import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Alert } from "reactstrap";

const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";

class SigupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      othername: "",
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
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
    const {
      email,
      firstname,
      lastname,
      othername,
      username,
      phoneNumber,
      password,
      confirmPassword
    } = this.state;
    event.preventDefault();

    if (password !== confirmPassword) {
      this.setState({
        message: "Passwords do not match",
        color: "danger"
      });
    } else {
      fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          othername,
          username,
          phoneNumber,
          password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 201) {
            this.setState({
              message: data.message,
              color: "success"
            });
            setTimeout(() => {
              this.props.history.push("/");
            }, 2000);
          } else {
            console.log(data)
            if (data.message) {
              this.setState({
                message: data.message,
                color: "danger"
              });
            } else if(data.error) {
              this.setState({
                message: data.error,
                color: "danger"
              });
            }
          }
        });
    }
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
            <div className="welcome-text">Welcome</div>
            <div className="page-text">Create Account</div>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  autoFocus
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Firstname"
                  id="firstname"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange("firstname")}
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  id="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange("lastname")}
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Othername"
                  name="othername"
                  id="othername"
                  value={this.state.othername}
                  onChange={this.handleChange("othername")}
                />
              </div>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  autoComplete="username"
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                />
              </div>

              <div className="textbox">
                <input
                  type="number"
                  placeholder="Phonenumber"
                  name="phonenumber"
                  id="phonenumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange("phoneNumber")}
                />
              </div>

              <div className="textbox">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
              </div>

              <div className="textbox">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="new-password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange("confirmPassword")}
                />
              </div>

              <div className="account page-text">
                Already have an account? <NavLink to="/login">Login</NavLink>
              </div>
              <div className="button">
                <input
                  id="signup-btn"
                  className="signup-btn"
                  type="submit"
                  name="submit"
                  value="Create Account"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SigupForm);
