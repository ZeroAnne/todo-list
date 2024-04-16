import React from 'react';
import '../App.scss';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//icon
import { Plus } from 'react-bootstrap-icons';
//component
import ListSorted from '../components/list-sorted'
//引用勾子Hooks
import { useList } from '../hooks/use-list'

export default function ListAdd() {
    //Hooks
    const {
        inputValue,
        handleInputChange,
        handleButtonClick,
    } = useList()
    return (
        <>
            <div className='container fixed-bottom py-3'>
                <div className='d-flex justify-content-end'>
                    <ListSorted />
                </div>
                <hr></hr>
                <h5 className=''>Add to list</h5>
                <div>
                    <InputGroup className="mb-3 list-word">
                        <Form.Control
                            placeholder="Add things to do"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputValue}  // 輸入內容
                            onChange={handleInputChange}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault(); // 防止表单提交的默认行为
                                    handleButtonClick(); // 触发添加项目的函数
                                }
                            }}
                            style={{ color: 'rgb(131, 132, 221)', fontSize: "18px" }}
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
