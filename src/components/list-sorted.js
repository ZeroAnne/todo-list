import React from 'react'
//bootstrap
import Form from 'react-bootstrap/Form';
//引用勾子Hooks
import { useList } from '../hooks/use-list'

export default function ListSorted() {
    const {
        setSorted,
      } = useList()
  return (
    <>
        <h6 className='me-2 text-center'>Move done things to end?</h6>
          <Form>
            <Form.Check
              type="switch"
              id="switch"
              onChange={e => setSorted(e.target.checked)}
            />
          </Form>
    </>
  )
}
