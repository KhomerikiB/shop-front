import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../../redux/actions/authAction";
import { restoreSearchedItems } from "../../../redux/actions/searchAction";
import Search from "../../molecules/search";
import { getAllCategory } from "../../../redux/actions/categoryAction";
import HeaderDopdown from "../../molecules/headerDropdown";
const Header = props => {
  const [backPath, setBackPath] = useState("/");
  useEffect(() => {
    props.getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    props.restoreSearchedItems();
    if (typeof props.location.state !== "undefined") {
      setBackPath(props.location.state.history.path);
    } else {
      console.log(props.location);
      setBackPath("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history.location.pathname, props.location.state]);
  const logOut = () => {
    props.logOutUser();
    props.history.push("/");
  };
  return (
    <div className="flex-center header-wrapper">
      <div className={`header ${props.scrolled ? "active" : ""}`}>
        <div className="flex-space header-inner-wrapper">
          <div className="main">
            <div className="back-wrapper">
              <Link to={backPath} className="flex-center">
                <IoIosArrowRoundBack size="27" />
                Back to Shop
              </Link>
            </div>
            <HeaderDopdown title="Categories" categories={props.categories} />
          </div>
          <div className="flex-space right-side-wrapper">
            <div className="search-box">
              <Search />
            </div>
            {props.auth.isAuthenticated ? (
              <>
                <div className="account">
                  <Link to="/cart" className="flex-center">
                    Cart
                    <FiShoppingCart size="17" style={{ marginLeft: "1rem" }} />
                  </Link>
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
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  categories: state.categories.categories
});
export default connect(mapStateToProps, {
  logOutUser,
  restoreSearchedItems,
  getAllCategory
})(withRouter(Header));
