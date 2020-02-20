import React from 'react'
import styleClass from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger=(props)=>{
const transformedIngredients=Object.keys(props.ingredients)
.map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredients key={igkey+i } type={igkey}/>  
        })
    })
    return(
        <div className={styleClass.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger