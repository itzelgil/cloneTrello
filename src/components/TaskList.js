import React, { Component } from "react";
import { BiTrash } from "react-icons/bi";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Write here"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
          className="input"
        />

        <button onClick={() => this.addItem("newItem")} className="addbutton">
          Add
        </button>
        <br />
        <div>
          <ul className="list-group my-5">
            {this.state.list.map((item, index) => {
              return (
                <div className="list">
                  <li
                    className="list-group-item text-capitalize d-flex justify-content-between border-radius my-3"
                    key={item.id}
                    id="containerTaskList"
                  >
                    {item.value}

                    <button
                      onClick={() => this.deleteItem(item.id)}
                      className="trash"
                    >
                      <BiTrash className="trash" />
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskList;
