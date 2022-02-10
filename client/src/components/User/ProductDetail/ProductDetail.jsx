import React from 'react';
import { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { getAllProducts } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductDetail.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Loading2 from './Loading2';
// import NotFound from './NotFound';
import image1 from '../../../assets/macbookpro1.jpg';
import image2 from '../../../assets/macbookpro2.jpg';
import image3 from '../../../assets/macbookpro3.jpg';
import image4 from '../../../assets/macbookpro4.jpg';


export default function ProductDetail(props){
    const dispatch = useDispatch()
    const product = useSelector(state => state.allProducts)
    // const product = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getAllProducts());
      },[dispatch])
      
    // console.log(props);
    // const {id} = useParams();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDetail(id));
    //     return () => dispatch(clearDetail()); // LIMPIO EL ESTADO DEL DETAIL
    // },[dispatch, id])

    return (
      <div>
        <Header />
        <div className={styles.main}>
        {product.length > 0 ?
          <div className={styles.detail}>
          <div className={styles.card}>
            <div className={styles.images}>
              <div className={styles.thumbs}>
                <img src={image2} width='200px' alt=''/>
                <img src={image3} width='200px' alt=''/>
                <img src={image4} width='200px' alt=''/>
              </div>
              <div className={styles.mainimg}>
                <img src={image1} width='400px' alt=''/>
              </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{product[0].name}</div>
                <div>
                  <div className={styles.price}>$ {product[0].price}
                    <span className={styles.favourite}>{product[0].favorite}</span>
                  </div>
                </div>
                <div>
                  <div className={styles.quantity}>
                    <div className={styles.title}>Quantity</div>
                    <div className={styles.data}><input type='number' name='quantity'></input></div>
                  </div>
                  <div className={styles.stock}>
                    <div className={styles.title}>Stock</div>
                    <div className={styles.data}>{product[0].stock}</div>
                  </div>
              </div>
              <button className={styles.addtocart} type='submit' >ADD TO CART</button>
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
                  <div className={styles.info}>{product[0].subcategory}</div>
                </div>
                <div className={styles.each}>
                  <div className={styles.title}>SKU:</div>
                  <div className={styles.info}>{product[0].SKU}</div>
                </div>
              </div>
            </div>
            </div>
          </div> :
          product === 404?
          // <NotFound /> :
          <h1>Not Found</h1> :
          // <Loading2 />
          <h1>Loading</h1>
          }
        </div>
        <Footer />
      </div>
    );
  }
