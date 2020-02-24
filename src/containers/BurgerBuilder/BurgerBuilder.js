import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES={
    salad:1,
    meat:1,
    bacon:1,
    cheese:1

}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:5
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount; 
        
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice+priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })

    }

    removeImngredientHandler=(type)=>{

    }

    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;