import React from "react";
import {useState, useEffect} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const BACKEND_URL = "https://wbdv-generic-server.herokuapp.com/api/jiazhentang";
const WidgetList = () => {
    const {topicId} = useParams();
    const [widgets, setWidgets] = useState([]);
    const [widget, setWidget] = useState({});
    useEffect(() => {
        fetch(`${BACKEND_URL}/topics/${topicId}/widgets`)
        // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    },[topicId])

    const createWidget = (widget_type) => {
        fetch(`${BACKEND_URL}/topics/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify({type: widget_type, size: 2, text: "New Widget"}),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    const deleteWidget = (id) =>
        fetch(`${BACKEND_URL}/widgets/${id}`, {
            method: "DELETE"
        }).then((status) => {
            setWidgets((widgets) => widgets.filter(w => w._id !== id))
        })

    const updateWidget = (id, widget) =>
        fetch(`${BACKEND_URL}/widgets/${id}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                    "content-type": 'application/json'
            }
        }).then((status) => {
            setWidget({})
            setWidgets((widgets) => widgets.map(w => w._id === id ? widget : w))
        })




    return (
        <div>
            <i onClick={() => createWidget(document.getElementById("widgetTypeList").value)} className="fas fa-plus float-right fa-2x"></i>
            <select class="btn btn-success dropdown-toggle float-right" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="widgetTypeList">
                <option className="dropdown-item" value={"HEADING"}>Heading</option>
                <option className="dropdown-item" value={"PARAGRAPH"}>Paragraph</option>
            </select>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget._id} className="list-group-item">
                            {
                                _widget._id === widget._id &&
                                    <>
                                        <i onClick={() => deleteWidget(_widget._id)} className="fas fa-trash float-right"></i>
                                        <i onClick={() => {
                                            updateWidget(_widget._id, widget)
                                        }} className="fas fa-check float-right"></i>
                                    </>
                            }
                            {
                                _widget._id !== widget._id &&
                                    <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>

                            }

                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget._id === widget._id}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget._id === widget._id}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "LIST" &&
                                <ListWidget
                                    setWidget={setWidget}
                                    editing={_widget._id === widget._id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    setWidget={setWidget}
                                    editing={_widget._id === widget._id}
                                    widget={_widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList;

// const WidgetList = () => {
//     const {topicId} = useParams();
//     const [widgets, setWidgets] = useState([]);
//     const [widget, setWidget] = useState({});
//     useEffect(() => {
//         fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
//             .then(response => response.json())
//             .then(widgets => setWidgets(widgets))
//     },[topicId])
//
//     const createWidget = () => {
//         fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
//             method: 'POST',
//             body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
//             headers: {
//                 "content-type": 'application/json'
//             }
//         })
//             .then(response => response.json())
//             .then(widget => setWidgets((widgets) => [...widgets, widget]))
//     }
//
//     const deleteWidget = (id) =>
//         fetch(`http://localhost:8080/api/widgets/${id}`, {
//             method: "DELETE"
//         }).then((status) => {
//             setWidgets((widgets) => widgets.filter(w => w.id !== id))
//         })
//
//     const updateWidget = (id, widget) =>
//         fetch(`http://localhost:8080/api/widgets/${id}`, {
//             method: "PUT",
//             body: JSON.stringify(widget),
//             headers: {
//                 "content-type": 'application/json'
//             }
//         }).then((status) => {
//             setWidget({})
//             setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
//         })
//
//     return (
//         <div>
//             <i onClick={createWidget} className="fas fa-plus float-right fa-2x"></i>
//             <h1>Widget List</h1>
//             <ul className="list-group">
//                 {
//                     widgets.map(_widget =>
//                         <li key={_widget.id} className="list-group-item">
//                             {
//                                 _widget.id === widget.id &&
//                                     <>
//                                         <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
//                                         <i onClick={() => {
//                                             updateWidget(_widget.id, widget)
//                                         }} className="fas fa-check float-right"></i>
//                                     </>
//                             }
//                             {
//                                 _widget.id !== widget.id &&
//                                     <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
//
//                             }
//
//                             {
//                                 _widget.type === "HEADING" &&
//                                 <HeadingWidget
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                             {
//                                 _widget.type === "PARAGRAPH" &&
//                                 <ParagraphWidget
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// const stpm = (state) => ({
//     widgets: state.widgetReducer.widgets
// })
// const dtpm = (dispatch) => ({
//     findWidgetsForTopic: (topicId) => {
//         widgetService.findWidgetsForTopic(topicId)
//             .then(widgets => dispatch({
//                 type: "FIND_ALL_WIDGETS_FOR_TOPIC",
//                 widgets
//             }))
//     },
//     createWidget: (topicId, widget) => {
//         widgetService.createWidget(topicId, {type: "PARAGRAPH", size: 2, text: "New Widget"})
//             .then(widget => dispatch({
//                 type: "CREATE_WIDGET",
//                 widget
//             }))
//     },
//
//     updateWidget: (widgetId, widget) => {
//         widgetService.updateWidget(widget._id, widget)
//             .then(status => dispatch({
//                 type: "UPDATE_WIDGET",
//                 widget
//             }))
//     },
//     deleteWidget: (widgetToDelete) => {
//         widgetService.deleteWidget(widgetToDelete._id)
//             .then(status => dispatch({
//                 type: "DELETE_WIDGET",
//                 widgetToDelete: widgetToDelete
//             }))
//     }
// })
//
// export default connect(stpm, dtpm)(WidgetList)



// export default WidgetList;

// const WidgetList = (
//     {
//         widgets=[],
//         createWidget,
//         updateWidget,
//         deleteWidget,
//         findWidgetsForTopic
//     }) => {
//     // const {topicId} = useParams();
//     const {layout, courseId, moduleId, lessonId, topicId} = useParams()
//     // const [widgets, setWidgets] = useState([]);
//     const [widget, setWidget] = useState({});
//     useEffect(() => {
//         if (topicId !== "undefined" && typeof topicId !== "undefined") {
//             findWidgetsForTopic(topicId);
//         }
//     },[topicId])
//     return (
//         <div>
//             <i onClick={() => createWidget(topicId, widget)} className="fas fa-plus float-right fa-2x"></i>
//             <h2>Widget List</h2>
//             <ul className="list-group">
//                 {
//                     widgets.map(_widget =>
//                         <li key={_widget.id} className="list-group-item">
//                             {
//                                 _widget.id === widget.id &&
//                                 <>
//                                     <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
//                                     <i onClick={() => {
//                                         updateWidget(_widget.id, widget)
//                                     }} className="fas fa-check float-right"></i>
//                                 </>
//                             }
//                             {
//                                 _widget.id !== widget.id &&
//                                 <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
//
//                             }
//
//                             {
//                                 _widget.type === "HEADING" &&
//                                 <HeadingWidget
//                                     to={`topics/${topicId}`}
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                             {
//                                 _widget.type === "PARAGRAPH" &&
//                                 <ParagraphWidget
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )}
//
// const stpm = (state) => ({
//     widgets: state.widgetReducer.widgets
// })
// const dtpm = (dispatch) => ({
//     findWidgetsForTopic: (topicId) => {
//         widgetService.findWidgetsForTopic(topicId)
//             .then(widgets => dispatch({
//                 type: "FIND_ALL_WIDGETS_FOR_TOPIC",
//                 widgets
//             }))
//     },
//     createWidget: (topicId, widget) => {
//         widgetService.createWidget(topicId, {type: "HEADING", size: 2, text: "New Widget"})
//             .then(widget => dispatch({
//                 type: "CREATE_WIDGET",
//                 widget
//             }))
//     },
//
//     updateWidget: (widgetId, widget) => {
//         widgetService.updateWidget(widget._id, widget)
//             .then(status => dispatch({
//                 type: "UPDATE_WIDGET",
//                 widget
//             }))
//     },
//     deleteWidget: (widgetToDelete) => {
//         widgetService.deleteWidget(widgetToDelete._id)
//             .then(status => dispatch({
//                 type: "DELETE_WIDGET",
//                 widgetToDelete: widgetToDelete
//             }))
//     }
// })
//
// export default connect(stpm, dtpm)(WidgetList)
//
