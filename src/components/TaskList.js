import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';
import './TaskList.css';

class TaskList extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem:"",
            list: []
        }
    }

    updateInput(key, value){
        this.setState({
            [key] : value
        });
    }

    addItem(){
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        });
    }

    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Type your new item here" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} className="input" />
                
                <button onClick={() => this.addItem("newItem")} className="addbutton">
                    Add
                </button>
                <br/>
                <ul className="list-group my-5">
                    {this.state.list.map(item => {
                        return(
                            <li className="list-group-item text-capitalize d-flex justify-content-between my-3"
                            key={item.id}>
                                {item.value}
                                
                                <button onClick={() => this.deleteItem(item.id)}>
                                    <BiTrash nameClass="trash" />
                                </button>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskList;