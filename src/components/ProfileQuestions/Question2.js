import React, { useState } from "react";
import Checkbox from "components/Checkbox";

const answers = ["Yes", "Somewhat", "No"];

export default function Question2({ onSubmit, onBack }) {
  const name = "question2";
  const question = "Is this your style?";
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = event => {
    onSubmit(name, question, {[event.target.name]: event.target.checked})
  };

  return (
    <div>
      <div className="columns is-mobile is-vcentered is-centered">
        <div className="column is-one-third">
          <img
            src="https://d3k6f85prfqwu9.cloudfront.net/assets/components/outfit_1_OLD_component/mobile/casual_jeans-a3031aeb03674f01528d0d482f60804a898ce6c2aa6571b1c0cff548fc315310.jpg"
            alt=""
          />
        </div>
        <div className="column is-two-fifths">
          <div className="columns is-multiline has-text-centered is-centered">
            <div className="column is-full">
              <p className="title is-4">{question}</p>
            </div>
            {answers.map((answer, index) => (
              <div className="column is-three-quarters is-paddingless">
                <Checkbox
                  key={index}
                  // checked={checkedItems[item.name]}
                  onChange={handleChange}
                  label={answer}
                  name={answer.split(" ").join("_")}
                ></Checkbox>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
