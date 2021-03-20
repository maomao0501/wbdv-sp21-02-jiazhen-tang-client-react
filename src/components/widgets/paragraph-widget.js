import React from "react";

const ParagraphWidget = ({widget, setWidget, editing}) =>
    <div>
        <h2>Paragraph Widget</h2>
        {
            editing &&
            <textarea
                onChange={(e) => setWidget({...widget, text: e.target.value})}
                value={widget.text}
                className="form-control"></textarea>
        }
        {
            !editing &&
                <p>
                    {widget.text}
                </p>
        }
    </div>

export default ParagraphWidget;