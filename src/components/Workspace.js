import React from "react";
export default class Workspace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.items,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 1) {
            this.handleToggleEdit(event);
        }
        else if (event.detail === 2) {
            this.handleToggleEdit(event);
            this.handleUpdate(event);

        }
    }
    handleToggleEdit = (event) => {
        
        this.setState({
            editActive: !this.state.editActive
        });
        this.handleUpdate(event);
    }
    handleUpdate = (event) => {
        if(this.state.editActive === true){
            this.setState({ text: event.target.value });
        }
        let key = event.target
        let text = event.target.value;
        this.props.editItemsCallback(key,event.target.value )
    }
        
    handleDrag = (event) =>{
        
    }

    render() {
        const {editItemsCallback} = this.props;
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
                            id = "0" 
                            onDoubleClick={this.handleClick} 
                            onClick={this.handleClick} 
                            draggable = {true} 
                            onDrag={this.handleDrag} 
                            editItemsCallback ={editItemsCallback}
                            >{itemsList[0]}</div>
                        <div className="top5-item" 
                            id = "1" onDoubleClick={this.handleClick} 
                            onClick={this.handleClick} 
                            onDoubleClick={this.handleClick} 
                            draggable = {true} 
                            onDrag={this.handleDrag} 
                            editItemsCallback ={editItemsCallback}
                            
                            >{itemsList[1]}</div>
                        <div className="top5-item" 
                            id = "2" 
                            onDoubleClick={this.handleClick} 
                            onClick={this.handleClick} 
                            draggable = {true} 
                            onDrag={this.handleDrag} 
                            editItemsCallback ={editItemsCallback}  
                        >{itemsList[2]}</div>
                        <div className="top5-item" 
                            id = "3" 
                            onDoubleClick={this.handleClick} 
                            onClick={this.handleClick} 
                            draggable = {true} 
                            onDrag={this.handleDrag} 
                            editItemsCallback ={editItemsCallback}
                        >{itemsList[3]}</div>
                        <div className="top5-item" 
                            id = "4" 
                            onDoubleClick={this.handleClick}
                            onClick={this.handleClick} 
                            draggable = {true} 
                            onDrag={this.handleDrag} 
                            editItemsCallback ={editItemsCallback}
                        >{itemsList[4]}</div>
                    </div>
                </div>
            </div>
        )
    }
}
