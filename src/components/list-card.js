import React from 'react';
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
    handleCheckboxChange,
    handleDelete,
  } = useList()
  // 勾選刪除判斷
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      {allThings.map((v, i) => {
        return (
          <div key={i}>
            <div className="mt-3">
              <Card className='decorative-line-card'>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                  <div className={v.checked ? 'text-decoration-line-through d-flex align-items-center' : 'd-flex align-items-center'}>
                    <input
                      type="checkbox"
                      checked={v.checked}
                      onChange={() => {
                        handleCheckboxChange(v.id);
                      }}
                      className="me-4 checkbox-large form-check-input"
                    />
                    <div className='list-word'>{v.name}</div>
                  </div>
                  <div>
                    <button className='btn' onClick={() => {
                      handleDelete(v.id)
                    }}>
                      <X className='thirdcolor' size={36} />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        )
      })}

    </>
  )
}
