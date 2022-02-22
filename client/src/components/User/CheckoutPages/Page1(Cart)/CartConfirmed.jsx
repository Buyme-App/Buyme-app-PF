import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import ItemCC from "./ItemCC/ItemCC";
import styles from "./CartConfirmed.module.css";
import {CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, ADD_ONE_TO_CART,FILL_CART} from "../../../../redux/actions/index.js"
import {Link, useNavigate} from "react-router-dom";
import {sendToMP} from "../../../../redux/actions/index.js"




export default function CartConfirmed() {
    const cartState = useSelector((state) => state.cart);
    const history = useNavigate();
    const dispatch = useDispatch();
    const cartLS = JSON.parse(localStorage.getItem('cart'))
    const clientLS = JSON.parse(localStorage.getItem('cliente'));
    const client= clientLS.result.id;  
    const itemsHard = cartLS.map(el => {
      return{
        id: el.id,
        title: el.name,
        unit_price: el.price,
        quantity: el.amount
      }
    })

// const client = "clientId:1"; //comentar esta y descomentar linea 23 y 24.
const checkout = {clientId: client, itemsHard: itemsHard}
console.log("final checkoutttttttttttttttt", checkout)

 // {clientId:2, itemsHard:[{id:1, title:'celular', unit_price:12.00, quantity:2},
    //  {id:1, title:'Laptop', unit_price:1200.00, quantity:1}]}
  
    
   
    useEffect(() => {
    if(cartState && !cartState[0]){
       dispatch({type:FILL_CART})
    }
    if(cartState && cartState !== []){
      localStorage.setItem("cart", JSON.stringify(cartState))
      }
  }, [dispatch, cartState])
  
  
   const handleCheckout = () => {
    dispatch(
     sendToMP(checkout)
    )
}

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
        {/* <button onClick={fillingCart}>Fill Cart</button> */}
        </div>
      </div>
        <div className={styles.btn_div}>
        <Link to="/shop"><button>Continue Shopping</button></Link>
        <Link to="/clientform"><button onClick={handleCheckout}>Go To Checkout</button></Link>
        </div>
      {/* <Footer /> */}
    </div>
  );
}
