const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        // const newTopic = {
        //     title: "New Topic",
        //     _id: (new Date()).getTime()
        // }
        // return {
        //     ...state,
        //     topics: [
        //         ...state.topics,
        //         newTopic
        //     ]
        // }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget._id !== action.widgetToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget._id === action.widget._id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer
