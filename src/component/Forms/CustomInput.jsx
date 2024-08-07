import React from "react";

const CustomInput = ({
  label,
  type,
  placeholer,
  specialClass,
  options,
  valKey,
  labelKey,
}) => {
  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <input
            type={type}
            placeholder={placeholer}
            className={`form-control form-input ${specialClass}`}
          />
        );
      case "select":
        return (
          <select className={`form-select form-input ${specialClass}`}>
            <option value="">Select {label}</option>
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
            placeholder={placeholer}
            className={`form-control form-input ${specialClass}`}
          />
        );
    }
  };
  return (
    <div className="mb-2">
      <label className="mb-2 label">{label}</label>
      {renderInput()}
    </div>
  );
};

export default CustomInput;
