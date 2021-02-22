import React from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import editor from "../css/editor.css";

const CourseEditor = ({history}) =>
    <div>
        <ul className="nav wbdv-sticky-nav-bar" style={{backgroundColor:"grey"}}>
            {/*<li>*/}
            {/*    <i className="fas fa-times fa-2x"></i>*/}
            {/*</li>*/}
            <Link to="/courses/table">
                <i className="fas fa-arrow-left fa-2x" style={{color:"white"}}></i>
            </Link>
            <li className="wbdv-padding">
                <p>
                    CS5610 - WebDev
                </p>
            </li>
            <li className="nav-item wbdv-padding-right">
                <span>Build</span>
            </li>
            <li className="nav-item wbdv-padding">
                <span>Pages</span>
            </li>
            <li className="nav-item wbdv-padding">
                <span>Theme</span>
            </li>
            <li className="nav-item wbdv-padding">
                <span>Store</span>
            </li>
            <li className="nav-item wbdv-padding">
                <span>Apps</span>
            </li>
            <li className="nav-item wbdv-padding">
                <span>Settings</span>
            </li>
            <li className="nav-item wbdv-padding">
                {/*<i className="fas fa-plus fa-2x"></i>*/}
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right fa-2x" style={{color:"white"}}></i>
            </li>
        </ul>

        <div className="row">
            <div className="col-4 wbdv-column">
                <ul class="list-group wbdv-top">
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                            Module1-jQuery
                            <i className="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module2-React
                        <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module3-Redux
                        <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module4-Native
                        <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                        </li>
                     <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module5-Angular
                        <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module6-Node
                            <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li class="list-group-item list-group-item-action wbdv-list-color" style={{color:"white"}}>
                        <a href="../courses/table">
                        Module7-Mongo
                            <i class="fas fa-times fa-2x float-right" style={{color:"white"}}></i></a>
                    </li>
                    <li>
                        <i class="fas fa-plus fa-2x wbdv-bottom" style={{color:"white"}}></i>
                    </li>
                </ul>
            </div>

            <div className="col-8 wbdv-top1">
                <ul className="nav nav-pills wbdv-top">
                    <li className="nav-item wbdv-padding-button">
                        <a className="nav-link active btn btn-secondary" aria-current="page" href="#">Topic1</a>
                    </li>
                    <li className="nav-item wbdv-padding-button">
                        <a className="nav-link active btn btn-secondary" href="#">Topic2</a>
                    </li>
                    <li className="nav-item wbdv-padding-button">
                        <a className="nav-link active btn btn-secondary" href="#">Topic3</a>
                    </li>
                    <li className="nav-item wbdv-padding-button">
                        <a className="nav-link active btn btn-secondary" href="#">Topic4</a>
                    </li>
                    <li className="nav-item wbdv-padding-button">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-plus-circle fa-2x"></i>
                        </a>
                    </li>
                </ul>

            </div>



        </div>
    </div>

export default CourseEditor;
