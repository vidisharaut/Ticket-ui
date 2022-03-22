import React from "react";

const LabelInputs = ({ label, placeholder, htmlFor }) => {
  return (
    <div className="label-inputs">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={htmlFor} placeholder={placeholder} />
    </div>
  );
};

export default LabelInputs;
