import React, { useEffect } from "react";
import { FaSistrix, FaRedo, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import UpdateProduct from "../../UpdateProduct/UpdateProduct";
import sStyle from "./AdminProducts.module.css";
import Error from "../Login/ErrorPopUp/Error";

export default function AdminProducts() {
  const dispatch = useDispatch();

  // let example = [
  //   {
  //     order: "03/02/22",
  //     name: "iPhone 11",
  //     brand: "Apple",
  //     price: "$1200",
  //     stock: "20",
  //   },
  //   {
  //     order: "02/02/22",
  //     name: "iPhone 11 Plus",
  //     brand: "Apple",
  //     price: "$1350",
  //     stock: "5",
  //   },
  //   {
  //     order: "01/02/22",
  //     name: "Airpods Pro",
  //     brand: "Apple",
  //     price: "$350",
  //     stock: "7",
  //   },
  //   {
  //     order: "30/01/22",
  //     name: "MacBook Pro",
  //     brand: "Apple",
  //     price: "$1850",
  //     stock: "2",
  //   },
  //   {
  //     order: "29/01/22",
  //     name: "All in One PC",
  //     brand: "HP",
  //     price: "$1250",
  //     stock: "4",
  //   },
  //   {
  //     order: "27/01/22",
  //     name: "Apple TV",
  //     brand: "Apple",
  //     price: "$450",
  //     stock: "7",
  //   },
  //   {
  //     order: "25/01/22",
  //     name: "Google Chromecast",
  //     brand: "Google",
  //     price: "$250",
  //     stock: "12",
  //   },
  //   {
  //     order: "24/01/22",
  //     name: "All in One PC",
  //     brand: "Asus",
  //     price: "$950",
  //     stock: "3",
  //   },
  // ];

  const productsOfRedux = useSelector((state) => state.allProducts);
  const [render, setRender] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [toEdit, setToEdit] = React.useState({});
  const [activeUpdate, setActiveUpdate] = React.useState(false);
  const modal = useSelector((state) => state.error);
  const orderByDate = (value) => {
    let order = render.sort((a, b) => {
      return (
        Number(b.price.substring(1, 10)) - Number(a.price.substring(1, 10))
      );
    });

    if (value === "Descendent") {
      setRender((prev) => [...order]);
    } else setRender([...order.reverse()]);
  };
  const searchHandler = (value) => {
    if (value.length) {
      setRender((prev) =>
        productsOfRedux.filter(
          (e) =>
            e.name.toUpperCase().includes(value.toUpperCase()) ||
            e.brand.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(productsOfRedux);
  };
  const editHandler = (product) => {
    console.log("id recibido", product);
    setActiveUpdate(true);
    window.scrollTo(0, 0);
    setToEdit(product);
  };

  useEffect(() => {
    setRender(productsOfRedux);
  }, []);
  //jj
  return (
    <div>
      <div className={sStyle.sales_container}>
        {/* <h1 className={sStyle.title}>Products</h1> */}
        {activeUpdate && (
          <div className={sStyle.update_container}>
            <UpdateProduct
              setActiveUpdate={setActiveUpdate}
              toEdit={toEdit}
              setRender={setRender}
            />
          </div>
        )}
        {modal === true && <Error msg="Product updated succsesfully!" />}
        <div className={sStyle.input_box}>
          <div className={sStyle.input}>
            <input
              type="search"
              placeholder="Search by name or brand..."
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
              <option value="Ascendent">Ascendent by Price</option>
              <option value="Descendent">Descendent by Price</option>
            </select>

            <button className={sStyle.refresh}>Activate</button>
            <button className={sStyle.refresh}>Pause</button>
          </div>
        </div>
        {/* ---------Tables--------- */}
        <div className={sStyle.table_container}>
          <table>
            <thead>
              <tr>
                <th>Date Added</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Edit</th>
                <th>A / P</th>
              </tr>
            </thead>

            <tbody>
              {render.length
                ? render.map((e, index) => (
                    <tr key={e.id}>
                      <td>{e.createdAt.substring(0, 10)}</td>

                      <td>{e.name}</td>
                      <td>{e.maker}</td>
                      <td>{e.price}</td>
                      <td>{e.stock}</td>
                      <td>
                        <FaEdit
                          size={14}
                          className={sStyle.edit}
                          onClick={() => editHandler(e)}
                        />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
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
