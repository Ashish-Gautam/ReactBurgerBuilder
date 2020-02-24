import React from 'react'
import styleClasses from './BuildControl.module.css'

// const myHandler=()=>{
//     alert("buildControl")
// }
const buildControl=(props)=>(
    <div className={styleClasses.BuildControl}>
        <div className={styleClasses.label}>{props.label}</div>
        <button className={styleClasses.Less}>Less</button>
        <button className={styleClasses.More} onClick={props.addIngredient}>More</button>
    </div>
)
export default buildControl;