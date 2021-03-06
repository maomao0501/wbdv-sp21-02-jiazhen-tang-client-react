import React from 'react'
import CourseRow from "../course-table/course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                {/*<Link to="/courses/grid">*/}
                {/*    <i className="fas fa-2x fa-th float-right"></i>*/}
                {/*</Link>*/}
                <h2>Course Table</h2>
                <div className="container table-responsive-sm ">
                <table className="table wbdv-bg-color">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified</th>
                        <th>
                            <i className="fas fa-th fa-2x"></i>
                            <span>&nbsp;</span>
                            <i className="fas fa-sort-alpha-up fa-2x"></i>
                        </th>
                        <th>
                        <Link to="/courses/grid">
                            <i className="fas fa-2x fa-th float-right"></i>
                        </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
                    {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
                    {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
                    {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
