import React from "react";
import Aside from "../asideDashboard/asideDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Sales from "../Sales/Sales";
import AdminNewProduct from "../AdminNewProduct/AdminNewProduct";
import AdminProducts from "../AdminProducts/AdminProducts";
import Queries from "../Queries/Queries";
import Account from "../Account/Account";
import style from "./adminHome.module.css";

export default function AdminHome() {
  const [panelActive, setPanelActive] = React.useState({
    home: true,
    sales: false,
    newProduct: false,
    products: false,
    categories: false,
    customers: false,
    queries: false,
    account: false
  });
  rreturn (
    <div className={style.main_box}>
      <h1>Dashboard Home</h1> <br />
      <div className={style.main_container}>
        <Aside setPanelActive={setPanelActive} panelActive={panelActive} />
        <section>
          {/* <span>renderizado de contenido</span> */}
          {panelActive.home && <AdminDashboard/>}
          {panelActive.sales && <Sales/>}
          {panelActive.newProduct && <AdminNewProduct/>}
          {panelActive.products && <AdminProducts/>}
          {panelActive.categories && <h1>Categories section</h1>}
          {panelActive.customers && <h1>Customers section</h1>}
          {panelActive.queries && <Queries />}
          {panelActive.account && <Account/>}
        </section>
      </div>
    </div>
  );
}
