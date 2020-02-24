import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styleClass from './BuildControls.module.css'

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]
const buildControls=(props)=>(
    <div className={styleClass.BuildControls}>
        {controls.map(control=>
        (<BuildControl 
        key={control.label} 
        label={control.label} 
        addIngredient={()=>props.addIngredient(control.type)}/>)
         )}

    </div>
)
export default buildControls;