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
        
        <Row >
          <Col className="col1" >
            <h1 className="addItem">Add Item</h1>
            <TaskList />
          </Col>
          
          <Col className="col2" >
            <h1 className="inProcess">In Process</h1>
            <InProcess />
          </Col>
          
          <Col className="col3" >
            <h1 className="Done">Done</h1>
            <DoneTasks />
          </Col>

        </Row>
      </Container>

      
    )
  }
}

export default App;