import React from "react";

export default function Checkbox({ onChange, name, label, children }) {
  return (
    <div className="column">
      <button id="ck-button" className="button">
        <label>
          <input type="checkbox" value={label} name={name} onChange={onChange} />
          <span>{label}</span>
        </label>
      </button>
    </div>
  );
}
