import React, { Component } from "react";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import { BiTrash } from "react-icons/bi";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      newItem2: "",
      newItem3: "",
      list: [],
      list2: [],
      list3: [],
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

  addItem2() {
    const newItem2 = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list2 = [...this.state.list2];

    list2.push(newItem2);

    this.setState({
      list2,
      newItem2: "",
    });
  }

  addItem3() {
    const newItem3 = {
      id: 1 + Math.random(),
      value: this.state.newItem3.slice(),
    };

    const list3 = [...this.state.list3];

    list3.push(newItem3);

    this.setState({
      list3,
      newItem3: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    var itemFound = list.find((item) => item.id === id);
    if (itemFound !== undefined) {
      const updatedList = list.filter((item) => item.id !== id);
      this.setState({ list: updatedList });
    }
    if (itemFound === undefined) {
      const list2 = [...this.state.list2];
      itemFound = list2.find((item) => item.id === id);
      if (itemFound !== undefined) {
        const list2 = [...this.state.list2];
        const updatedList2 = list2.filter((item) => item.id !== id);
        this.setState({ list2: updatedList2 });
      }
    }
    if (itemFound === undefined) {
      const list3 = [...this.state.list3];
      itemFound = list3.find((item) => item.id === id);
      if (itemFound !== undefined) {
        const updatedList3 = list3.filter((item) => item.id !== id);
        this.setState({ list3: updatedList3 });
      }
    }
  }

  dragEnd = (event) => {
    this.setState({ targetbox: null });
  };
  dragStart = (event) => {
    event.dataTransfer.setData("item.id", event.target.id);
    this.setState({ targetbox: true });
  };
  drop = (event) => {
    if (event.target.id) {
      this.moveItem(event.dataTransfer.getData("item.id"), event.target.id);
      event.dataTransfer.clearData();
    }
  };

  moveItem(id, targetid) {
    var deleteFrom;
    const list = [...this.state.list];
    var itemFound = list.find((item) => item.id.toString() === id);
    if (itemFound !== undefined) {
      deleteFrom = 1;
      //const updatedList = list.filter((item) => item.id !== id);
      //this.setState({ list: updatedList });
    }

    if (itemFound === undefined) {
      const list2 = [...this.state.list2];
      itemFound = list2.find((item) => item.id.toString() === id);
      if (itemFound !== undefined) {
        deleteFrom = 2;
        //const updatedList2 = list2.filter((item) => item.id !== id);
        //this.setState(updatedList2);
      }
    }
    if (itemFound === undefined) {
      const list3 = [...this.state.list3];
      itemFound = list3.find((item) => item.id.toString() === id);
      if (itemFound !== undefined) {
        deleteFrom = 3;
        //const updatedList3 = list3.filter((item) => item.id !== id);
        //this.setState({ list3: updatedList3 });
      }
    }

    if (targetid === "tasklistGlobal") {
      const newItem = itemFound;

      const list = [...this.state.list];

      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    } else if (targetid === "tasklistGlobal2") {
      const newItem2 = itemFound;

      const list2 = [...this.state.list2];

      list2.push(newItem2);

      this.setState({
        list2,
        newItem2: "",
      });
    } else if (targetid === "tasklistGlobal3") {
      const newItem3 = itemFound;

      const list3 = [...this.state.list3];

      list3.push(newItem3);

      this.setState({
        list3,
        newItem3: "",
      });
    }

    if (deleteFrom === 1) {
      const list = [...this.state.list];
      const updatedList = list.filter((item) => item.id.toString() !== id);
      this.setState({ list: updatedList });
    } else if (deleteFrom === 2) {
      const list2 = [...this.state.list2];
      const updatedList2 = list2.filter((item) => item.id.toString() !== id);
      this.setState({ list2: updatedList2 });
    } else if (deleteFrom === 3) {
      const list3 = [...this.state.list3];
      const updatedList3 = list3.filter((item) => item.id.toString() !== id);
      this.setState({ list3: updatedList3 });
    }
  }

  render() {
    return (
      <Container fluid="xl" className="container">
        <Row className="row1">
          <div className="header1">
            <img src={logo} alt="logo" className="logo" />
            <br />
            <br />

            <h1>Trello Clone</h1>
            <br />
            <br />
          </div>
        </Row>

        <Row className="row2">
          <Col sm={{ size: "auto", offset: 1 }} className="col1">
            <br />
            <h2 className="addItem">New Task</h2>
            <br />
            <div
              id="tasklistGlobal"
              onDrop={this.drop}
              //onDragStart={this.dragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={this.dragEnd}
            >
              <input
                type="text"
                placeholder="Write here"
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
                className="input"
              />

              <button
                onClick={() => this.addItem("newItem")}
                className="addbutton"
              >
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
                          id={item.id}
                          draggable="true"
                          onDragStart={this.dragStart}
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
          </Col>

          <Col sm={{ size: "auto", offset: 1 }} className="col2">
            <br />
            <h2 className="inProcess">In Process</h2>
            <br />
            <div
              id="tasklistGlobal2"
              onDrop={this.drop}
              //onDragStart={this.dragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={this.dragEnd}
            >
              <br />
              <ul className="list-group my-5">
                {this.state.list2.map((item) => {
                  return (
                    <li
                      className="list-group-item text-capitalize d-flex justify-content-between my-3"
                      key={item.id}
                      id={item.id}
                      draggable="true"
                      onDragStart={this.dragStart}
                    >
                      {item.value}
                      <button
                        className="trash"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <BiTrash />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col sm={{ size: "auto", offset: 1 }} className="col3">
            <br />
            <h2 className="Done">Done</h2>
            <br />
            <div
              id="tasklistGlobal3"
              onDrop={this.drop}
              //onDragStart={this.dragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={this.dragEnd}
            >
              <br />
              <ul className="list-group my-5">
                {this.state.list3.map((item) => {
                  return (
                    <li
                      className="list-group-item text-capitalize d-flex justify-content-between border-radius my-3"
                      key={item.id}
                      id={item.id}
                      draggable="true"
                      onDragStart={this.dragStart}
                    >
                      {item.value}
                      <button
                        className="trash"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <BiTrash />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
