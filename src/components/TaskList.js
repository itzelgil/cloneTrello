import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';


class Col1 extends Component {
  render() {
    return (
          <div>
              Add an Item...
              <br/>
              <input 
                type="text"
                placeholder="Type your new item here"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button
                  onClick={() => this.addItem()}
                >
                  Add
                </button>
                <br/>
                <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      {item.value}
                      <button
                        onClick={() => this.deleteItem(item.id)}
                      >
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
