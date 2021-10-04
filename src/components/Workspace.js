import React from "react";
export default class Workspace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 1) {
            this.handleToggleEdit(event);
        }
        else if (event.detail === 2) {
            
            this.handleUpdate(event);
        }
    }
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleDrag = (event) =>{
        
    }

    render() {
        const {currentList} = this.props;
        let itemsList =[];
        if(this.props.currentList == null){
            itemsList[0]="";
            itemsList[1]="";
            itemsList[2]="";
            itemsList[3]="";
            itemsList[4]="";
        }
        else{
            itemsList = this.props.currentList.items;
        }

        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id = "edit-items">
                        <div className="top5-item"
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}>{itemsList[0]}</div>
                        <div className="top5-item"
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}>{itemsList[1]}</div>
                        <div className="top5-item"
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}>{itemsList[2]}</div>
                        <div className="top5-item"
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}>{itemsList[3]}</div>
                        <div className="top5-item"
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}>{itemsList[4]}</div>
                    </div>
                </div>
            </div>
        )
    }
}