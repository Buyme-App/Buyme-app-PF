import React from "react";
import { useEffect } from "react";
import itemS from "./ItemCC.module.css";
import IconDelete from "../../../../../assets/eliminar.png"

export default function Item({ img, name, price, amount,addToCart, delFromCart,id, stock }) {
  const totalAmount = "$" + price * amount
  const [amountState, setAmount] = React.useState(0);

  useEffect(() => {
    setAmount(amount);
  }, [amount]);
  
  return (
    <div className={itemS.item}>
      <img src={img} alt="producto" />
      <h4>{name}</h4>
      <div className={itemS.itemspan}>
      <span>{totalAmount}</span>
      </div>
      <div className={itemS.controles}>
        <button className={itemS.btn} onClick={() => delFromCart(id)}>-</button>
        </div>
        <div className={itemS.itemspan2}>
        <span>x{amountState}</span>
        </div>
        <div className={itemS.controles}>
        <button className={itemS.btn} onClick={() => addToCart(id)}>+</button> 
      </div>
        <button className={itemS.close}onClick={() => delFromCart(id,true)}><img src={IconDelete} alt=""/></button>
    </div>
  );
}
