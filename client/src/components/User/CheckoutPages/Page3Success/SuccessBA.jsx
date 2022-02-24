import React from "react";
// import {useDispatch} from "react-redux";
import styles from "./SuccessBA.module.css";
// import {sendToMpSuccess} from "../../../../redux/actions/index.js"
import {Link} from "react-router-dom";
import Logo from "../../../../assets/logo2.png";
import ItemSC from "./ItemSC/ItemSC";
import marcado from "../../../../assets/marcado.png";



export default function SuccessBA() {
    // const dispatch = useDispatch();
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'));
    const totalAmount = checkoutLS.valor
    const cartLS = JSON.parse(localStorage.getItem('cart'));
    console.log(cartLS)



    // useEffect(() => {
    //    dispatch(
    //     sendToMpSuccess(checkoutLS))
    //   }, [dispatch, checkoutLS])

    // useEffect(() => {
    //   if(cartState && !cartState[0]){
    //      dispatch({type:FILL_CART})
    //   }
    // }, [dispatch])


  return (
    <div className={styles.main1}>
    <div className={styles.div_img}>
    <Link to="/"><img src={Logo} alt="" /></Link>
    </div>
    <div className={styles.gral1}>
    <div className={styles.tic}>
      <img src={marcado} alt="marcado" />
    </div>
      </div>
      <div className={styles.textchau}>
        <h3>Pay confirmed</h3>
      </div>
      <div className={styles.text2}>
        <h3>The next step is to receive your order.</h3>
        </div>
    <div className={styles.itemdiv}>
      {cartLS.map((el,index) => (
     <ItemSC 
          key={index}
          name={el.name}
          img={el.img[0]}
          amount={el.amount} 
     />
    ))
    }
    </div>
      <h2>-------------------------------</h2>
    <h2>Total:  $ {totalAmount},00</h2>
    <div className={styles.btn_div}>
    <Link to="/"><button>Home</button></Link>
    </div>
</div>
  );
}

