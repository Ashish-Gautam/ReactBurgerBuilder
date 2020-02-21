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
        {controls.map(buildControl=>
        <BuildControl 
        key={buildControl.label} 
        label={buildControl.label} 
        ingredientAdded={()=>props.addIngredient('meat')}/>
         )}

    </div>
)
export default buildControls;