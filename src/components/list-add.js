import React from 'react';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//icon
import { Plus } from 'react-bootstrap-icons';
//引用勾子Hooks
import { useList } from '../hooks/use-list'

export default function ListAdd() {
    //Hooks
    const {
        // allThings,
        // setAllThings,
        inputValue,
        // setInputValue,
        handleInputChange,
        handleButtonClick,
      } = useList()
  return (
    <>
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
    </>
  )
}
