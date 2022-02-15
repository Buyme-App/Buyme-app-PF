import React from "react";
import { useEffect } from "react";
import itemS from "./item.module.css";

export default function Item({ img, name, price, amount }) {
  const [amountState, setAmount] = React.useState(0);
  useEffect(() => {
    setAmount(amount);
  }, [amount]);
  return (
    <div className={itemS.item}>
      <img src={img} alt="producto" />
      <h4>{name}</h4>
      <span>${price * amount}</span>
      <div>
        <span>-</span>
        <span>{amountState}</span>
        <span>+</span>
      </div>
    </div>
  );
}
