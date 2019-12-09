import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { type, placeholder, onChange, className, value, name, label } = props;
  return (
    <div className="input-box">
      {label && (
        <label className={`label ${className}`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired
};
export default Input;
