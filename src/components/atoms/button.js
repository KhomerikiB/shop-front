import React from "react";

const Button = props => {
  const { className, value, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};
export default Button;
