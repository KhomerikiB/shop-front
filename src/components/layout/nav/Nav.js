import React, { usetState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategory } from "../../../redux/actions/categoryAction";
const Nav = props => {
  useEffect(() => {
    props.getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderCategories = () => {
    return props.categories.categories
      ? props.categories.categories.map(category => (
          <li>
            <Link to={`/category/${category._id}`} className="flex-space">
              <span>{category.name}</span>
              <FiPlus />
            </Link>
          </li>
        ))
      : "";
  };
  return (
    <div className="nav top-wrapper">
      <div className="nav__header">
        <p className="title blue-text">ECOM STORE</p>
        <p className="sub-title">Discover future</p>
      </div>
      <p className="title category-title">Categories</p>
      <ul className="ul">{renderCategories()}</ul>
    </div>
  );
};
const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(mapStateToProps, { getAllCategory })(Nav);
