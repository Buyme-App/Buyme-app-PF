import React from "react";
import { useEffect } from "react";
import itemS from "./ItemSC.module.css";
// import IconDelete from "../../../../../assets/eliminar.png"

export default function Item({ img, name, amount}) {
  const [amountState, setAmount] = React.useState(0);

  useEffect(() => {
    setAmount(amount);
  }, [amount]);
  
  return (
    <div className={itemS.item}>
      <img src={img} alt="producto" />
      <h4>{name}</h4>
        <div className={itemS.itemspan2}>
        <span>x{amountState}</span>
        </div>
    </div>
  );
}
