import React, {useState} from 'react'
import {Link} from "react-router-dom";
import bootstrap from "../images/bootstrap.png";
import html from "../images/htmlcss.png";
import js from "../images/js.jpg";
import mysql from "../images/mysql.png";
import node from "../images/node.png";
import react from "../images/react.png";
import social from "../images/social.png";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <>
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <img src={social} style={{height:"200px", width:"250px"}}/>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <Link to="/courses/editor" className="btn btn-primary">
                            {course.title}
                        </Link>
                        {
                            !editing &&
                            <Link to="/courses/editor">
                                {title}
                            </Link>
                        }
                        {
                            editing &&
                            <input
                                onChange={(event) => setNewTitle(event.target.value)}
                                value={newTitle}
                                className="form-control"
                            />
                        }
                        <span>&nbsp;&nbsp;</span>
                        <i onClick={() => deleteCourse(course)} className="fas fa-times fa-2x" style={{color:"red"}}></i>
                        <span>&nbsp;&nbsp;</span>
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x" style={{color:"blue"}}></i>}
                        <span>&nbsp;&nbsp;</span>
                        {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x" style={{color:"green"}}></i>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard;