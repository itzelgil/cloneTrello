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
      <Container className="container" >
        
        <Row className="row1">
          <Col className="col1" >
            <h2 className="addItem">New Task</h2>
            <TaskList />
          </Col>
          
          <Col className="col2" >
            <h2 className="inProcess">In Process</h2>
            <InProcess />
          </Col>
          
          <Col className="col3" >
            <h2 className="Done">Done</h2>
            <DoneTasks />
          </Col>

        </Row>
      </Container>

      
    )
  }
}

export default App;