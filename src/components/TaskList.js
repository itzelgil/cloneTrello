import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';

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
                <input type="text" placeholder="Type your new item here" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />

                <button onClick={() => this.addItem("newItem")}>
                    Add
                </button>
                <br/>
                <ul className="list-group my-5">
                    {this.state.list.map(item => {
                        return(
                            <li key={item.id}>
                                {item.value}
                                <button onClick={() => this.deleteItem(item.id)}>
                                    <BiTrash />
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