import React from 'react'
import styleClass from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger=(props)=>{
let transformedIngredients=Object.keys(props.ingredients)
.map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredients key={igkey+i } type={igkey}/>  
        })
    }).reduce((initialArr,element)=>{
       return initialArr.concat(element)
    },[])
    if(transformedIngredients.length===0){
        transformedIngredients=<p>please start adding ingredients!!</p>
    }
    console.log('transformedIngredients',transformedIngredients)
    return(
        <div className={styleClass.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger