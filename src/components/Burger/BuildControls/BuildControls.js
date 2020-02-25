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
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(buildControl=>
        <BuildControl 
        key={buildControl.label} 
        label={buildControl.label} 
        ingredientAdded={()=>props.addIngredient(buildControl.type)}
        removeHandler={()=>props.removeHandler(buildControl.type)}
        disabledHandler={props.disabledHandler[buildControl.type]}/>
         )}
        <button disabled={props.purchasable} className={styleClass.OrderButton} onClick={props.isPurchasing}>ORDER NOW</button>
    </div>
)
export default buildControls;