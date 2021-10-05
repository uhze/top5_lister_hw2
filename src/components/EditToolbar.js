import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { closeCallback, redoCallback, undoCallback, disabled } = this.props;
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button"
                    onclick = {undoCallback}
                    disabled = {disabled}>
                        
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button"
                    onClick ={redoCallback}
                    disabled = {disabled}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button"
                    onClick={closeCallback}
                    disabled = {disabled}
                    >
                        &#x24E7;
                </div>
            </div>
        )
    }
}