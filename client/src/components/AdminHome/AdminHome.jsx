import React, { useEffect } from "react";
import Aside from "../asideDashboard/asideDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Sales from "../Sales/Sales";
import AdminNewProduct from "../AdminNewProduct/AdminNewProduct";
import AdminProducts from "../AdminProducts/AdminProducts";
import Queries from "../Queries/Queries";
import Account from "../Account/Account";
import Categories from "../Categories/Categories";
import Customers from "../Customers/Customers";
import style from "./adminHome.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, login } from "../../redux/actions";

export default function AdminHome() {
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);

  const [panelActive, setPanelActive] = React.useState({
    home: true,
    sales: false,
    newProduct: false,
    products: false,
    categories: false,
    customers: false,
    queries: false,
    account: false,
  });
  const dispatch = useDispatch();

  // Comentar para no loguearte

  React.useEffect(() => {
    // login(dispatch);
    !globalState.login && navigate("/admin");

    dispatch(getAllProducts());
  }, []);

  return (
    <div className={style.main_box}>
      <br />

      <div className={style.main_container}>
        <Aside setPanelActive={setPanelActive} panelActive={panelActive} />
        <section>
          {/* <span>renderizado de contenido</span> */}
          {panelActive.home && <AdminDashboard />}
          {panelActive.sales && <Sales />}
          {panelActive.newProduct && (
            <AdminNewProduct setPanelActive={setPanelActive} />
          )}
          {panelActive.products && <AdminProducts />}
          {panelActive.categories && <Categories />}
          {panelActive.customers && <Customers />}
          {panelActive.queries && <Queries />}
          {panelActive.account && <Account />}
        </section>
      </div>
    </div>
  );
}
