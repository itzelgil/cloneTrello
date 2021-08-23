import React, { Component } from "react";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import TaskList from "./components/TaskList";
import InProcess from "./components/InProcess";
import DoneTasks from "../src/components/DoneTasks";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <Container fluid="xl" className="container">
        <Row className="row1">
          <div className="header1">
            <img src={logo} alt="logo" className="logo" />
            <br />
            <br />

            <h1>Trello Clone made by Itzel Gil</h1>
            <br />
            <br />
          </div>
        </Row>

        <Row className="row2">
          <Col sm={{ size: "auto", offset: 1 }} className="col1">
            <br />
            <h2 className="addItem">New Task</h2>
            <br />

            <TaskList />
          </Col>

          <Col sm={{ size: "auto", offset: 1 }} className="col2">
            <br />
            <h2 className="inProcess">In Process</h2>
            <br />
            <InProcess />
          </Col>

          <Col sm={{ size: "auto", offset: 1 }} className="col3">
            <br />
            <h2 className="Done">Done</h2>
            <br />
            <DoneTasks />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
