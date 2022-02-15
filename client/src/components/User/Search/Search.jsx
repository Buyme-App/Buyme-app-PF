import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsClient } from "../../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Cards2 from "../Cards2/Cards2";
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import styles from "./Search.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  // const featuredProducts = useSelector((state) => state.allProducts.filter(p => p.featured === true));

  const [currentPage, setCurrentPage] = useState(1); // ESTADO LOCAL ARRANCA EN PAGINA 1
  // // eslint-disable-next-line no-unused-vars
  const [productsPerPage, setProductsPerPage] = useState(8); // ESTADO LOCAL CANTIDAD DE CARACTERES POR PAGINA
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState("");

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClickLoadAll(e){
      e.preventDefault(); // CADA VEZ QUE RECARGAMOS LOS ESTADOS DE REDUX VULVEN A CARGARSE SI TENEMOS USEEFFECT
      dispatch(getProductsClient());
      setCurrentPage(1);
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.productsbottom}>
          <div className={styles.sidebar}>
            <h2>(Sidebar for filters)</h2>
            <button className={styles.loadproducts} onClick={(e) => {handleClickLoadAll(e)}}>
                    Load All Products
                </button>
          </div>
          <div className={styles.detail}>
            <div className={styles.grid}>
              {
                !currentProducts.length ?
                <Loading /> :
                currentProducts[0] === 404 ?
                <NotFound /> :
                currentProducts?.map((p) => {
                  return (
                    <>
                      <Link
                        className={styles.btnName}
                        to={"/product/" + p.id}
                        key={p.id}
                      >
                        <Cards
                          className={styles.grid}
                          image={p.image}
                          name={p.name}
                          price={p.price}
                          offerPrice={p.offerPrice}
                        />
                      </Link>
                    </>
                  );
                })
              }
            </div>
            <div>
            <Paginate
                productsPerPage={productsPerPage}
                allProducts={allProducts.length}
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}