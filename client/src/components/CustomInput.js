import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, id, value, onChange } = props;

  return (
    <input
      type={type || "text"}
      className="custom-input"
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      min={type === "number" ? "0" : undefined}
    />
  );
};

export default CustomInput;
