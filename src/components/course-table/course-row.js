import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newOwner, setNewOwner] = useState(owner)
    const [newLastModified, setNewLastModified] = useState(lastModified)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            owner: newOwner,
            lastModified: newLastModified
        }
        updateCourse(newCourse)
    }


    return (
        <>
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/editor/edit/${course._id}`}>
                        {/*
                            <Link to={`/courses/editor/${course._id}`}>
                         */}
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>

            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {owner}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewOwner(event.target.value)}
                        value={newOwner}
                        className="form-control"/>
                }
            </td>

            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {lastModified}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewLastModified(event.target.value)}
                        value={newLastModified}
                        className="form-control"/>
                }
            </td>

            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x"></i>
                <span>&nbsp;&nbsp;</span>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x"></i>}
                <span>&nbsp;&nbsp;</span>
                {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x"></i>}
            </td>
        </tr>
        </>
    )
}
export default CourseRow;