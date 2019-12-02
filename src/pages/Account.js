import React, { useState } from "react";
import { withFirebase } from "components/Firebase";
import { Questions } from "components/ProfileQuestions/Questions";

export default withFirebase(function Account(props) {
  const [activeQuestion, setActiveQuestion] = useState(1);

  // TODO refactor this mess
  const onSubmit = (name, question, answers) => {
    setActiveQuestion(activeQuestion + 1);
    
    props.firebase.currentUser().get().then((value) => {
      const data = value.data();

      if(data.questions[name]) {
        console.log("question exists");
        props.firebase.currentUser().set(
          {
            questions: {
              [name]: props.firebase.fieldValue.delete()
            }
          },
          { merge: true }
        ).then(() => {
          saveQuestion(name, question, answers)
        });
      } else {
        saveQuestion(name, question, answers)
      }
    });
  };

  const saveQuestion = (name, question, answers) => {
    props.firebase.currentUser().set(
      {
        questions: {
          [name]: {
            question,
            answers
          }
        }
      },
      { merge: true }
    );
  }

  return (
    <div className="container margin-top-xxl">
      {Questions.map((QuestionComponent, index) => {
        return (
          activeQuestion === index + 1 && (
            <QuestionComponent
              key={index}
              onSubmit={onSubmit}
              onBack={() => setActiveQuestion(activeQuestion - 1)}
            ></QuestionComponent>
          )
        );
      })}
    </div>
  );
});
