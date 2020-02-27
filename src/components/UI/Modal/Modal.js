import React from 'react'
import ModalStyle from'./Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'
const modal=(props)=>
(
    <Aux>
      <Backdrop show={props.shouldShow} clicked={props.modalClosed}/>  
    <div className={ModalStyle.Modal}
    style={{
        transform:props.shouldShow?'translateY(0)':'translateY(-100vh)',
        opacity:props.shouldShow?'1':'0'
    }}>
        {props.children}
    </div>
   
    </Aux> 
)

export default modal