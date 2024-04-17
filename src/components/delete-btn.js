import React from 'react'
//icon 
import { X } from 'react-bootstrap-icons';
//引用勾子Hooks
import { useList } from '../hooks/use-list'

export default function DeleteBtn() {
  //Hooks
  const { handleAllDelete } = useList()
  return (
    <>
      <button className='btn d-flex align-items-center' onClick={handleAllDelete}>
        <X className='secondcolor' size={28} />
        <p style={{ margin: "0" }}>Delete all things</p>
      </button>
    </>
  )
}
