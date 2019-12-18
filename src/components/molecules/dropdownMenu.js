import React from "react";
import { Link } from "react-router-dom";
import { MdList } from "react-icons/md";
const DropdownItem = props => {
  console.log(props);
  return (
    <div className="dropdown-btn">
      <span className="sub-title">{props.title}</span>
      <div className="dropdown-items">
        <ul className="ul">
          {props.items.map(category => (
            <li key={category._id}>
              <Link
                to={`/category/${category._id}`}
                className="flex-space text"
              >
                <span>{category.name}</span>
                <MdList />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DropdownItem;
