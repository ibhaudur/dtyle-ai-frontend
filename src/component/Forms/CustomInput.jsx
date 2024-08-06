import React from "react";

const CustomInput = ({ label, type, placeholer }) => {
  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <input
            type={type}
            placeholder={placeholer}
            className={`form-control form-input`}
          />
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholer}
            className={`form-control form-input`}
          />
        );
    }
  };
  return (
    <div className="mb-2">
      <label className="mb-2">{label}</label>
      {renderInput()}
    </div>
  );
};

export default CustomInput;
