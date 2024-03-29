import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetch("https://wbdv-sp21-02-backend.herokuapp.com/api/quizzes")
        // fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    },[])
    return (
      <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>Quizzes({quizzes.length})</h2>
          <ul>
              {
                  quizzes.map((quiz) => {
                      return (
                          <li>
                              <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                  {quiz.title}
                              </Link>
                          </li>
                      )
                  })
              }
          </ul>
      </div>
    );
}

export default QuizzesList;