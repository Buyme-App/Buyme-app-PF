import React, { useEffect } from "react";
import { FaSistrix, FaRedo, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import sStyle from "./AdminProducts.module.css";
import { updateProduct } from "../../redux/actions";

export default function AdminProducts() {
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
  const [renderSearched, setRenderSearched] = React.useState(false);

  const [activeUpdate, setActiveUpdate] = React.useState(false);
  const dispatch = useDispatch();

  const orderByDate = (value) => {
    let order = render.sort((a, b) => {
      return (
        // Number(b.price.substring(1, 10)) - Number(a.price.substring(1, 10))
        Number(b.price) - Number(a.price)
      );
    });

    if (value === "Descendent") {
      setRender((prev) => [...order]);
    } else setRender([...order.reverse()]);
  };
  const searchHandler = (value) => {
    setRenderSearched(true);
    if (value.length) {
      setRender(
        (prev) =>
          productsOfRedux &&
          productsOfRedux.filter(
            (e) =>
              e.name.toUpperCase().includes(value.toUpperCase()) ||
              e.maker.toUpperCase().includes(value.toUpperCase())
          )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(productsOfRedux);
    setRenderSearched(false);
  };
  const editHandler = (product) => {
    setActiveUpdate(true);
    window.scrollTo(0, 0);
    setToEdit(product);
  };
  React.useEffect(() => {
    dispatch(getAllProducts);
    refreshHandler();
  }, [productsOfRedux]);

  //Activate product handler

  const activateStatusHandler = (product) => {
    //no está pausado?, entonces pasará a estar pausado(true)
    let opositePause = product.paused === false ? "Paused" : "Active"; //pause en true == producto pausado
    let newStatus = product.paused ? false : true;

    if (
      window.confirm(
        `The product ${product.name} state will be change to ${opositePause}`
      )
    ) {
      let formToChangeStatus = {
        name: product.name,
        id: product.id,
        maker: product.maker,
        model: product.model,
        SKU: product.SKU,
        price: product.price,
        offerPrice: product.offerPrice,
        stock: product.stock,
        inventary: product.inventary,
        description: product.description,
        featured: product.featured,
        paused: newStatus,
        subCategorie: product.subCategorie,
      };

      updateProduct(dispatch, formToChangeStatus);
      alert("Product has been " + opositePause + " successfully");
    }
  };

  const activateFeaturedHandler = (product) => {
    //no está pausado?, entonces pasará a estar pausado(true)
    let opositeFeatured = product.featured === true ? "No" : "Yes"; //pause en true == producto pausado
    let newStatus = product.featured ? false : true;

    if (
      window.confirm(
        `The product ${product.name} state will be change to ${opositeFeatured}`
      )
    ) {
      let formToChangeStatus = {
        name: product.name,
        id: product.id,
        maker: product.maker,
        model: product.model,
        SKU: product.SKU,
        price: product.price,
        offerPrice: product.offerPrice,
        stock: product.stock,
        inventary: product.inventary,
        description: product.description,
        featured: newStatus,
        paused: product.paused,
        subCategorie: product.subCategorie,
      };

      updateProduct(dispatch, formToChangeStatus);
      alert("Product has been " + opositeFeatured + " successfully");
    }
  };

  //jj
  return (
    <div>
      <div className={sStyle.container}>
        {activeUpdate && (
          <div className={sStyle.update_container}>
            <UpdateProduct
              refreshHandler={refreshHandler}
              setActiveUpdate={setActiveUpdate}
              toEdit={toEdit}
              render={render}
            />
          </div>
        )}
        {/* ------------inputs box ------------*/}
        <div className={sStyle.input_box}>
          <div className={sStyle.input}>
            <input
              type="search"
              placeholder="Search by name or brand..."
              value={search}
              onKeyDown={(e) => e.key === "Enter" && searchHandler(search)}
              onChange={(e) => setSearch(e.target.value)}
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
              <option value="Ascendent">Ascendent by Price</option>
              <option value="Descendent">Descendent by Price</option>
            </select>
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
                <th>Status</th>
                <th>Featured</th>
              </tr>
            </thead>

            <tbody>
              {render.length
                ? render.map((e, index) => (
                    <tr key={index}>
                      <td className={e.paused ? sStyle.disabled : null}>
                        {e.createdAt.substring(0, 10)}
                      </td>
                      <td className={e.paused ? sStyle.disabled : null}>
                        {e.name}
                      </td>
                      <td className={e.paused ? sStyle.disabled : null}>
                        {e.maker}
                      </td>
                      <td className={e.paused ? sStyle.disabled : null}>
                        {e.price}
                      </td>
                      <td className={e.paused ? sStyle.disabled : null}>
                        {e.stock}
                      </td>
                      <td className={`${e.paused ? sStyle.disabled : null}`}>
                        <FaEdit
                          size={14}
                          className={sStyle.edit}
                          onClick={() => editHandler(e)}
                        />
                      </td>
                      <td>
                        <input
                          className={`${
                            e.paused ? sStyle.disabled_btn : sStyle.activate_btn
                          }`}
                          name={e.name}
                          type="button"
                          value={e.paused ? "Inactive" : "Active"}
                          onClick={() => {
                            activateStatusHandler(e);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className={`${
                            e.featured
                              ? sStyle.activate_btn2
                              : sStyle.disabled_btn2
                          }`}
                          name={e.name}
                          type="button"
                          disabled={e.paused === true}
                          value={e.featured ? "Yes" : "No"}
                          onClick={() => {
                            activateFeaturedHandler(e);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <div className={sStyle.notMatch}>
            {renderSearched && !render.length ? (
              <h2>No matches found</h2>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
