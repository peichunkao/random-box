import React from 'react'
import './Box.css'

export default function Box(props) {
    const {color} = props
    return (
        <div className='box' style={{backgroundColor:`${color}`}}>
        </div>
    )
}
