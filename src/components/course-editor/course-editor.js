import React from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import widgetReducer from "../reducers/widget-reducer";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import {useParams} from "react-router-dom";
import editor from "../../css/editor.css";
import WidgetList from "../widgets/widget-list";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout} = useParams();
    const {courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
        <ul className="nav wbdv-sticky-nav-bar" style={{backgroundColor: "grey"}}>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left fa-2x" style={{color: "white"}}></i>
            </Link>
            <li className="wbdv-padding">
                <h2 style={{color: "white"}}>Web Dev Selected Course</h2>
            </li>
            <li className="nav-item  wbdv-padding">
                <i onClick={() => history.goBack()}
                   className="fas fa-times fa-2x float-right" style={{color: "white"}}></i>
            </li>
        </ul>
            <div className="row wbdv-top">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                    <br/>
                    <WidgetList/>
                </div>
            </div>
        </Provider>
    )}

export default CourseEditor;
