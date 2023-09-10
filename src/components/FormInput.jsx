import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormInput(props) {
  const { label, id, name, placeholder, type, icon } = props;

  const inputProps = {
    type,
    id,
    name,
    placeholder,
    required: true,
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>
        {icon && <FontAwesomeIcon icon={icon} />} {label}:
      </label>
      <input {...inputProps} />
    </div>
  );
}
