import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategory } from "../../../redux/actions/categoryAction";
import Filter from "../../molecules/filter";
const Nav = props => {
  const data = [
    {
      id: 1,
      value: "100-300",
      name: "price"
    },
    {
      id: 2,
      value: "300-500",
      name: "price"
    }
  ];
  useEffect(() => {
    props.getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderCategories = () => {
    return props.categories.categories
      ? props.categories.categories.map(category => (
          <li key={category._id}>
            <Link to={`/category/${category._id}`} className="flex-space">
              <span>{category.name}</span>
              <FiPlus />
            </Link>
          </li>
        ))
      : "";
  };
  const onChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="nav top-wrapper">
      <div className="nav__header">
        <Link to="/" className="title blue-text">
          ECOM STORE
        </Link>
        <p className="sub-title">Discover future</p>
      </div>
      <p className="title category-title">Categories</p>
      <ul className="ul">{renderCategories()}</ul>
      <Filter
        onChange={onChange}
        className="price"
        title="price"
        items={data}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(mapStateToProps, { getAllCategory })(Nav);
