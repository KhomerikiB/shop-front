import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Input from "../atoms/input";
const Filter = props => {
  const [hide, setHide] = useState(false);
  const { className, title, items } = props;
  return (
    <div className="filter-wrapper">
      <div className="head flex-space" onClick={() => setHide(!hide)}>
        {title} {hide ? <FaPlus /> : <FaMinus />}
      </div>
      <ul className={`filter-items ${className} ${hide ? "hide" : ""}`}>
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
