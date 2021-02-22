import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import editor from "../css/editor.css";
import CourseRow from "./course-row";

const CourseGrid = (
    {
        courses,
        deleteCourse,
        updateCourse,
        title
    }) =>
    <div className="wbdv-top">
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-list fa-2x float-right"></i>*/}
        {/*</Link>*/}
        <h3>Course Grid {courses.length}</h3>
        <div className="container table-responsive-sm ">
            <table className="table">
                <thead>
                <tr>
                    <th style={{color:"black"}}>Recent Documents</th>
                    <th style={{color:"black"}}>Owned by me
                        <i className="fas fa-sort-down fa-2x"></i>
                    </th>
                    <th>
                        <i className="fas fa-th fa-2x" style={{color:"black"}}></i>
                        <span>&nbsp;</span>
                        <i className="fas fa-sort-alpha-up fa-2x" style={{color:"black"}}></i>
                    </th>
                    <th>
                        <Link to="/courses/table">
                            <i className="fas fa-list fa-2x float-right"></i>
                        </Link>
                    </th>
                </tr>
                </thead>
            </table>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        title={title}
                    />
                )
            }
        </div>
        </div>
    </div>

export default CourseGrid;