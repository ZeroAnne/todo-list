import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { X } from 'react-bootstrap-icons';
import '../App.scss';

export default function ListCard() {
  // 勾選刪除判斷
  const [isChecked, setIsChecked] = useState(false); 
 
  return (
    <>
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
