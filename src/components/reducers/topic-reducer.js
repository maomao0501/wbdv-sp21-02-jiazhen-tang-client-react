const initialState = {
    topics: [
        // {title: 'webdev', _id: '1234'},
        // {title: 'database', _id: '2345'},
        // {title: 'algorithm', _id: '3456'},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
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
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if(topic._id !== action.topicToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer
