import React, { useEffect } from "react";
import { FaSistrix, FaRedo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices } from "../../redux/actions";
import style from "./sales.module.css";
export default function Sales() {
  
  const orders = useSelector((state) => state.allInvoices);
  const dispatch = useDispatch();
  console.log(orders);

    useEffect(() => {
        dispatch(getAllInvoices());
    },[dispatch]);
  
  const [render, setRender] = React.useState(orders);
  const [search, setSearch] = React.useState("");
    console.log('render!!!',render);
  const orderByDate = (value) => {
    let order = render.sort((a, b) => {
      return (
        Number(b.order.substring(1, 10)) - Number(a.order.substring(1, 10))
      );
    });
    if (value === "Descendent") {
      setRender((prev) => [...order]);
    } else setRender([...order.reverse()]);
  };
  const searchHandler = (value) => {
    if (search.length) {
      setRender((prev) =>
        orders.filter(
          (e) =>
            //e.products.toUpperCase().includes(value.toUpperCase()) ||
            e.id === value 
            // e.clientId === value
        )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(orders);
    setSearch("");
  };
  //jj
  return (
      <div className={style.container}>
        <div className={style.input_box}>
          <div className={style.input}>
            <input
              type="search"
              placeholder="Search by order..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchHandler(search)}
            />
            <FaSistrix
              className={style.icon}
              onClick={() => searchHandler(search)}
            />
          </div>

          {/* -----------selects-------------- */}
          <div className={style.selects_box}>
            <button className={style.refresh} onClick={refreshHandler}>
              <FaRedo size={14} />
            </button>

            <select
              name="byDate"
              id=""
              onChange={(e) => orderByDate(e.target.value)}
            >
              <option value="Descendent">Descendent by Order #</option>
              <option value="Ascendent">Ascendent by Order #</option>
            </select>
          </div>
        </div>
        {/* ---------Tables--------- */}
        <div className={style.table_container}>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Products</th>
                <th>Total</th>
                <th>Customer</th>
                <th>Delivered</th>
              </tr>
            </thead>

            <tbody>
              {orders.length
                ? orders.map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.createdAt.slice(0, 10)}</td>
                      <td><select className={style.select}>{e.products? (e.products.map(el => {return(<option value={el.id}>{el.quantity}un - {el.title} - ${el.unit_price}</option>)})) : '-'}</select></td>
                      <td>${e.total}</td>
                      <td>{e.clientId}</td>
                      <td>{e.delivered}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <div className={style.notMatch}>
            {!render ? <h2>No matches found</h2> : null}
          </div>
        </div>
      </div>
  );
}
