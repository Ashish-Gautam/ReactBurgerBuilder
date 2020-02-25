import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice:4.5,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseUpdate(ingredients){
       // const ingredients={...this.state.ingredients}

        const sum=Object.keys(ingredients).map((inKeys)=>{
            return(
                ingredients[inKeys]
            )
        }).reduce((sum,element)=>{
            return(sum+element)
        },0)
        this.setState({purchasable:sum>0})
    }

    purchaseHandler=()=>{
        this.setState({
            purchasing:true
        })
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
        this.updatePurchaseUpdate(updatedIngredients)
    }

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        
    
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice-priceAddition;
        this.setState({
            ingredients:updatedIngredients,totalPrice:updatedPrice
        })
        this.updatePurchaseUpdate(updatedIngredients)
    }

    render(){
        const disableIngredients ={...this.state.ingredients}
        for(let key in disableIngredients){
            disableIngredients[key]=  (disableIngredients[key]<=0)
        }
        return(
            <Auxiliary>
                <Modal shouldShow={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredient={this.addIngredientHandler} 
                removeHandler={this.removeIngredientHandler}
                disabledHandler={disableIngredients}
                price={this.state.totalPrice}
                purchasable={!this.state.purchasable}
                isPurchasing={this.purchaseHandler}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;