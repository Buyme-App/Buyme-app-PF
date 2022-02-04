import React from "react";
import { FaSistrix, FaRedo } from "react-icons/fa";
import sStyle from "./sales.module.css";
export default function Sales() {
  let example = [
    {
      order: "#005",
      date: "1/02/22",
      products: "Iphone 11",
      total: "$300.200",
      customer: "Jan perez",
    },
    {
      order: "#006",
      date: "1/02/22",
      products: "Iphone 11",
      total: "$300.200",
      customer: "Pedro",
    },
    {
      order: "#002",
      date: "1/02/22",
      products: "Iphone 11",
      total: "$300.200",
      customer: "Alejando ",
    },
    {
      order: "#001",
      date: "1/02/22",
      products: "Iphone 11",
      total: "$300.200",
      customer: "Taylor Swift",
    },
    {
      order: "#004",
      date: "1/02/22",
      products: "AirPods",
      total: "$50.000",
      customer: "Hermione Granger",
    },
    {
      order: "#003",
      date: "1/02/22",
      products: "Asus",
      total: "$900.200",
      customer: "Jan perez",
    },
    {
      order: "#053",
      date: "1/02/22",
      products: "Smarhphone",
      total: "$900.200",
      customer: "Sofia Mieres",
    },
    {
      order: "#013",
      date: "1/02/22",
      products: "Microondas",
      total: "$30.200",
      customer: "Graciela alfano",
    },
  ];
  const [render, setRender] = React.useState(example);
  const [search, setSearch] = React.useState("");

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
        example.filter(
          (e) =>
            e.products.toUpperCase().includes(value.toUpperCase()) ||
            e.customer.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(example);
  };
  //jj
  return (
    <div>
      <div className={sStyle.sales_container}>
        <h1 className={sStyle.title}>Sales</h1>

        <div className={sStyle.input_box}>
          <div className={sStyle.input}>
            <input
              type="search"
              placeholder="Search by order, name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSistrix
              className={sStyle.icon}
              onClick={() => searchHandler(search)}
            />
          </div>
          {!render.length ? (
            <h1 className={sStyle.notMatch}>No matches found</h1>
          ) : null}

          {/* -----------selects-------------- */}
          <div className={sStyle.selects_box}>
            <button className={sStyle.refresh} onClick={refreshHandler}>
              <FaRedo size={14} />
            </button>

            <select
              name="byDate"
              id=""
              onChange={(e) => orderByDate(e.target.value)}
            >
              <option>Ascendent</option>
              <option>Descendent</option>
            </select>
          </div>
        </div>
        {/* ---------Tables--------- */}
        <div className={sStyle.table_container}>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Products</th>
                <th>Total</th>
                <th>Customer</th>
              </tr>
            </thead>

            <tbody>
              {render.length
                ? render.map((e) => (
                    <tr key={e.order}>
                      <td>{e.order}</td>
                      <td>{e.date}</td>
                      <td>{e.products}</td>
                      <td>{e.total}</td>
                      <td>{e.customer}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
