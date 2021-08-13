import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';


class InProcess extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          newItem2:"",
          list2: []
        }
      }

      updateInput2(key, value){
        //Update react state
        this.setState({
          [key]: value
        });
      }

      addItem2(){
        //Create new item with unique ID
        const newItem2 = {
          id: 1 + Math.random(),
          value: this.state.newItem2.slice()
        };
    
        //Copy of current list of items
        const list2 = [...this.state.list2];
    
        //Add new item to the list
        list2.push(newItem2);
    
        //Update state with new list and reset newItem input
        this.setState({
          list2,
          newItem2:""
        });
      }
    
    
      deleteItem2(id) {
        //copy of current list of items
        const list2 = [...this.state.list2];
    
        //filter out item being deleted
        const updatedList2 = list2.filter(item => item.id !== id);
    
        this.setState({list2: updatedList2});
      }
    
    render() {
        return (
            <div>
              <input 
                className="input"
                type="text"
                placeholder="Write here"
                value={this.state.newItem2}
                onChange={e => this.updateInput2("newItem2", e.target.value)}
                />
                <button className="addbutton"
                  onClick={() => this.addItem2("newItem2")}
                >
                  Add
                </button>
                <br/>
                <ul className="list-group my-5">
                {this.state.list2.map(item => {
                  return(
                    <li className="list-group-item text-capitalize d-flex justify-content-between my-3"
                    key={item.id}>
                      {item.value}
                      <button className="trash"
                        onClick={() => this.deleteItem2(item.id)}
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

export default InProcess;
