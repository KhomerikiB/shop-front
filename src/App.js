import React from "react";
import Nav from "./components/layout/nav/Nav";
import MainWrapper from "./components/layout/mainBlock/main";
import Items from "./components/organisms/items/Items";
import Header from "./components/layout/header/Header";
import Login from "./components/organisms/login";
import Register from "./components/organisms/register";
import ItemInner from "./components/organisms/items/itemInner";
import CartDetails from "./components/organisms/cart/cartDetails";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import axiosInterceptor from "./config/axiosInterceptor";
import { checkRefreshToken } from "./redux/actions/authAction";
import { getAllCart } from "./redux/actions/cartAction";
import { removeFilteredItems } from "./redux/actions/itemsAction";
import { TimelineLite, Power3 } from "gsap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.animation = React.createRef(null);
    this.mainWrapper = React.createRef(null);
  }
  componentDidMount() {
    this.isAuth();
    let tl = new TimelineLite();
    tl.to(this.animation.current, 1.7, {
      height: "0%",
      ease: Power3.easeIn
    }).to(this.mainWrapper.current, 0.5, {
      opacity: 1,
      ease: Power3.easeIn
    });
    // console.log(this.animation);
  }
  isAuth = async () => {
    await this.props.checkRefreshToken();
    axiosInterceptor();
    if (this.props.auth.isAuthenticated) this.getCarts();
    // if (this.props.token) axiosInterceptor(this.props.token);
  };
  getCarts = async () => {
    await this.props.getAllCart();
  };
  render() {
    return (
      <div className="App">
        <div className="animation" ref={this.animation}></div>
        <div className="main-outer-wrapper " ref={this.mainWrapper}>
          <Route path={["/", "/category/:id"]} exact component={Nav} />
          <Route path={"/"} component={Header} />
          <Switch>
            <Route
              path={["/", "/category/:id"]}
              exact
              render={props => (
                <MainWrapper>
                  <Items {...props} />
                </MainWrapper>
              )}
            />
            {/* <Route path="/" exact component={Items} /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/item/:id" component={ItemInner} />
            <Route path="/cart" component={CartDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  checkRefreshToken,
  getAllCart,
  removeFilteredItems
})(withRouter(App));
