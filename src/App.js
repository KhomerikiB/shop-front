import React, { useState, useEffect } from "react";
import Nav from "./components/layout/nav/Nav";
import MainWrapper from "./components/layout/mainBlock/main";
import Items from "./components/organisms/items/Items";
import Header from "./components/layout/header/Header";
import Login from "./components/organisms/login";
import Register from "./components/organisms/register";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import axiosInterceptor from "./config/axiosInterceptor";
import { checkRefreshToken } from "./redux/actions/authAction";
class App extends React.Component {
  componentDidMount() {
    this.isAuth();
  }
  isAuth = async () => {
    await this.props.checkRefreshToken();
    axiosInterceptor();
    // if (this.props.token) axiosInterceptor(this.props.token);
  };
  render() {
    return (
      <div className="App">
        <div className="main-wrapper">
          <Router>
            <Route path="/" exact component={Nav} />
            <Route
              path="/"
              exact
              component={() => (
                <MainWrapper>
                  <Header />
                  <Items />
                </MainWrapper>
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Router>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token
});
export default connect(mapStateToProps, { checkRefreshToken })(App);
