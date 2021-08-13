import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';


class DoneTasks extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          newItem3:"",
          list3: []
        }
      }
 
      updateInput3(key, value){
        //Update react state
        this.setState({
          [key]: value
        });
      }

      addItem3(){
        //Create new item with unique ID
        const newItem3 = {
          id: 1 + Math.random(),
          value: this.state.newItem3.slice()
        };
    
        //Copy of current list of items
        const list3 = [...this.state.list3];
    
        //Add new item to the list
        list3.push(newItem3);
    
        //Update state with new list and reset newItem input
        this.setState({
          list3,
          newItem3:""
        });
      }
      deleteItem3(id) {
        //copy of current list of items
        const list3 = [...this.state.list3];
    
        //filter out item being deleted
        const updatedList3 = list3.filter(item => item.id !== id);
    
        this.setState({list3: updatedList3});
      }

    render() {
        return (
            <div>
              <input 
                className="input"
                type="text"
                placeholder="Type your new item here"
                value={this.state.newItem3}
                onChange={e => this.updateInput3("newItem3", e.target.value)}
                />
                <button className="addbutton"
                  onClick={() => this.addItem3("newItem3")}
                >
                  Add
                </button>
                <br/>
                <ul className="list-group my-5">
                {this.state.list3.map(item => {
                  return(
                    <li className="list-group-item text-capitalize d-flex justify-content-between border-radius my-3"
                    key={item.id}>
                      {item.value}
                      <button
                        onClick={() => this.deleteItem3(item.id)}
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

export default DoneTasks;
