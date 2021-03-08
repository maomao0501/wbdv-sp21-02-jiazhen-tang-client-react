import React from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        updateLesson,
        deleteLesson
    }) =>
    <div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li className="list-group-item" style={{backgroundColor:"lightgrey"}}>
                &nbsp;&nbsp;
                <i onClick={createLesson} className="fas fa-plus fa-2x" style={{color:"dodgerblue"}}></i>
            </li>
        </ul>
    </div>

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: () => {
        dispatch({type: "CREATE_LESSON"})
    },
    updateLesson: (newItem) => {
        dispatch({type: "UPDATE_LESSON", updateLesson: newItem})
    },
    deleteLesson: (lessonToDelete) => {
        dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete})
    }
})

export default connect(stpm, dtpm)(LessonTabs)