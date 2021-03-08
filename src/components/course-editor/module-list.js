import React,{useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service";

const ModuleList = (
    {
        modules=[
        ],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse=(courseId)=>console.log(courseId)
    }) => {
    const {layout} = useParams();
    const {courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    },[])
    return (
        <div>
        <h2>Module List {modules.length}</h2>
        <ul className="list-group">
            {
                modules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active': ' '}`}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            // to={`/courses/editor/${courseId}/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item wbdv-mid">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>
    )
}



const stpm = (state) => ({
    modules: state.moduleReducer.modules
})
const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModuleForCourse(courseId, {title: "New Module"})
            .then(theActualModule => dispatch({
                type: "CREATE_MODULE",
                module: theActualModule
            }))
    },
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
    // updateModule: (newItem) => {
    //     dispatch({type: "UPDATE_MODULE", updateModule: newItem})
    // },
    // deleteModule: (moduleToDelete) => {
    //     dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete})
    // },
    deleteModule: (moduleToDelete) =>
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: moduleToDelete
            })),
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(theModules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: theModules
            }))
    }
})

export default connect(stpm, dtpm)(ModuleList)
