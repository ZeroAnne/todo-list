import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
//component
import ListCard from './components/list-card'
import ListAdd from './components/list-add'
import ListPercentline from './components/list-percentline'
import DeleteBtn from './components/delete-btn'

function App() {
  return (
    <>
      <div className='container'>
        <h1 className='mt-2'>Todo List</h1>
        <div className='d-flex justify-content-between align-items-center'>
          <p style={{ margin: "0" }}>Add things to do</p>
          <DeleteBtn />{/* 全部清除按紐 */}
        </div>
        <hr></hr>
        <div className='d-flex my-3'>
          <ListPercentline />{/* 進度條 */}
        </div>
        <div className='scroll'>
          <ListCard />{/* 清單card */}
        </div>
        <ListAdd /> {/* 添加事項 */}
      </div>
    </>
  );
}

export default App;
