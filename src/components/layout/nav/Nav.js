import React from "react";
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
  const onChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="nav">
      <Filter
        onChange={onChange}
        className="price"
        title="price"
        items={data}
      />
    </div>
  );
};
export default Nav;
