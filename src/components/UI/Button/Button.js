import React from 'react'
import buttonStyle from './Button.module.css'
const button=(props)=>(
    <button className={[buttonStyle.Button,buttonStyle[props.btnStyleType]].join(' ')}
    onClick={props.clicked} >
        {props.children}
    </button>
)
export default button