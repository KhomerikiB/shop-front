import React from "react";
import { FaMinus } from "react-icons/fa";
import Input from "../atoms/input";
const Filter = props => {
  const { className, title, items } = props;
  return (
    <div className="filter-wrapper">
      <div className="head flex-space">
        {title} <FaMinus />
      </div>
      <ul className={`filter-items ${className}`}>
        {items.map(item => (
          <label className="item">
            <Input
              type="radio"
              name={item.name}
              onChange={props.onChange}
              value={item.value}
            />
            <span>$ {item.value}</span>
          </label>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
