import React from "react";
import styles from "./asideDashboard.module.css";
import iconCat from "../../assets/IconoCategorias.png";
import iconHome from "../../assets/IconoHome.png";
import iconProd from "../../assets/IconoProductos.png";
import iconCus from "../../assets/IconoClientes.png";
import iconNP from "../../assets/IconoCrearProducto.png";
import iconQue from "../../assets/IconoConsultas.png";
import iconSale from "../../assets/IconoVentas.png";

import Confirm from "./Confirm/Confirm";

export default function Aside({ setPanelActive, panelActive }) {
  const [activateConfirm, setActivateConfirm] = React.useState(false);

  const clickHandler = (e) => {
    console.log(`${e}`);
    setPanelActive({ [e]: true });
  };

  const logOut = () => {
    setActivateConfirm((prev) => !prev);
    console.log(activateConfirm);
  };
  return (
    <div className={styles.box}>
      {activateConfirm && <Confirm setActivateConfirm={setActivateConfirm} />}
      <ul>
        <li>
          <button
            className={`${styles.btn} ${panelActive.home && styles.active}`}
            type="submit"
            id="home"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconH} src={iconHome} alt="icon" />
            <span>Home</span>{" "}
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${panelActive.sales && styles.active}`}
            type="submit"
            id="sales"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconS} src={iconSale} alt="icon" />
            Sales
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${
              panelActive.newProduct && styles.active
            }`}
            type="submit"
            id="newProduct"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconNP} src={iconNP} alt="icon" />
            New Product
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${panelActive.products && styles.active}`}
            type="submit"
            id="products"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconP} src={iconProd} alt="icon" />
            Products
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${
              panelActive.categories && styles.active
            }`}
            type="submit"
            id="categories"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconCa} src={iconCat} alt="icon" />
            Categories
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${
              panelActive.customers && styles.active
            }`}
            type="submit"
            id="customers"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconCu} src={iconCus} alt="icon" />
            Customers
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${panelActive.queries && styles.active}`}
            type="submit"
            id="queries"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <img className={styles.iconQ} src={iconQue} alt="icon" />
            Queries
          </button>
        </li>

        <li>
          <button
            className={`${styles.btn} ${panelActive.account && styles.active}`}
            type="submit"
            id="account"
            onClick={(e) => clickHandler(e.target.id)}
          >
            Account
          </button>
        </li>
      </ul>
      <button className={styles.btn2} type="submit" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}
