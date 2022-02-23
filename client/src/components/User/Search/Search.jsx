import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsClient,
  getAllCategories,
  filterByCategory,
  filterByFeatured,
  orderByPrice,
  filterByDiscount,
} from "../../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
// import Cards2 from "../Cards2/Cards2";
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import styles from "./Search.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  console.log("ALLPRODUCTSSSSSS", allProducts)
  // const allProducts = useSelector((state) => state.products.filter((p) => p.paused === false));
  const categories = useSelector((state) => state.allCategories);
  console.log("CATEGORIESSSSSS", categories);
  // const featuredProducts = useSelector((state) => state.allProducts.filter(p => p.featured === true));

  // const [filterByCategory, setFilterByCategory] = useState("All");
  // const [sortingBy, setSortingBy] = useState("All");
  // const [filterByFeatured, setFilterByFeatured] = useState("All");

  // useEffect(() => {
  //   dispatch(getProductsClient());
  //   dispatch(getAllCategories());
  // }, [dispatch]);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsClient());
    }
    if (!categories.length) {
      dispatch(getAllCategories());
    }
    ////  --->esto permite eliminar los warning de dependencias !
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, categories.length]);

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
    // e.preventDefault();
    dispatch(getProductsClient());
    setCurrentPage(1);
  }

  // function handleClickFeaturedBtn(e) {
  //   dispatch(filterByFeaturedBtn());
  //   setCurrentPage(1);
  // }

  // function handleClickDiscountedBtn(e) {
  //   dispatch(filterByDiscountedBtn());
  //   setCurrentPage(1);
  // }

  function handleFilterByCategory(e) {
    dispatch(filterByCategory(e.target.value));
    console.log("SARASA", e.target.value);
    setCurrentPage(1);
  }

  // function handleFilterByCategories(e) {
  //   setFilterByCategories(e.target.value);
  // }

  function handleFeatured(e) {
    dispatch(filterByFeatured(e.target.value));
    setCurrentPage(1);
  }

  // function handlePrice(e) {
  //   dispatch(orderByPrice(e.target.value));
  //   setCurrentPage(1);
  // }

  function handlePrice(e) {
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered by ${e.target.value}`);
  }

  function handleDiscount(e) {
    dispatch(filterByDiscount(e.target.value));
    setCurrentPage(1);
  }

  // function handleFeatured(e) {
  //   setFilterByFeatured(e.target.value);
  // }

  // function handleSortBy(e) {
  //   setSortingBy(e.target.value);
  // }

  // function handleClickApply() {
  //   dispatch(setFilters({ sortingBy, filterByFeatured, filterByCategory }));
  //   setCurrentPage(1);
  // }

  // function handleClickReset() {
  //   dispatch(
  //     setFilters({
  //       filterByCategory: "All",
  //       filterByFeatured: "All",
  //       sortingBy: "All",
  //     })
  //   );
  //   setSortingBy("All");
  //   setFilterByFeatured("All");
  //   filterByCategory("All");
  //   setCurrentPage(1);
  // }

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
              Show All Products
            </button>

            <h4>Filter by category</h4>
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
            </select>
            {/* <button
              className={styles.loadproducts}
              onClick={(e) => {
                handleClickFeaturedBtn(e);
              }}
            >
              Show Featured Products
            </button> */}
            {/* <button
              className={styles.loadproducts}
              onClick={(e) => {
                handleClickDiscountedBtn(e);
              }}
            >
              Show Discounted Products
            </button> */}
            {/* <select
              className={styles.filters}
              // value={filterByFeatured}
              onChange={(e) => handleFeatured(e)}
            >
              <option value="All">All Products</option>
              <option value="Featured">Featured</option>
              <option value="NotFeatured">Not Featured</option>
            </select> */}
            <h4>Filter by featured products</h4>
            <select
              className={styles.filters}
              onChange={(e) => handleFeatured(e)}
            >
              <option value="All">All Products</option>
              <option value="Featured">Featured Products</option>
              {/* <option value="NotFeatured">Not Featured</option> */}
            </select>

            <h4>Filter by discounted products</h4>
            <select
              className={styles.filters}
              onChange={(e) => handleDiscount(e)}
            >
              <option value="All">All Products</option>
              <option value="Discounted">Discounted Products</option>
            </select>

            <h4>Order by price</h4>
            <select
              className={styles.filters}
              onChange={(e) => {
                handlePrice(e);
              }}
              // value={sortingBy}
            >
              <option value="All">Select Order</option>
              <option value="asc">Ascending</option>
              <option value="des">Descending</option>
            </select>
            {/* <button
              className={styles.loadproducts}
              type="button"
              onClick={(e) => {
                handleClickApply(e);
              }}
            >
              Apply
            </button>
            <button
              className={styles.loadproducts}
              type="button"
              onClick={(e) => {
                handleClickReset(e);
              }}
            >
              Reset
            </button> */}
          </div>
          <div className={styles.detail}>
            <h1>Search results</h1>
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
