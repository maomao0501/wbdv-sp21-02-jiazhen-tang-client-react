import React from 'react'
import CourseTable from "../components/course-table/course-table";
import CourseGrid from "../components/course-grid/course-grid";
import CourseEditor from "../components/course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import manager from "../css/manager.css";

class CourseManager extends React.Component {
    state = {
        courses: []
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <div className="wbdv-sticky-nav-bar">
                    <div className="row">
                         <div className="col-1" style={{color:"white"}}>
                             <i className="fas fa-bars fa-2x"></i>
                         </div>
                        <p className="col-2">
                          Course Manager
                        </p>
                        <div className="col-8">
                            <input
                                className="form-control"
                                placeholder="New Course Title"
                            />
                        </div>
                        <div className="col-1" style={{color: "red"}}>
                            <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                </div>
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props} />}>
                </Route>

                <div className="wbdv-right">
                    <i className="fas fa-plus-circle fa-4x" style={{color:"red"}} onClick={this.addCourse}></i>
                </div>
            </div>
        )
    }
}

export default CourseManager;