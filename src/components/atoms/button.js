import React from "react";

const Button = props => {
  const { className, value, onClick } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Button;
