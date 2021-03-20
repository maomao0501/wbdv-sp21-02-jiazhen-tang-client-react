import React from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import topicService, {findTopicsForLesson} from "../../services/topic-service";
import lessonService from "../../services/lesson-service";

const TopicPills = (
    {
        topics=[],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson
    }) => {
    const {layout} = useParams();
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId);
        }
        // findTopicsForLesson(lessonId);
    },[lessonId])
    return (
        <div>
        <h2>Topic Pills</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            // to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            active={topic._id === topicId}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li className="list-group-item" style={{backgroundColor:"lightgrey"}}>
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x" style={{color:"dodgerblue"}}></i>
            </li>
        </ul>
    </div>
    )}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    // createTopic: () => {
    //     dispatch({type: "CREATE_TOPIC"})
    // },
    // updateTopic: (newItem) => {
    //     dispatch({type: "UPDATE_TOPIC", updateTopic: newItem})
    // },
    updateTopic: (topic) => {
        topicService.updateLesson(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topicToDelete
            }))
    }
    // deleteTopic: (topicToDelete) => {
    //     dispatch({type: "DELETE_LESSON", topicToDelete: topicToDelete})
    // }
})

export default connect(stpm, dtpm)(TopicPills)
