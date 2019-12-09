import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../../redux/actions/authAction";
import { withRouter } from "react-router-dom";
const Header = props => {
  const logOut = () => {
    props.logOutUser();
    props.history.push("/");
  };
  return (
    <div className="header flex-space">
      <div className="main flex-center">
        <IoIosArrowRoundBack size="27" />
        Back to Shop
      </div>
      <div className="flex-space">
        <div className="search-box">
          <AiOutlineSearch size="20" />
          <input type="text" placeholder="Search" />
        </div>
        {props.auth.isAuthenticated ? (
          <>
            <div className="account flex-center">
              Cart
              <FiShoppingCart size="17" style={{ marginLeft: "1rem" }} />
            </div>
            <div className="account underline flex-center" onClick={logOut}>
              Logout
              <FiLogOut size="17" style={{ marginLeft: "1rem" }} />
            </div>
          </>
        ) : (
          <div className="account underline">
            <Link to="/login">account</Link>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter(connect(mapStateToProps, { logOutUser })(Header));
