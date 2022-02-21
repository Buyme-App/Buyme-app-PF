import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import s from "./cart.module.css";
import Item from "./Item/Item";
import {Link} from "react-router-dom";
import {CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, ADD_ONE_TO_CART,FILL_CART} from "../../../redux/actions/index.js"

export default function Cart(props) {

  const cartState = useSelector((state) => state.cart);
  console.log('CART>>>>>>>>>>>>>>>>', cartState)
  const dispatch = useDispatch();

  // const[changeState, setChangeState] = useState({})
  //df
  
 
  useEffect(() => {
  if(!cartState){
     dispatch({type:FILL_CART})
  }
}, [dispatch])
 


 useEffect(() => {
   if(!cartState){
   localStorage.setItem("cart", JSON.stringify(cartState))
   }else{
     console.log('Estoy en el If')
   }
 }, [cartState])

//  useEffect(() => {
//   let data= localStorage.getItem("cart")
//   if(data){
//    setChangeState(JSON.parse(data))
//   }
// }, [cartState])

  // const cartState = JSON.parse(result);

  // if(cartState.length === 0){
  //  dispatch({
  //        type: FILL_CART,
  //        payload:[]
  //  })
  // }

  const addToCart = (id) => {
       dispatch({
         type: ADD_ONE_TO_CART,
         payload: id
       })
      }
    
  const delFromCart = (id, all= false) => {
   if(all){
     dispatch({
       type: REMOVE_ALL_FROM_CART,
       payload: id
     })
   }else{
    dispatch({
      type: REMOVE_ONE_FROM_CART,
      payload: id
    })
   }
  }

  const clearCart = () => {
    dispatch({type:CLEAR_CART})
  }
  
  return props.trigger? (
    <div className={s.main_box}>
      <div className={s.cart_div}>
        <div className={s.close} onClick={() => props.setTrigger(false)}>
          <button>x</button>
          </div>
        <h1>Shopping Cart</h1>
        {!cartState ? (
          <h2>Your cart is empty</h2>
        ) : (
          cartState.map((item,index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              amount={item.amount}
              stock={item.stock}
              delFromCart={delFromCart}
              addToCart={addToCart}
            /> 
          ))
        )}
        {!cartState?(
        <button className={s.btn1}>BUY NOW</button>):
        (  <Link to="/shop"><button className={s.btn1}>GO SHOPPING</button></Link>)}
        <div>
        <button className={s.btn2}onClick={clearCart}>Clear Cart</button>
        {/* <button onClick={fillingCart}>Fill Cart</button> */}
        </div>
          
      </div>
    </div>
        
  ) : ("");
}
