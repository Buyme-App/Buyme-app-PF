import React from "react";
import { FaSistrix, FaRedo } from "react-icons/fa";
import sStyle from "./AdminProducts.module.css";
export default function AdminProducts() {
  let example = [
    {
        order: "03/02/22",
        name: "iPhone 11",
        brand: "Apple",
        price: "$1.200",
        stock: "20",
    },
    {
        order: "02/02/22",
        name: "iPhone 11 Plus",
        brand: "Apple",
        price: "$1.350",
        stock: "5",
    },
    {
        order: "01/02/22",
        name: "Airpods Pro",
        brand: "Apple",
        price: "$350",
        stock: "7",
    },
    {
        order: "30/01/22",
        name: "MacBook Pro",
        brand: "Apple",
        price: "$1.850",
        stock: "2",
    },
    {
        order: "29/01/22",
        name: "All in One PC",
        brand: "HP",
        price: "$1.250",
        stock: "4",
    },
    {
        order: "27/01/22",
        name: "Apple TV",
        brand: "Apple",
        price: "$450",
        stock: "7",
    },
    {
        order: "25/01/22",
        name: "Google Chromecast",
        brand: "Google",
        price: "$250",
        stock: "12",
    },
    {
        order: "24/01/22",
        name: "All in One PC",
        brand: "Asus",
        price: "$950",
        stock: "3",
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
        {/* <h1 className={sStyle.title}>Products</h1> */}

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
                <th>Date Added</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Customer</th>
                <th><input type='checkbox'/></th>
              </tr>
            </thead>

            <tbody>
              {render.length
                ? render.map((e) => (
                    <tr key={e.order}>
                      <td>{e.order}</td>
                      <td>{e.name}</td>
                      <td>{e.brand}</td>
                      <td>{e.price}</td>
                      <td>{e.stock}</td>
                      <td><input type='checkbox'/></td>
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
