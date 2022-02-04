import React from 'react';
import { useState , useEffect } from 'react';
import styles from "./AdminNewProduct.module.css";
// import Uploader from '../Uploader/Uploader';
import Editor from './CKEditor';

// function validate(input) {
//     let errors = {};
    
//     if (input.name.length < 4) {
//         errors.name = '<- Min 4 characters'
//     }
//     if (input.name.length > 15) {
//         errors.name = '<- Max 15 characters'
//     }
//     if (!input.name) {
//         errors.name = '<- Name is required'
//     }
//     // if(!/^[A-Za-z-]*(?<!\.)$/.test(input.name)) {
//     //     errors.name = '<- Only letters and (-)'
//     // }

//     const validName = /^[A-Za-z-]*$/;

//     if(input.name.length > 0 && !validName.test(input.name)) {
//         errors.name = '<- Only letters and (-)'
//     }

//     if (input.hp < 0) {
//         errors.hp = '<- Positive numbers only'
//     }
//     if (input.hp > 200) {
//         errors.hp = '<- 200 max value'
//     }
//     if (input.hp % 1 !== 0 || input.hp.includes('.')) {
//         errors.hp = '<- Integer numbers only'
//     }

//     if (input.attack < 0) {
//         errors.attack = '<- Positive numbers only'
//     }
//     if (input.attack > 200) {
//         errors.attack = '<- 200 max value'
//     }
//     if (input.attack % 1 !== 0 || input.attack.includes('.')) {
//         errors.attack = '<- Integer numbers only'
//     }

//     if (input.defense < 0) {
//         errors.defense = '<- Positive numbers only'
//     }
//     if (input.defense > 200) {
//         errors.defense = '<- 200 max value'
//     }
//     if (input.defense % 1 !== 0 || input.defense.includes('.')) {
//         errors.defense = '<- Integer numbers only'
//     }

//     if (input.speed < 0) {
//         errors.speed = '<- Positive numbers only'
//     }
//     if (input.speed > 200) {
//         errors.speed = '<- 200 max value'
//     }
//     if (input.speed % 1 !== 0 || input.speed.includes('.')) {
//         errors.speed = '<- Integer numbers only'
//     }

//     if (input.height < 0) {
//         errors.height = '<- Positive numbers only'
//     }
//     if (input.height > 200) {
//         errors.height = '<- 200 max value'
//     }
//     if (input.height % 1 !== 0 || input.height.includes('.')) {
//         errors.height = '<- Integer numbers only'
//     }

//     if (input.weight < 0) {
//         errors.weight = '<- Positive numbers only'
//     }
//     if (input.weight > 1000) {
//         errors.weight = '<- 1000 max value'
//     }
//     if (input.weight % 1 !== 0 || input.weight.includes('.')) {
//         errors.weight = '<- Integer numbers only'
//     }
//     return errors;
// }

export default function AdminNewProduct(){
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        category: '',
        name: '',
        brand: '',
        model: '',
        sku: '',
        price: '',
        discount: '',
        stock: '',
        featured: '',
        description: '',
        images: ''
    })

    // function handleSelectChange(e){
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value 
    //     })
    //     setErrors(validate({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    // function handleInputChange(e){
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value 
    //     })
    //     setErrors(validate({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    // document.getElementById('isOffer').onchange = function() {
    //     document.getElementById('discount').disabled = !this.checked;
    // };

    return (
        <div className={styles.main}>
            <h1>Create New Product</h1>
            <h3>Category *</h3>
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <form>
            <div className={styles.inputs}>
            {/* <select name="Categories" className={styles.select} onChange={(e) => handleSelectChange(e)}> */}
            <select name="Categories" className={styles.select}>
                <option value="" selected disabled>Select Category</option>
                <option value="" disabled>Mobile Phones</option>
                <option value="mobPhones"> • Mobile Phones</option>
                <option value="mobPhonesAcc"> • Accesories</option>
                <option value="" disabled>Computing</option>
                <option value="laptops"> • Laptop Computers</option>
                <option value="desktop"> • Desktop Computers</option>
                <option value="monitors"> • Monitors</option>
                <option value="printers"> • Printers</option>
                <option value="pcAcc"> • Accesories</option>
                <option value="" disabled>Video Games</option>
                <option value="consoles"> • Consoles</option>
                <option value="consolesAcc"> • Accesories</option>
            </select>
            <div className={styles.errors}>{errors.name && (
                <span>{errors.name}</span>
            )}</div>
            </div>

            <h3>Product Name *</h3>
            <div className={styles.inputs}>
            <input
            id='name'
            type='text'
            // value={input.name}
            className={styles.input}
            placeholder='E.g.: Apple AirPods (2nd Generation)'
            // onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>{errors.name && (
                <span>{errors.name}</span>
            )}</div>
            </div>

            <h3>Brand *</h3>
            <div className={styles.inputs}>
            <input
            id='brand'
            type='text'
            // value={brand}
            className={styles.input}
            placeholder='E.g.: Apple'
            // onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>{errors.brand && (
                <span>{errors.brand}</span>
            )}</div>
            </div>

            <h3>Model *</h3>
            <div className={styles.inputs}>
            <input
            id='model'
            type='text'
            // value={model}
            className={styles.input}
            placeholder='E.g.: Airpods'
            // onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>{errors.model && (
                <span>{errors.model}</span>
            )}</div>
            </div>

            <h3>SKU / Article number  *</h3>
            <div className={styles.inputs}>
            <input
            id='sku'
            type='text'
            // value={sku}
            className={styles.input}
            placeholder='E.g.: AJ123456'
            // onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>{errors.sku && (
                <span>{errors.sku}</span>
            )}</div>
            </div>

            <h3>Price *</h3>
            <div className={styles.inputs}>
            <input
            id='price'
            type='text'
            // value={price}
            className={styles.input}
            placeholder='E.g.: 100'
            // onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>{errors.price && (
                <span>{errors.price}</span>
            )}</div>
            </div>

            <h3>Reduced Price
                <input id='isoffer' type='checkbox' className={styles.checkbox} />
            </h3>
            <div className={styles.inputs}>
            <input
            id='discount'
            type='text'
            // value={discount}
            className={styles.input}
            placeholder='E.g.: 100'
            disabled='disabled'
            // onChange={(e) => handleInputChange(e)}
            />
            </div>

            <h3>Stock *</h3>
            <div className={styles.inputs}>
            <input
            id='stock'
            type='text'
            // value={stock}
            className={styles.input}
            placeholder='E.g.: 100'
            // onChange={(e) => handleInputChange(e)}
            />
            </div>

            <h3>Featured Product *</h3>
            {/* <select name="Types" className={styles.types} onChange={(e) => handleSelect(e)}> */}
            <select name="Types" className={styles.select}>
                <option value="" selected disabled>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <h3>Description *</h3>
            <div className={styles.ckeditor}>
            <Editor />
            </div>
            <h3>Upload your images * <small>(jpg, png and gif formats)</small></h3>
            <div className={styles.uploader}>
                {/* <Uploader /> */}
            </div>
            <button className={styles.create} type='submit'>CREATE PRODUCT</button>
        </form>
        </div>
    )
}