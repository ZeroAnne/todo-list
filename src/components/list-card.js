import React, { useState } from 'react';
import '../App.scss';
//bootstrap
import Card from 'react-bootstrap/Card';
//icon
import { X } from 'react-bootstrap-icons';
//引用勾子Hooks
import { useList } from '../hooks/use-list'



export default function ListCard() {
  //Hooks
  const {
    allThings,
  } = useList()
  // 勾選刪除判斷
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
    {}
      <div className="mt-3">
        <Card className='decorative-line-card'>
          <Card.Body className='d-flex justify-content-between align-items-center'>
            <div className={isChecked ? 'text-decoration-line-through' : ''}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
                className="me-4 checkbox-large form-check-input"
              />吃飯
            </div>
            <div>
              <button className='btn'>
                <X className='thirdcolor' size={36}/>
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
