import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";
class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    console.log(e);
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
