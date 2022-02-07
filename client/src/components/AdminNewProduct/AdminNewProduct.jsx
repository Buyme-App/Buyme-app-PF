import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { getAllProducts, createProduct } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminNewProduct.module.css";
import Uploader from "./Uploader";
import Editor from "./CKEditor";

function validate(input) {
    let errors = {};
    if (input.name.length < 5) {
        errors.name = 'Name must have at least 5 characters'
    }
    if (input.name.length > 30) {
        errors.name = 'Name must have at most 30 characters'
    }
    if (!input.name) {
      errors.name = 'Name is required'
    }
    const validName = /^[0-9A-Za-z -]*(?<!\.)$/;
    if(input.name.length > 0 && !validName.test(input.name)) {
        errors.name = 'Only letters, numbers, spaces and (-)'
    }

    if (!input.maker) {
      errors.maker = 'Brand is required'
    }

    if (!input.model) {
      errors.model = 'Model is required'
    }

    if(input.name.length > 0 && !validName.test(input.name)) {
        errors.name = 'Only letters, numbers, spaces and (-)'
    }

    if (input.SKU.length > 0 && input.SKU < 0) {
      errors.sku = 'Positive numbers only, max 8 digits'
    }
    if (input.SKU.length > 8) {
      errors.sku = 'Max 8 digits'
    }
    if (input.SKU % 1 !== 0 || input.SKU.includes('.')) {
        errors.sku = 'Integer numbers only'
    }
    if (!input.SKU) {
      errors.sku = 'SKU is required'
    }

    if (input.price.length > 0 && input.price < 0) {
        errors.price = 'Positive numbers only'
    }
    if (!input.price) {
      errors.price = 'Price is required'
    }

    if (input.offerPrice.length > 0 && input.offerPrice < 0) {
      errors.offerPrice = 'Positive numbers only'
    }
    if (!input.offerPrice) {
      errors.offerPrice = 'Price is required'
    }

    if (!input.featured) {
      errors.featured = 'Featured is required'
    }

    if (!input.paused) {
      errors.paused = 'Status is required'
    }

    if (input.stock.length > 0 && input.stock < 0) {
      errors.stock = 'Positive numbers only'
    }
    if (input.stock % 1 !== 0 || input.stock.includes('.')) {
      errors.stock = 'Integer numbers only'
    }
    if (!input.stock) {
      errors.stock = 'At least a Stock of 0 is required'
    }

    if (input.inventary.length > 0 && input.inventary < 0) {
      errors.inventary = 'Positive numbers only'
    }
    if (input.inventary % 1 !== 0 || input.inventary.includes('.')) {
      errors.inventary = 'Integer numbers only'
    }
    if (!input.inventary) {
      errors.inventary = 'At least an Inventary of 0 is required'
    }

    return errors;
}

export default function PokemonCreate(){
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
      dispatch(getAllProducts());
      // dispatch(getCategories());
    },[dispatch])

    const allProdutcs = useSelector((state) => state.allproducts);
    // const allCategories = useSelector((state) => state.allcategories);
    
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        maker: '',
        model: '',
        SKU: '',
        price: '',
        offerPrice: '',
        stock: '',
        inventary: '',
        description: '',
        featured: '',
        paused: '',
    })

    function handleInputChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    // function handleSelect(e){
    //   setInput({
    //       ...input,
    //       [e.target.name]: e.target.value 
    //   })
    //   setErrors(validate({
    //       ...input,
    //       [e.target.name]: e.target.value
    //   }))
    // }

    // function handleSelect(e){
    //     if(input.type.includes(e.target.value)){
    //         setInput({
    //             ...input,
    //             type: input.type.filter(t => t === e.target.value)
    //         })
    //     } else {
    //         setInput({
    //             ...input,
    //             type: [...input.type, e.target.value]
    //         })
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
        // const errors = validate(input);
        // if (allPokemons.find((p) =>p.name.toLowerCase() === input.name.toLowerCase().trim())) {
        if (allProdutcs.find(p =>p.name === input.name)) {
            alert('Name already exists! Please choose a different name.');
            // setInput({
            //     name: '',
            //   });
            setErrors(validate({
              ...input,
              [e.target.name]: 'Name already exists!',
            }));
            // history('/home');
        } else if (!Object.keys(errors).length) {
          dispatch(createProduct(input));
          alert('Product created succssesfully!!');
          setInput({
            name: '',
            maker: '',
            model: '',
            SKU: '',
            price: '',
            offerPrice: '',
            stock: '',
            inventary: '',
            featured: '',
            description: '',
            paused: '',
            images: '',

          });
          history('/admin/home');
        } else {
          alert('Please review the form!');
        }
      }

    // function handleDelete(e){
    //     setInput({
    //         ...input,
    //         type: input.type.filter(t => t !== e)
    //     })
    // }

    return (
      <div className={styles.main}>
        {/* <h1 className={styles.title}>Create New Product</h1> */}
          <h3>Product Name *</h3>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.name}
              name= "name"
              className={styles.input}
              placeholder="E.g.: Apple AirPods (2nd Generation)"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.name && <span>{errors.name}</span>}
            </div>
          </div>
  
          <h3>Brand *</h3>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.maker}
              name="maker"
              className={styles.input}
              placeholder="E.g.: Apple"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.maker && <span>{errors.maker}</span>}
            </div>
          </div>
  
          <div className={styles.row}>
            <div className={styles.inputs1}>
              <h3>Model *</h3>
              <div className={styles.inputs2}>
                <input
                  type="text"
                  value={input.model}
                  name= "model"
                  className={styles.input}
                  placeholder="E.g.: Airpods"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className={styles.errors}>
                  {errors.model && <span>{errors.model}</span>}
                </div>
              </div>
            </div>
    
            <div className={styles.inputs1}>
              <h3>SKU *</h3>
              <div className={styles.inputs2}>
                <input
                  type="text"
                  value={input.SKU}
                  name= "SKU"
                  className={styles.input}
                  placeholder="E.g.: AJ123456"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className={styles.errors}>
                  {errors.sku && <span>{errors.sku}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row}>
          <div className={styles.inputs1}>
            <h3>Price *</h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.price}
                name= "price"
                className={styles.input}
                placeholder="E.g.: 100"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errors}>
                {errors.price && <span>{errors.price}</span>}
              </div>
            </div>
            </div>
    
            <div className={styles.inputs1}>
            <h3>Reduced Price
              <input id="isoffer" type="checkbox" className={styles.checkbox} />
            </h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.offerPrice}
                name= "offerPrice"
                className={styles.input}
                placeholder="E.g.: 100"
                // disabled="disabled"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errors}>
                {errors.offerPrice && <span>{errors.offerPrice}</span>}
              </div>
              </div>
            </div>
          </div>
  
          <div className={styles.row}>
          <div className={styles.inputs1}>
          <h3>Stock *</h3>
          <div className={styles.inputs2}>
            <input
              type="text"
              value={input.stock}
              name= "stock"
              className={styles.input}
              placeholder="E.g.: 100"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.stock && <span>{errors.stock}</span>}
            </div>
          </div>
          </div>
  
          <div className={styles.inputs1}>
          <h3>Inventory *</h3>
          <div className={styles.inputs2}>
            <input
              type="text"
              value={input.inventary}
              name= "inventary"
              className={styles.input}
              placeholder="E.g.: 100"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.inventary && <span>{errors.inventary}</span>}
            </div>
          </div>
          </div>
          </div>
  
          <div className={styles.row}>
          <div className={styles.inputs1}>
          <h3>Featured Product *</h3>
          <div className={styles.inputs2}>
          <select name="featured" className={styles.select} onChange={(e) => handleInputChange(e)}>
            <option value="" selected disabled>Select</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <div className={styles.errors}>
            {errors.featured && <span>{errors.featured}</span>}
          </div>
          </div>
          </div>

          {/* <select value="false" name="Featured" className={styles.select}>
            {featured.map((e) => (
            <option value={e.value}>{e.label}</option>
            ))}
          </select> */}
  
          <div className={styles.inputs1}>
          <h3>Status *</h3>
          <div className={styles.inputs2}>
          <select name="paused" className={styles.select} onChange={(e) => handleInputChange(e)}>
            <option value="" selected disabled>Select</option>
            <option value="true">Inactive</option>
            <option value="false">Active</option>
          </select>
          <div className={styles.errors}>
            {errors.paused && <span>{errors.paused}</span>}
          </div>
          </div>
          </div>
          </div>
         
         <h3>Category *</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.inputs}>
            {/* <select name="SubCategories" className={styles.select} onChange={(e) => handleSelectChange(e)}> */}
            <select name="SubCategories" className={styles.select}>
              <option value="" selected disabled>
                Select Category
              </option>
              <option value="" disabled>
                Mobile Phones
              </option>
              <option value="Mobile Phones"> • Mobile Phones</option>
              <option value="Mobile Phones Accesories"> • Mobile Phones Accesories</option>
              <option value="" disabled>
                Computing
              </option>
              <option value="Laptop Computers"> • Laptop Computers</option>
              <option value="Desktop Computers"> • Desktop Computers</option>
              <option value="Monitors"> • Monitors</option>
              <option value="Printers"> • Printers</option>
              <option value="Computing Accesories"> • Computing Accesories</option>
              <option value="" disabled>
                Video Games
              </option>
              <option value="Consoles"> • Consoles</option>
              <option value="Consoles Accesories"> • Consoles Accesories</option>
            </select>
            <div className={styles.errors}>
              {errors.categorie && <span>{errors.categorie}</span>}
            </div>
          </div>

          <h3>Description</h3>
          <div className={styles.ckeditor}>
            <Editor />
          </div>
          <h3>
            Upload your images <small>(jpg, png and gif formats)</small>
          </h3>
          <div className={styles.uploader}>
            <Uploader />
          </div>
          <button className={styles.create} type='submit' disabled={!input.name}>
            Create Product
          </button>
        </form>
      </div>
    );
  }
