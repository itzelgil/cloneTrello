import React, { Component } from 'react';
import './App.css';
import {Container, Col, Row} from 'react-bootstrap';
import TaskList from './components/TaskList';
import InProcess from './components/InProcess';
import DoneTasks from './components/DoneTasks';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Container className="container" fluid="md">
        <Row className="align-items-center">
          
          <Col className="col1" md="auto">
            <h1>Add Item</h1>
            <TaskList />
          </Col>
          
          <Col className="col2" md="auto">
            <h1>In Process</h1>
            <InProcess />
          </Col>
          
          <Col className="col3" md="auto">
            <h1>Done</h1>
            <DoneTasks />
          </Col>
          
        </Row>
      </Container>

      
    )
  }
}

export default App;