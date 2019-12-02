import React, { useState } from "react";
import Checkbox from "components/Checkbox";

const answers = [
  "Try new items",
  "Give myself a gift",
  "Discover new trends",
  "Save time",
  "Expert advice",
  "Access exclusive brands"
];

export default function Question3({ onSubmit, onBack }) {
  const name = "question3";
  const question = "What are the reasons you're excited to try Tailor?";
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = event => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <div>
      <p className="is-size-4 has-text-centered margin-bottom-lg">{question}</p>
      <div className="columns is-centered is-mobile">
        <div className="column is-6-tablet is-full-mobile">
          <div className="columns is-multiline is-centered is-mobile">
            {answers.map((answer, index) => (
              <Checkbox
                key={index}
                // checked={checkedItems[item.name]}
                onChange={handleChange}
                label={answer}
                name={answer.split(" ").join("_")}
              ></Checkbox>
            ))}
            <button
              className="button is-primary margin-top-xl padding-left-lg padding-right-lg"
              onClick={() => onSubmit(name, question, checkedItems)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
