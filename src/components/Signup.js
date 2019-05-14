import React from "react";

class SigupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      othername: "",
      username: "",
      phonenumber: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleOthername = this.handleOthername.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePhonenumber = this.handlePhonenumber.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleFirstname(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleLastname(event) {
    this.setState({
      lastname: event.target.value
    });
  }

  handleOthername(event) {
    this.setState({
      othername: event.target.value
    });
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePhonenumber(event) {
    this.setState({
      phonenumber: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="login-box">
          <div className="welcome-box">
            <div className="welcome-text">Welcome</div>
            <div className="page-text">Create Account</div>
          </div>
          <div className="login-form">
            <form>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name=""
                  value={this.state.email}
                  autofocus
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Firstname"
                  id="firstname"
                  name=""
                  value={this.state.firstname}
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Lastname"
                  name=""
                  id="lastname"
                  value={this.state.lastname}
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Othername"
                  name=""
                  id="othername"
                  value={this.state.othername}
                />
              </div>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Username"
                  name=""
                  id="username"
                  value={this.state.username}
                />
              </div>

              <div className="textbox">
                <input
                  type="text"
                  placeholder="Phonenumber"
                  name=""
                  id="phonenumber"
                  value={this.state.phonenumber}
                />
              </div>

              <div className="textbox">
                <input
                  type="password"
                  placeholder="Password"
                  name=""
                  id="password"
                  value={this.state.password}
                />
              </div>

              <div className="account page-text">
                Already have an account? <a href="/login">Login</a>
              </div>
              <div className="button">
                <input
                  id="signup-btn"
                  class="signup-btn"
                  type="button"
                  name=""
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

export default SigupForm;
