import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
//   getProductsClient,
  getProductsByCategory,
  getAllCategories,
  filterByFeaturedCat,
  orderByPriceCat,
  filterByDiscount,
  filterByFeaturedBtn,
  filterByDiscountedBtn,
} from "../../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import styles from "./Category.module.css";

export default function ProductsCategory(params) {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const allProducts = useSelector((state) => state.products);
  console.log("ALLPRODUCTSSSSSS", allProducts)
  // const allProducts = useSelector((state) => state.products.filter((p) => p.paused === false));
  const categories = useSelector((state) => state.allCategories);
  console.log("CATEGORIESSSSSS", categories);
  // const featuredProducts = useSelector((state) => state.allProducts.filter(p => p.featured === true));

  useEffect(() => {
    // if (!allProducts.length) {
      dispatch(getProductsByCategory(categoryId));
    // }
    // if (!categories.length) {
    //   dispatch(getAllCategories());
    // }
    ////  --->esto permite eliminar los warning de dependencias !
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, categoryId]);

//   useEffect(() => {
//     if (!allProducts.length) {
//       dispatch(getProductsByCategory(categoryId));
//     }
//   }, [dispatch, categoryId]);

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

  function handleClickLoadAll(e) {
    dispatch(getProductsByCategory(categoryId));
    setCurrentPage(1);
  }

  function handleFeatured(e) {
    dispatch(filterByFeaturedCat(e.target.value));
    setCurrentPage(1);
  }

  function handlePrice(e) {
    dispatch(orderByPriceCat(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered by ${e.target.value}`);
  }

  function handleDiscount(e) {
    dispatch(filterByDiscount(e.target.value));
    setCurrentPage(1);
  }

  function handleClickFeaturedBtn(e) {
    dispatch(filterByFeaturedBtn());
    setCurrentPage(1);
  }

  function handleClickDiscountedBtn(e) {
    dispatch(filterByDiscountedBtn());
    setCurrentPage(1);
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.productsbottom}>
          <div className={styles.sidebar}>
            <h2>Refine your search</h2>
            <button
              className={styles.loadproducts}
              onClick={(e) => {
                handleClickLoadAll(e);
              }}
            >
              Show All Category Products
            </button>

            {/* <h4>Filter by category</h4>
            <select
              className={styles.filters}
              onChange={(e) => {
                handleFilterByCategory(e);
              }}
            >
              <option value="All">Select Category</option>
              {categories
                .sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                .map((t) => (
                  <option value="3" key={t.id}>
                    {t.name}
                  </option>
                ))}
            </select> */}

            {/* <h4>Filter by featured products</h4>
            <select
              className={styles.filters}
              onChange={(e) => handleFeatured(e)}
            >
              <option value="All">All Products</option>
              <option value="Featured">Featured Products</option>
            </select> */}

            {/* <h4>Filter by discounted products</h4>
            <select
              className={styles.filters}
              onChange={(e) => handleDiscount(e)}
            >
              <option value="All">All Products</option>
              <option value="Discounted">Discounted Products</option>
            </select> */}

            <button
              className={styles.loadproducts}
              onClick={(e) => {
                handleClickFeaturedBtn(e);
              }}
            >
              Show Only Featured
            </button>

            <button
              className={styles.loadproducts}
              onClick={(e) => {
                handleClickDiscountedBtn(e);
              }}
            >
              Show Only Discounted
            </button>

            <h4>Order by price</h4>
            <select
              className={styles.filters}
              onChange={(e) => {
                handlePrice(e);
              }}
            >
              <option value="All">Select Order</option>
              <option value="asc">Ascending</option>
              <option value="des">Descending</option>
            </select>

          </div>
          <div className={styles.detail}>
          <h1>Your products selection</h1>
          {/* <h1>{categories[0].name} products</h1> */}
            <div>
              {!currentProducts.length ? (
                <Loading />
              ) : typeof currentProducts[0] === "string" ? (
              // ) : currentProducts[0] === [] ? (
                <NotFound />
              ) : (
                <div className={styles.grid}>
                {currentProducts.map((p) => 
                   (
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
                  )
                )}
                <div className={styles.paginate}>
                <Paginate
                  productsPerPage={productsPerPage}
                  allProducts={allProducts.length}
                  page={page}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
                </div>
              )}
              
            </div>
            {/* <div>
              <Paginate
                productsPerPage={productsPerPage}
                allProducts={allProducts.length}
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
