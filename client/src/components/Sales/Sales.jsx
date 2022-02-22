import React from "react";
import { FaSistrix, FaRedo } from "react-icons/fa";
import sStyle from "./sales.module.css";
export default function Sales() {
  let example = [
    {
      order: "#053",
      date: "01/02/2022",
      products: "Samsung A30s",
      total: "$900.200",
      customer: "Sofia Mieres",
    },
    {
      order: "#013",
      date: "01/02/2022",
      products: "Mouse Prologic",
      total: "$30.200",
      customer: "Graciela alfano",
    },
    {
      order: "#006",
      date: "01/02/2022",
      products: "Apple iPhone 11",
      total: "$300.200",
      customer: "Pedro",
    },
    {
      order: "#005",
      date: "01/02/2022",
      products: "Apple iPhone 11",
      total: "$300.200",
      customer: "Jan perez",
    },
    {
      order: "#004",
      date: "01/02/2022",
      products: "Apple AirPods",
      total: "$50.000",
      customer: "Hermione Granger",
    },
    {
      order: "#003",
      date: "01/02/2022",
      products: "Asus Laptop",
      total: "$900.200",
      customer: "Jan perez",
    },
    {
      order: "#002",
      date: "01/02/2022",
      products: "Apple iPhone 10",
      total: "$300.200",
      customer: "Alejando ",
    },
    {
      order: "#001",
      date: "01/02/2022",
      products: "Samsung Galaxy S8",
      total: "$300.200",
      customer: "Taylor Swift",
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
            e.order.toUpperCase().includes(value.toUpperCase()) ||
            e.customer.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(example);
    setSearch("");
  };
  //jj
  return (
      <div className={sStyle.container}>
        <div className={sStyle.input_box}>
          <div className={sStyle.input}>
            <input
              type="search"
              placeholder="Search by order#, customers or products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchHandler(search)}
            />
            <FaSistrix
              className={sStyle.icon}
              onClick={() => searchHandler(search)}
            />
          </div>

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
              <option value="Descendent">Descendent by Order #</option>
              <option value="Ascendent">Ascendent by Order #</option>
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
          <div className={sStyle.notMatch}>
            {!render.length ? <h2>No matches found</h2> : null}
          </div>
        </div>
      </div>
  );
}
