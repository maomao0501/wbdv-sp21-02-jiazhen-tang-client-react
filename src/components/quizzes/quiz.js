import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions
`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
                console.log(questions)
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
            <button className="btn btn-success" onClick={()=>{quizService.submitQuiz(quizId,questions)}}>Submit</button>
        </div>
    )
}

export default Quiz;