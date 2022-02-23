import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getDetailClients,
  clearProductDetail,
  addToCart,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductDetail.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Featured from "../Featured/Featured";
import FP from "../Slider/Sliderex/FP";
import imgdft from "../../../assets/imgdft.png";
import PopUpImage from "./PopUpImage";
import PopUpImage1 from "./PopUpImage1";
import PopUpImage2 from "./PopUpImage2";
import PopUpImage3 from "./PopUpImage3";
// import Loading2 from './Loading2';
// import NotFound from './NotFound';


export default function ProductDetail(props) {
  const { idProduct } = useParams();
  const dispatch = useDispatch();
  //el detail deberia obtenerse con un find para no usar product[0]
  const product = useSelector((state) => state.detail);
  const categories = useSelector((state) => state.allCategories);
  
  const [popUpImage, setPopUpImage] = useState(false);
  const [popUpImage1, setPopUpImage1] = useState(false);
  const [popUpImage2, setPopUpImage2] = useState(false);
  const [popUpImage3, setPopUpImage3] = useState(false);

  const addHandler = (product) => {
    dispatch(addToCart(product[0], 1));
    console.log("se agregó " + product[0].name + " al carrito");
  };

  function validate(input) {
    let errors = {};
    if (input.quantity > product[0].stock) 
      errors.quantity = "Stock exceded!";
    else 
    if (input.quantity < 1)
      errors.quantity = "Select at least 1 item";
    else errors.quantity = undefined;
    return errors;
  }


  useEffect(() => {
    dispatch(getDetailClients(idProduct));
    return () => dispatch(clearProductDetail()); // LIMPIO EL ESTADO DEL DETAIL
  }, [dispatch, idProduct]);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    stock: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        {product.length > 0 ? (
          <div className={styles.detail}>
            <div className={styles.card}>
              <div className={styles.images}>
                <div className={styles.thumbs}>
                  <img
                    src={product[0].image[1] ? product[0].image[1] : imgdft}
                    width="200px"
                    alt="img"
                    onClick={() => setPopUpImage1(true)}
                  />
                  <img
                    src={product[0].image[2] ? product[0].image[2] : imgdft}
                    width="200px"
                    alt="img"
                    onClick={() => setPopUpImage2(true)}
                  />
                  <img
                    src={product[0].image[3] ? product[0].image[3] : imgdft}
                    width="200px"
                    alt="img"
                    onClick={() => setPopUpImage3(true)}
                  />
                </div>
                <div className={styles.mainimg}>
                  <img
                    src={product[0].image[0] ? product[0].image[0] : imgdft}
                    width="400px"
                    height="400px"
                    alt="img"
                    onClick={() => setPopUpImage(true)}
                  />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{product[0].name}</div>
                <div>
                  {/* <div className={styles.price}>$ {product[0].price}
                    <span className={styles.favourite}>{product[0].favorite}</span>
                  </div> */}
                  {!product[0].offerPrice ? (
                    <div className={styles.currentregprice}>
                      $ {product[0].price}
                    </div>
                  ) : (
                    <div className={styles.bothprices}>
                      <div className={styles.crossed}>$ {product[0].price}</div>
                      <div className={styles.currentofferprice}>
                        $ {product[0].offerPrice}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className={styles.quantity}>
                    <div className={styles.title}>Stock</div>
                    {/* <div className={styles.data}>
                      <input
                        type="text"
                        name="quantity"
                        maxLength={2}
                        onChange={(e) => handleChange(e)}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div> */}
                    <div className={styles.errors}>
                      {errors.quantity && <span>{errors.quantity}</span>}
                    </div>
                  </div>
                  <div className={styles.stock}>
                    <div className={styles.title}>{product[0].stock}</div>
                    {/* <div className={styles.data}>{product[0].stock}</div> */}
                  </div>
                </div>
                <button
                  className={styles.addtocart}
                  type="submit"
                  onClick={(e) => addHandler(product)}
                >
                  ADD TO CART
                </button>
                {
                  product[0].stock < product[0].inventary ?
                  <div className={styles.stockalert}>There are only {product[0].stock} products left. Hurry!</div> :
                  null
                }
              </div>
            </div>
            <div className={styles.specs}>
              <div className={styles.description}>
                <div className={styles.title}>Description</div>
                <span>{product[0].description}</span>
              </div>
              <div className={styles.productinfo}>
                <div className={styles.title}>Product Information</div>
                <div className={styles.data}>
                  <div className={styles.each}>
                    <div className={styles.title}>Brand:</div>
                    <div className={styles.info}>{product[0].maker}</div>
                  </div>
                  <div className={styles.each}>
                    <div className={styles.title}>Model:</div>
                    <div className={styles.info}>{product[0].model}</div>
                  </div>
                  <div className={styles.each}>
                    <div className={styles.title}>Category:</div>
                    <div className={styles.info}>{product[0].category.name}</div>
                  </div>
                  <div className={styles.each}>
                    <div className={styles.title}>Subcategory:</div>
                    <div className={styles.info}>{product[0].subCategory.name}</div>
                  </div>
                  <div className={styles.each}>
                    <div className={styles.title}>SKU:</div>
                    <div className={styles.info}>{product[0].SKU}</div>
                  </div>
                </div>
              </div>
            </div>
            <PopUpImage
              trigger={popUpImage}
              setTrigger={setPopUpImage}
            ></PopUpImage>
            <PopUpImage1
              trigger={popUpImage1}
              setTrigger={setPopUpImage1}
            ></PopUpImage1>
            <PopUpImage2
              trigger={popUpImage2}
              setTrigger={setPopUpImage2}
            ></PopUpImage2>
            <PopUpImage3
              trigger={popUpImage3}
              setTrigger={setPopUpImage3}
            ></PopUpImage3>
          </div>
        ) : product === 404 ? (
          // <NotFound /> :
          <h1>Not Found</h1>
        ) : (
          // <Loading2 />
          <h1>Loading</h1>
        )}
        <FP />
      </div>
      <Footer />
    </div>
  );
}
