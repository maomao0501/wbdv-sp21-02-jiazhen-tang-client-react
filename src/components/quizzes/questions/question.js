import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {
    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}/>
            }
            {/*<h4>{question.title}</h4>*/}
            {/*<h5>{question.question}</h5>*/}
            {/*<p>{question.correct}</p>*/}
            {/*<p>{question.type}</p>*/}
            {/*{JSON.stringify(question)}*/}
        </div>
    )
}

export default Question;