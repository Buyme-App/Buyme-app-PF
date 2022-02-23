import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import styles from "./SuccessBA.module.css";
import {sendToMpSuccess} from "../../../../redux/actions/index.js"
import {Link} from "react-router-dom";




export default function SuccessBA() {
    const dispatch = useDispatch();
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'));

    useEffect(() => {
       dispatch(
        sendToMpSuccess(checkoutLS))
      }, [dispatch, checkoutLS])


  return (
      <div className={styles.main}>
        <div className={styles.title}>
        <h1>This is your order</h1>
        </div>
        {/* <div className={styles.gral}>
        <div className={styles.item_div}> */}
        {/* {cartState.map((el,index) => (
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
        } */}
        {/* </div> */}
        <div>
        <Link to='/'><button className={styles.btn}>Home</button></Link>
        </div>
      {/* </div> */}
        {/* <div className={styles.btn_div}>
        <Link to="/shop"><button>Continue Shopping</button></Link>
        <Link to="/clientform"><button onClick={handleCheckout}>Go To Checkout</button></Link>
        </div> */}
      {/* <Footer /> */}
    </div>
  );
}
