import React from "react";

const ListWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>List Widget</h2>
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text && widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text && widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input
                        checked={widget.ordered}
                        onChange={(e) => setWidget(widget => ({...widget, checked: e.target.value}))}
                        type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea rows={10} value={widget.text} className="form-control">

                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget;