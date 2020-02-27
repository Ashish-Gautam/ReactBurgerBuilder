import React from 'react'
import backdropStyle from './Backdrop.module.css'
const backdrop=(props)=>(
    props.show?<div className={backdropStyle.Backdrop} onClick={props.clicked}></div>:null
)
export default backdrop