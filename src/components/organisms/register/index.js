import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";
import { registerUser } from "../../../redux/actions/authAction";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    loader: false,
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
  handleSubmit = async e => {
    if (this.isFormValid(this.state)) {
      this.setState({ loader: true });
      try {
        const userData = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        };
        await this.props.registerUser(userData);
        this.props.history.push("/login");
        this.setState({ loader: false });
      } catch (error) {
        this.setState({ loader: false });
        if (error.status === 409) {
          let errors = { ...this.state.errors };
          errors.email = true;
          this.setState({ errors });
        }
      }
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
      else return false;
    });

    if (checkErrors.length > 0) {
      this.setState({ errors: errors });
    } else {
      return true;
    }
  };
  render() {
    const { email, password, name, passwordConfirm, errors } = this.state;
    return (
      <div className="login-container flex-center">
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
            className={errors.name ? "error" : ""}
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Enter Email"
            className={errors.email ? "error" : ""}
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Enter Password"
            onChange={this.handleChange}
            className={errors.password ? "error" : ""}
          />
          <Input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            label="Confirm Password"
            onChange={this.handleChange}
            className={errors.passwordConfirm ? "error" : ""}
          />
          {this.state.loader ? (
            <button className="button">
              {" "}
              <Loader type="Circles" color="#fff" height={35} width={35} />
            </button>
          ) : (
            <Button value="Sign up" onClick={this.handleSubmit} />
          )}
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
export default connect(null, { registerUser })(Register);
