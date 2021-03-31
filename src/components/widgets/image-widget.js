import React from "react";

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>Image Widget</h2>
            {
                !editing &&
                    <img
                        width={widget.width}
                        height={widget.height}
                        src={widget.src} />
            }
            {
                editing &&
                    <>
                        Image URL
                        <input
                            value={widget.src}
                            onChange = {(e) => setWidget(widget => ({...widget, src: e.target.value}))}
                            className="form-control"/>
                        Image Width
                        <input
                            value={widget.width}
                            onChange = {(e) => setWidget(widget => ({...widget, width: e.target.value}))}
                            className="form-control"/>
                        Image Height
                        <input
                            value={widget.height}
                            onChange = {(e) => setWidget(widget => ({...widget, height: e.target.value}))}
                            className="form-control"/>
                    </>
            }
        </div>
    )
};

export default ImageWidget;

