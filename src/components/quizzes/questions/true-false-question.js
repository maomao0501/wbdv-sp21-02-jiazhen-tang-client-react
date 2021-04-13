// import React from "react";
//
// const TrueFalseQuestion = ({question}) => {
//     return(
//         <div>
//             <h5>{question.question}</h5>
//             <label><input type="radio" name={question._id}/> True</label>
//             <label><input type="radio" name={question._id}/> False</label>
//             <hr/>
//         </div>
//     )
// }
//
// export default TrueFalseQuestion;

import React,{useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [grade, setGrade] = useState("")
    return(
        <div>
            <h5>{question.question}
                {
                    question.correct === yourAnswer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== yourAnswer &&
                    <i className="fas fa-times"></i>
                }
            </h5>

            <ul className="list-group">
                <li className={`list-group-item 
                ${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                    <label>
                        <input onClick={() => {
                        setGrade("true")
                    }}
                                  type="radio"
                                  name={question._id}/>
                                  True
                    </label>
                </li>
                <li className={`list-group-item 
                ${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                    <label>
                        <input onClick={() => {
                        setGrade("false")
                    }}
                               type="radio"
                               name={question._id}/>
                               False
                    </label>
                </li>
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button className="btn btn-success"
                    onClick={()=>{setYourAnswer(grade)}}>
                Grade
            </button>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion;