import React from 'react'
import './BoxArray.css'

export default function BoxArray(props) {
    return (
        <div className='boxArray'>
            {props.children}
        </div>
    )
}
