import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
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
          <ListPercentline />
        </div>
        <div className='scroll'>
          <ListCard />
        </div>
        <ListAdd />
      </div>
    </>
  );
}

export default App;
