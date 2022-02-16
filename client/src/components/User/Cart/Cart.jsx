import React from "react";
import { useSelector } from "react-redux";
import s from "./cart.module.css";
import Item from "./Item/Item";

export default function Cart() {
  const cartState = useSelector((state) => state.cart);

  return (
    <div className={s.main_box}>
      <div className={s.cart_div}>
        {!cartState.length ? (
          <h2>Your cart is empty</h2>
        ) : (
          cartState.map((item) => (
            <Item
              name={item.name}
              img={item.img}
              price={item.price}
              amount={item.amount}
            />
          ))
        )}
      </div>
    </div>
  );
}
