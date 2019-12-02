import React from "react";

export default function RadioButton({ name, onChange, value }) {
  const id = `${name}-${value}`;

  return (
    <div className="column has-text-centered">
      <input
        name={name}
        type="radio"
        className="margin-bottom-sm"
        value={value}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}
