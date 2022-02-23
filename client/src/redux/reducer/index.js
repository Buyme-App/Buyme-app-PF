import {
  LOGIN,
  LOG_OUT,
  LOADING,
  ERROR_MODAL,
  GET_ALL_USERS,
  POST_USERS,
  GET_ALL_CATEGORIES,
  GET_SUBCATEGORIE_BY_ID,
  UPDATE_PRODUCT,
  GET_PRODUCTS_INIT,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
  POST_NEW_PRODUCT,
  POST_NEW_CATEGORY,
  POST_NEW_SUBCATEGORY,
  DELETE_CATEGORY,
  DELETE_SUBCATEGORY,
  DELETE_USER,
  UPDATE_USER,
  // GET_CUSTOMER,
  POST_CUSTOMER,
  GET_ALL_PRODUCTS_CLIENT,
  GET_DETAIL_CLIENT,
  GET_PRODUCTS_BY_NAME_CLIENTS,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  ADD_ONE_TO_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  FILL_CART,
  // SET_FILTERS,
  FILTER_BY_FEATURED_BTN,
  FILTER_BY_DISCOUNTED_BTN,
  FILTER_BY_FEATURED,
  FILTER_BY_FEATURED_CAT,
  ORDER_BY_PRICE,
  FILTER_BY_DISCOUNT,
  ORDER_BY_PRICE_CAT,
  GET_ALL_INVOICES,
  FILTER_BY_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY,
  POST_LOGIN_CUSTOMER,
  POST_EMAIL,
  URL_MP
} from "../actions/index";

const initialState = {
  allUsers: [],
  allCategories: [],
  subcategories: [],
  allProducts: [],
  products: [],
  orderedproducts: [],
  detail: [],
  customer: {},
  login: null,
  loading: false,
  error: false,
  cart: [],
  allInvoices:[],
  urlMP:[]
};
//s
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_MODAL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PRODUCTS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_CLIENT:
        return {
          ...state,
          allProducts: action.payload,
          products: action.payload,
          loading: false,
        };
    // case GET_ALL_PRODUCTS_CLIENT:
    //   const allProducts = state.products;
    //   const activeProducts = allProducts.filter((p) => p.paused === false)
    //   return {
    //     ...state,
    //     allProducts: activeProducts,
    //     products: activeProducts,
    //     loading: false,
    //   };

    // case FILTER_BY_FEATURED_BTN:
    //   const allProductsD = state.products;
    //   const filterByFeaturedBtn = allProductsD.filter(
    //     (p) => p.featured === true
    //   );
    //   return {
    //     ...state,
    //     products: filterByFeaturedBtn,
    //   };

    case GET_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    // case GET_PRODUCTS_BY_NAME:
    //   if (!action.payload) {
    //     return {
    //       ...state,
    //       products: [404],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       products: action.payload,
    //     };
    //   }
    case GET_PRODUCTS_BY_NAME_CLIENTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    // case GET_PRODUCTS_BY_NAME_CLIENTS:
    //   if (!action.payload) {
    //     return {
    //       ...state,
    //       products: [404],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       products: action.payload,
    //     };
    //   }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    // case GET_PRODUCT_DETAIL:
    //   if (!action.payload) {
    //     return {
    //       ...state,
    //       detail: [404],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       detail: action.payload,
    //     };
    //   }
    case GET_DETAIL_CLIENT:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    // case GET_DETAIL_CLIENT:
    //   if (!action.payload) {
    //     return {
    //       ...state,
    //       detail: [404],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       detail: action.payload,
    //     };
    //   }
    case CLEAR_PRODUCT_DETAIL:
      return {
        ...state,
        detail: {},
      };
    case POST_NEW_PRODUCT:
      return {
        ...state,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case GET_SUBCATEGORIE_BY_ID:
      return {
        ...state,
        subcategories: action.payload,
      };
    case POST_NEW_CATEGORY:
      return {
        ...state,
      };
    case POST_NEW_SUBCATEGORY:
      return {
        ...state,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
      };
    case DELETE_SUBCATEGORY:
      return {
        ...state,
      };
    case DELETE_USER:
      return {
        ...state,
      };
    case UPDATE_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    // case GET_CUSTOMER:
    //   let currentCustomer = state.customer;
    //   localStorage.setItem('cliente', JSON.stringify(currentCustomer));
    //   let client = JSON.parse(localStorage.getItem('cliente'));
    //   console.log(client);
    //   return {
    //     ...state,
    //     customer: action.payload,
    //   };
    case POST_LOGIN_CUSTOMER:
      localStorage.setItem('cliente', JSON.stringify(action.payload));
      JSON.parse(localStorage.getItem('cliente'));
      return{
        ...state,
        customer: action.payload 
      }
    case LOG_OUT:
      localStorage.setItem("cliente", JSON.stringify(state.customer === []));
      return{
         ...state,
         customer:[]
      }
    case POST_CUSTOMER:
      return {
        ...state,
      };
    case GET_ALL_INVOICES:
      return {
        ...state,
        allInvoices: action.payload
      };
    case ADD_TO_CART:
      let { product, amount } = action.payload;

      let cartUpdated;
      //si ya existe
      if (state.cart.some((e) => e.id === product.id)) {
        cartUpdated = state.cart.map((e) => {
          if (e.id === product.id) {
            //cada vez que se haga add to cart al mismo producto, la cantidad aumentará
            e.amount++;
            e.price = e.price * amount;
            return e;
          } else return e;
        });
      } else {
        cartUpdated = [
          ...state.cart,
          {
            img: product.image,
            name: product.name,
            id: product.id,
            price: product.price,
            amount: 1,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(cartUpdated));

      return {
        ...state,
        cart: cartUpdated,
      };

    case CLEAR_CART:
        localStorage.setItem("cart", JSON.stringify(state.cart === []));
      return{
         ...state,
         cart:[]
       }
 
    case REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.amount > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, amount: item.amount - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    case ADD_ONE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case FILL_CART:
      const data1= JSON.parse(localStorage.getItem("cart"))
        return{
            ...state,
            cart: data1
      }


    // case SET_FILTERS:
    //   const filteredByCategory = state.allProducts.filter(
    //     (products) =>
    //       products.category.includes(action.payload.filterByCategory) ||
    //       action.payload.filterByCategory === "All"
    //   );

    //   let filteredByFeatured = filteredByCategory;
    //   if (action.payload.filterByFeatured !== "All") {
    //     if (action.payload.filterByFeatured === "true") {
    //       filteredByFeatured = filteredByFeatured.filter(
    //         (products) => products.featured
    //       );
    //     } else {
    //       filteredByFeatured = filteredByFeatured.filter(
    //         (products) => !products.featured
    //       );
    //     }
    //   }
    //   let sortedList = filteredByFeatured;

    //   switch (action.payload.sortingBy) {
    //     // case "asc":
    //     //   sortedList = sortedList.sort((a, b) => {
    //     //     if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim())
    //     //       return -1;
    //     //     if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim())
    //     //       return 1;
    //     //     return 0;
    //     //   });
    //     //   break;

    //     // case "des":
    //     //   sortedList = sortedList.sort((a, b) => {
    //     //     if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim())
    //     //       return 1;
    //     //     if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim())
    //     //       return -1;
    //     //     return 0;
    //     //   });
    //     //   break;

    //     case "high":
    //       sortedList = sortedList.sort((a, b) => {
    //         return b.price - a.price;
    //       });
    //       break;

    //     case "low":
    //       sortedList = sortedList.sort((a, b) => {
    //         return a.price - b.price;
    //       });
    //       break;
    //     default:
    //       break;
    //   }

    //   return {
    //     ...state,
    //     products: sortedList,
    //   };

    // case FILTER_BY_CATEGORY:
    //   const filteredByCategory = state.allProducts.filter(
    //     (p) =>
    //       p.allCategories.id === action.payload ||
    //       action.payload === "All");
    //       if(!filteredByCategory.length){
    //         return {
    //           ...state,
    //           products: [404]
    //           }
    //       } else {
    //           return {
    //               ...state,
    //               products: filteredByCategory
    //           }
    //       };
      
      // const allProductsF = state.allProducts;
      case FILTER_BY_CATEGORY:
      const agus = state.allProducts.map(p => {
        return {
          categoryId: p.categoryId
        }
      });
      console.log("AGUSSSSSS", agus)
      const filteredByCategory = action.payload === 'All' ? state.allProducts :
      console.log("XXXXXXX", action.payload);
      agus.filter((p) => p.categoryId === action.payload)
      console.log("AAAAAAAAA", state.allProducts[0].categoryId)
      // if(!filteredByCategory.length){
      //     return {
      //         ...state,
      //         products: [404]
      //     }
      // } else {
          return {
              ...state,
              products: filteredByCategory
          }
      

    case FILTER_BY_FEATURED:
      const allProductsA = state.allProducts;
      const filteredByFeatured =
        action.payload === "All"
          ? allProductsA
          : action.payload === "Featured"
          ? allProductsA.filter((p) => p.featured === true)
          : allProductsA.filter((p) => p.featured === false);
      if (!filteredByFeatured.length) {
        return {
          ...state,
          products: [404],
        };
      } else {
        return {
          ...state,
          products: filteredByFeatured,
        };
      }

      case FILTER_BY_FEATURED_CAT:
        const allProductsJ = state.products;
        const filteredByFeaturedCat =
          action.payload === "All"
            ? allProductsJ
            : action.payload === "Featured"
            ? allProductsJ.filter((p) => p.featured === true)
            : allProductsJ.filter((p) => p.featured === false);
        if (!filteredByFeaturedCat.length) {
          return {
            ...state,
            products: [404],
          };
        } else {
          return {
            ...state,
            products: filteredByFeaturedCat,
          };
        }

    case ORDER_BY_PRICE:
      const allProductsB = state.allProducts;
      const orderedproducts =
        // action.payload === "asc"
        //   ? allProductsB.sort((a, b) => {
        //       if (a.name > b.name) {
        //         return 1;
        //       }
        //       if (b.name > a.name) {
        //         return -1;
        //       }
        //       return 0;
        //     })
        //   : action.payload === "desc"
        //   ? allProductsB.sort((a, b) => {
        //       if (a.name > b.name) {
        //         return -1;
        //       }
        //       if (b.name > a.name) {
        //         return 1;
        //       }
        //       return 0;
        //     })
        //   :
        action.payload === "asc"
          ? allProductsB.sort((a, b) => {
              // if (a.price < b.price){
              //     return -1;
              // }
              // if (b.price < a.price){
              //     return 1;
              // }
              // return 0;
              return a.price - b.price;
            })
          : action.payload === "desc"
          ? allProductsB.sort((a, b) => {
              // if (a.price > b.price){
              //     return -1;
              // }
              // if (b.price > a.price){
              //     return 1;
              // }
              // return 0;
              return b.price - a.price;
            })
          : action.payload === "All"
          ? allProductsB.sort((a, b) => {
              // if (a.price < b.price){
              //     return -1;
              // }
              // if (b.price < a.price){
              //     return 1;
              // }
              // return 0;
              return b.id - a.id;
            })
          : allProductsB.sort((a, b) => {
              return a.id - b.id;
            });
      return {
        ...state,
        products: orderedproducts,
      };

      case ORDER_BY_PRICE_CAT:
        const allProductsK = state.products;
        const orderedproductscat =
          action.payload === "asc"
            ? allProductsK.sort((a, b) => {
                // if (a.price.substring(0, 10) < b.price.substring(0, 10)){
                //     return 1;
                // }
                // if (b.price.substring(0, 10) < a.price.substring(0, 10)){
                //     return -1;
                // }
                // return 0;
                return a.price - b.price;
              })
            : action.payload === "desc"
            ? allProductsK.sort((a, b) => {
                // if (a.price.substring(0, 10) > b.price.substring(0, 10)){
                //     return 1;
                // }
                // if (b.price.substring(0, 10) > a.price.substring(0, 10)){
                //     return -1;
                // }
                // return 0;
                return b.price - a.price;
              })
            : action.payload === "All"
            ? allProductsK.sort((a, b) => {
                // if (a.id < b.id){
                //     return -1;
                // }
                // if (b.id < a.id){
                //     return 1;
                // }
                // return 0;
                return b.id - a.id;
              })
            : allProductsK.sort((a, b) => {
                return a.id - b.id;
              });
        return {
          ...state,
          products: orderedproductscat,
        };

    case FILTER_BY_DISCOUNT:
      const allProductsC = state.allProducts;
      const filteredByDiscount =
        action.payload === "All"
          ? allProductsC
          // : action.payload === "Discounted"
          // ? allProductsC.filter((p) => p.featured === true)
          : allProductsC.filter((p) => p.offerPrice);
      if (!filteredByDiscount.length) {
        return {
          ...state,
          products: [404],
        };
      } else {
        return {
          ...state,
          products: filteredByDiscount,
        };
      }

    case FILTER_BY_FEATURED_BTN:
      const allProductsD = state.products;
      const filterByFeaturedBtn = allProductsD.filter(
        (p) => p.featured === true
      );
      return {
        ...state,
        products: filterByFeaturedBtn,
      };

    case FILTER_BY_DISCOUNTED_BTN:
      const allProductsE = state.products;
      const filterByDiscountedBtn = allProductsE.filter(
        (p) => p.offerPrice !== null
      );
      return {
        ...state,
        products: filterByDiscountedBtn,
      };

    case POST_EMAIL:
        return {
            ...state
        };
      

    default:
      return state;
  }
}