import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Form from 'react-bootstrap/Form';
//component
import ListCard from './components/list-card'
import ListAdd from './components/list-add'
import ListPercentline from './components/list-percentline'



function App() {

  return (
    <>
      <div className='container'>

        <h1>Todo List</h1>
        <p>Add things to do</p>
        <hr></hr>
        <div className='d-flex my-3'>
        <ListPercentline/>
        </div>
        <div className='scroll'>
          <ListCard />
        </div>
        <hr></hr>
        <div className='d-flex justify-content-end'>
          <h6 className='me-1'>Move done things to end?</h6>
          <Form>
            <Form.Check
              type="switch"
              id="switch"
            />
          </Form>
        </div>
        <ListAdd />
      </div>
    </>
  );
}

export default App;
