import React from "react";
import Aside from "../asideDashboard/asideDashboard";
import Sales from "../Sales/Sales";
import style from "./adminHome.module.css";


export default function AdminHome() {
  const [panelActive, setPanelActive] = React.useState({
    // home: false,
    // sales: false,
    // newProduct: false,
    // products: false,
    // categories: false,
    // customers: false,
    // queries: false,
    // account: false
  })
  return (
    <div className={style.main_box}>
      <h1>Dashboard Home</h1> <br />
      <div className={style.main_container}>
        <Aside setPanelActive={setPanelActive} panelActive={panelActive}/>
        <section>
          <span>renderizado de contenido</span>
          {panelActive.sales && <Sales/>}
          {panelActive.newProduct &&  <h1>new product section</h1>}
          {panelActive.products && <h1>products section</h1>}
          {panelActive.categories && <h1>Categories section</h1>}
          {panelActive.customers && <h1>customers section</h1>}
          {panelActive.queries && <h1>queries section</h1>}
          {panelActive.account && <h1>account section</h1>}
          

        </section>
      </div>
    </div>
  );
}
