import React from 'react'
import styleClasses from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

// class BurgerIngredient extends Component{
//     render(){
//         let ingredient=null;

//         switch(this.props.type){
//             case('bacon'):
//             ingredient=<div className={styleClasses.Bacon}></div>
//             break;
    
//             case('salad'):
//             ingredient=<div className={styleClasses.Salad}></div>
//             break;
    
//             case('cheese'):
//             ingredient=<div className={styleClasses.Cheese}></div>
//             break;
    
//             case('meat'):
//             ingredient=<div className={styleClasses.Meat}></div>
//             break;
    
//             case('bread-top'):
//             ingredient=(<div className={styleClasses.BreadTop}>
//                 <div className={styleClasses.Seeds1}></div>
//                 <div className={styleClasses.Seeds2}></div>
//             </div>)
//             break;
    
//             case('bread-bottom'):
//             ingredient=<div className={styleClasses.BreadBottom}></div>
//             break;
    
//             default:
//                 ingredient=null
//         }
//         return ingredient
//     }
// }

const BurgerIngredient=(props)=>{
    let ingredient=null;

        switch(props.type){
            case('bacon'):
            ingredient=<div className={styleClasses.Bacon}></div>
            break;
    
            case('salad'):
            ingredient=<div className={styleClasses.Salad}></div>
            break;
    
            case('cheese'):
            ingredient=<div className={styleClasses.Cheese}></div>
            break;
    
            case('meat'):
            ingredient=<div className={styleClasses.Meat}></div>
            break;
    
            case('bread-top'):
            ingredient=(<div className={styleClasses.BreadTop}>
                <div className={styleClasses.Seeds1}></div>
                <div className={styleClasses.Seeds2}></div>
            </div>)
            break;
    
            case('bread-bottom'):
            ingredient=<div className={styleClasses.BreadBottom}></div>
            break;
    
            default:
                ingredient=null
        }
        return ingredient
}

BurgerIngredient.propTypes={
    type:PropTypes.string.isRequired
}

export default BurgerIngredient