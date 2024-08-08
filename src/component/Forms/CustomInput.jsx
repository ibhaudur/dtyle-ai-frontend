import React, { useState } from "react";

const CustomInput = ({
  label,
  type,
  placeholder,
  specialClass,
  options,
  valKey,
  labelKey,
  defaultlabel,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={`form-control form-input ${specialClass}`}
          />
        );
      case "select":
        return (
          <select className={`form-select form-input ${specialClass}`}>
            <option value="">{label ? `Select ${label}` : defaultlabel}</option>
            {options.map((item, index) => (
              <option key={index} value={item[valKey]}>
                {item[labelKey]}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            className={`form-control form-input ${specialClass}`}
          />
        );
    }
  };
  return (
    <div className={type === "password" ? "position-relative" : ""}>
      {label && <label className="mb-2 label">{label}</label>}
      {renderInput()}
      {type === "password" && (
        <div
          className="d-flex f-13 align-items-center position-absolute"
          type="button"
          style={{ top: "60%", right: "15px" }}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <span className="">Hide</span>
          ) : (
            <span className="">Show</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
