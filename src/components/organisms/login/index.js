import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/authAction";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    if (this.isFormValid(this.state)) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      this.setState({ loading: true });
      try {
        const result = await this.props.login(user);
        if (result.status === 200) {
          this.props.history.push("/");
        }
      } catch (error) {
        this.setState({ loading: false });
        this.setState({ error: error.data.error });
      }
    }
  };
  isFormValid = ({ email, password }) => email && password;
  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container flex-center">
        <div className="home-link">
          <Link to="/">Home</Link>
        </div>
        <div className="login">
          <p className="title">
            Sign in to <strong>ECOM STORE</strong>
          </p>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Enter Email"
            className={
              this.state.error.toLowerCase().includes("email") ? "error" : ""
            }
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Enter Password"
            className={
              this.state.error.toLowerCase().includes("password") ? "error" : ""
            }
            onChange={this.handleChange}
          />
          <Button value="Sign in" onClick={this.handleSubmit} />
          <p className="register">
            Do not have an account?
            <span>
              <Link className="blue-text" to="/register">
                Register
              </Link>
            </span>
          </p>
          <p className="blue-text forget">Reset your password</p>
        </div>
      </div>
    );
  }
}
export default connect(null, { login })(Login);
