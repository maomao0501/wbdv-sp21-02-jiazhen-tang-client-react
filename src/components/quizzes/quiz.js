import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions
`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
                console.log(questions)
            })
        fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts
`)
            .then(response => response.json())
            .then((attempts) => {
                setAttempts(attempts)
                console.log(attempts)
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
            <ol>
                {
                    attempts.map((attempt) => {
                        return (
                            <li>
                                <h4>Score: {attempt.score}</h4>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Quiz;