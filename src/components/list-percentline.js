import React from 'react'
import { Line } from 'rc-progress';
//引用勾子Hooks
import { useList } from '../hooks/use-list'

export default function ListPercentline() {
    //Hooks
    const {percentLine} = useList()
    return (
        <>
            <h5 style={{ margin: "0" }}>{percentLine}%</h5>
            <Line percent={percentLine} strokeWidth={2} trailWidth={2} strokeColor="rgb(165, 167, 247)" trailColor="white" className='ms-2' />
        </>
    )
}
