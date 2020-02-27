import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import MyButton from '../../UI/Button/Button'

const orderSummary=(props)=>{
    const ingredientSummary= Object.keys(props.ingredients)
    .map(igKey=>{
    return (<li key={igKey}>
        <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    })
    return(
        <Aux>
        <h3>Your Order</h3>
        <p>A delecious burger with following ingredients:</p>
        <ul>
        {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
        <MyButton btnStyleType="Danger" clicked={props.purchaseCancel}>CANCEL</MyButton>
        <MyButton btnStyleType="Success" clicked={props.purchaseContinue}>CONTINUE</MyButton>
    </Aux>
    )
}
export default orderSummary