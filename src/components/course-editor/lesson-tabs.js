import React from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import lessonService from "../../services/lesson-service";
const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule
    }) => {
    const {layout} = useParams();
    const {courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId);
        }
        // findLessonsForModule(moduleId);
    },[moduleId])
    return (
        <div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            // to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            active={lesson._id === lessonId}
                            item={lesson}/>
                    </li>
                )
            }
            <li className="list-group-item" style={{backgroundColor:"lightgrey"}}>
                <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x" style={{color:"dodgerblue"}}></i>
            </li>
        </ul>
    </div>
    )}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:");
        console.log(moduleId);
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch ({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch ({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
    // updateLesson: (newItem) => {
    //     dispatch({type: "UPDATE_LESSON", updateLesson: newItem})
    // },
    // deleteLesson: (lessonToDelete) => {
    //     dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete})
    // }
    deleteLesson:(lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lessonToDelete
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)
