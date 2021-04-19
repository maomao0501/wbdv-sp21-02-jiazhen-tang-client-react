export const createWidget = (topicId, widget) =>
    fetch(`https://wbdv-sp21-02-jiazhen-tang.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
    // .then(widget => setWidgets((widgets) => [...widgets, widget]))


export const findWidgetsForTopic = (topicId) =>
    fetch(`https://wbdv-sp21-02-jiazhen-tang.herokuapp.com/api/topics/${topicId}/widgets`)
        .then(response => response.json())
        // .then(widgets => setWidgets(widgets))

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-sp21-02-jiazhen-tang.herokuapp.com/api/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
// export const deleteWidget = (widgetId) =>
//     fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
//         method: "DELETE"
//     })
//         .then(response => response.json())
// export const deleteWidget = (id) =>
//     fetch(`http://localhost:8080/api/widgets/${id}`, {
//         method: "DELETE"
//     })
//         .then(response => response.json())
    // }).then((status) => {
    //     setWidgets((widgets) => widgets.filter(w => w.id !== id))
    // })
export const updateWidget = (widgetId, widget) =>
    fetch(`https://wbdv-sp21-02-jiazhen-tang.herokuapp.com/api/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
// export const updateWidget = (id, widget) =>
//     fetch(`http://localhost:8080/api/widgets/${id}`, {
//         method: "PUT",
//         body: JSON.stringify(widget),
//         headers: {
//             "content-type": 'application/json'
//         }
//     })
//         .then(response => response.json())
    //     .then((status) => {
    //     setWidget({})
    //     setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
    // })

export default {
    findWidgetsForTopic, createWidget, updateWidget, deleteWidget
}