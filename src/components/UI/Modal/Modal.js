import React from 'react'
import ModalStyle from'./Modal.module.css'

const modal=(props)=>
(
    <div className={ModalStyle.Modal}
    style={{
        transform:props.shouldShow?'translateY(0)':'translateY(-100vh)',
        opacity:props.shouldShow?'1':'0'
    }}>
        {props.children}
    </div>
    
)

export default modal