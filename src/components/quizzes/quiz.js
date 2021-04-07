import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions
`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    },[])
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul>
                {
                    questions.map((question) => {
                        return (
                            <li>
                                <Question question={question}/>
                                {/*<h4>{question.title}</h4>*/}
                                {/*<h5>{question.question}</h5>*/}
                                {/*<p>{question.correct}</p>*/}
                                {/*{JSON.stringify(question)}*/}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;