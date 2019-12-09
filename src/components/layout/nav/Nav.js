import React from "react";
import { FiPlus } from "react-icons/fi";
const Nav = () => {
  return (
    <div className="nav top-wrapper">
      <div className="nav__header">
        <p className="title blue-text">ECOM STORE</p>
        <p className="sub-title">Discover future</p>
      </div>
      <ul className="ul">
        <li className="flex-space">
          <span>Category 1</span>
          <FiPlus />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
