import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Line } from 'rc-progress';
import ListCard from './components/list-card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Plus } from 'react-bootstrap-icons';


function App() {
  //顯示清單的所有內容
  const [allThings, setAllThings] = useState("");
  // 輸入值的狀態
  const [inputValue, setInputValue] = useState('');  

  // 输入值儲存狀態
  const handleInputChange = (e) => {
    setInputValue(e.target.value);  // 更新状态
  };

  // 处理按钮点击的函数
  const handleButtonClick = () => {
    console.log("輸入",inputValue);  
    // 儲存至所有清單內容狀態
    setAllThings(inputValue);
    //清空輸入欄位
    setInputValue('');
    console.log("所有清單",allThings);

  };
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
        <div>
          <h5>Add to list</h5>
          <div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Add things to do"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={inputValue}  // 輸入內容
                onChange={handleInputChange} 
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className='butn-bg'
                style={{ border: 'none' }}
                onClick={handleButtonClick}  // 送出輸入內容
              >
                <Plus className='text-white' size={36} />
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
