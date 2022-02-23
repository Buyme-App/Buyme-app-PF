import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import ItemCC from "./ItemCC/ItemCC";
import styles from "./CartConfirmed.module.css";
import {CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, ADD_ONE_TO_CART,FILL_CART} from "../../../../redux/actions/index.js"
import {Link, useNavigate} from "react-router-dom";




export default function CartConfirmed() {
    const cartState = useSelector((state) => state.cart);
    const history = useNavigate();
    const dispatch = useDispatch();
    const cartLS = JSON.parse(localStorage.getItem('cart'))
    const clientLS = JSON.parse(localStorage.getItem('cliente'));
    const client= clientLS.result.id;  
    const itemsHard = cartState.map(el => {
      return{
        id: el.id,
        title: el.name,
        unit_price: el.price,
        quantity: el.amount
      }
    })

let valor = cartState.map(el => el.price * el.amount)
let valorTotal = valor.reduce(function(a, b){
  return a + b;
}, 0);

let checkout = {clientId: client, itemsHard: itemsHard, valor: valorTotal}
console.log("ESTO BUSCO YO",checkout)
    
   
useEffect(() => {
  if(cartState && !cartState[0]){
     dispatch({type:FILL_CART})
  }
}, [dispatch])
 

 useEffect(() => {
   if(cartState && cartState !== []){
   localStorage.setItem("cart", JSON.stringify(cartState))
   localStorage.setItem("checkout", JSON.stringify(checkout))
   }else{
     console.log('Estoy en el If')
   }

 }, [cartState])

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
      history('/shop')

    }

  return (
      <div className={styles.main}>
        <div className={styles.title}>
        <h1>Cart Confirmation</h1>
        </div>
        <div className={styles.gral}>
        <div className={styles.item_div}>
        {cartState.map((el,index) => (
         <ItemCC 
              key={index}
              id={el.id}
              name={el.name}
              img={el.img}
              price={el.price}
              amount={el.amount}
              stock={el.stock}
              delFromCart={delFromCart}
              addToCart={addToCart}
         />
        ))
        }
        </div>
        <div>
        <button className={styles.btnClear} onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
        <div className={styles.btn_div}>
        <Link to="/shop"><button>Continue Shopping</button></Link>
        <Link to="/clientform"><button>Go To Checkout</button></Link>
        </div>
    </div>
  );
}
