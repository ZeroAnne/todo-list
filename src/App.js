import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Line } from 'rc-progress';
import Form from 'react-bootstrap/Form';
//component
import ListCard from './components/list-card'
import ListAdd from './components/list-add'



function App() {
  
  return (
    <>
      <div className='container'>
        <h1>Todo List</h1>
        <p>Add things to do</p>
        <hr></hr>
        <div className='d-flex  my-3'>
          <h5>50%</h5>
          <Line percent={50} strokeWidth={2} strokeColor="rgb(165, 167, 247)" className='ms-3' />
        </div>
        <ListCard />
        <hr></hr>
        <div className='d-flex justify-content-end'>
          <h6 className='me-1'>Move done things to end?</h6>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
            />
          </Form>
        </div>
        <ListAdd/>

      </div>


    </>
  );
}

export default App;
