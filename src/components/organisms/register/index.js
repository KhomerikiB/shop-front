import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";
class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: {
      name: false,
      email: false,
      password: false,
      passwordConfirm: false
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    if (this.isFormValid(this.state)) {
      console.log("send data ");
    }
  };

  isFormValid = ({ name, email, password, passwordConfirm }) => {
    const errors = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.length <= 2) {
      errors.name = true;
    } else if (!emailRegex.test(email)) {
      errors.email = true;
    } else if (password.length <= 5) {
      errors.password = true;
    } else if (password !== passwordConfirm) {
      errors.passwordConfirm = true;
    }
    const checkErrors = Object.keys(errors).map(key => {
      if (errors[key]) return key;
    });

    if (checkErrors.length > 0) {
      console.log(errors);
    } else {
      return true;
    }
  };
  render() {
    const { email, password, name, passwordConfirm } = this.state;
    return (
      <div className="login-container flex-center">
        <div className="home-link">
          <Link to="/">Home</Link>
        </div>
        <div className="login">
          <p className="title">
            Register to <strong>ECOM STORE</strong>
          </p>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Enter Name"
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Enter Email"
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Enter Password"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            label="Enter Password"
            onChange={this.handleChange}
          />
          <Button value="Sign up" onClick={this.handleSubmit} />
          <p className="register">
            Already have an account?
            <span className="blue-text">
              <Link className="blue-text" to="/login">
                Sign in
              </Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default Register;
