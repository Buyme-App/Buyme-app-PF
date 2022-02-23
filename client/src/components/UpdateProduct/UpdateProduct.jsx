import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./updateProduct.module.css";
// import Uploader from "../AdminNewProduct/Uploader";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { updateProduct } from "../../redux/actions";

function validate(input) {
  let errors = {};
  if (input.name.length < 5) {
    errors.name = "Name must have at least 5 characters";
  }
  if (input.name.length > 50) {
    errors.name = "Name must have at most 50 characters";
  }
  if (!input.name) {
    errors.name = "Name is required";
  }
  const validName = /^[0-9A-Za-z -]*(?<!\.)$/;
  if (input.name.length > 0 && !validName.test(input.name)) {
    errors.name = "Only letters, numbers, spaces and (-)";
  }

  if (!input.maker) {
    errors.maker = "Brand is required";
  }

  if (!input.model) {
    errors.model = "Model is required";
  }

  if (input.name.length > 0 && !validName.test(input.name)) {
    errors.name = "Only letters, numbers, spaces and (-)";
  }

  if (input.SKU.toString().length > 0 && input.SKU < 0) {
    errors.sku = "Positive numbers only, max 8 digits";
  }
  if (input.SKU.toString().length !== 8) {
    errors.sku = "SKU must contain 8 digits";
  }
  if (input.SKU % 1 !== 0) {
    errors.sku = "Integer numbers only";
  }
  if (!input.SKU) {
    errors.sku = "SKU is required";
  }

  if (input.price.length > 0 && input.price < 0) {
    errors.price = "Positive numbers only";
  }
  if (!input.price) {
    errors.price = "Price is required";
  }

  if (input.offerPrice && input.offerPrice.length > 0 && input.offerPrice < 0) {
    errors.offerPrice = "Positive numbers only";
  }

  if (!input.offerPrice) {
    errors.offerPrice = "Price is required";
  }

  // if (!input.featured) {
  //   errors.featured = "Featured is required";
  // }

  // if (!input.paused) {
  //   errors.paused = "Status is required";
  // }

  // if (!input.status) {
  //   errors.status = "Slider Home is required";
  // }

  if (input.stock.length > 0 && input.stock < 0) {
    errors.stock = "Positive numbers only";
  }
  if (input.stock % 1 !== 0) {
    errors.stock = "Integer numbers only";
  }
  if (!input.stock) {
    errors.stock = "At least a Stock of 0 is required";
  }

  if (input.inventary.length > 0 && input.inventary < 0) {
    errors.inventary = "Positive numbers only";
  }
  if (input.inventary % 1 !== 0) {
    errors.inventary = "Integer numbers only";
  }
  if (!input.inventary) {
    errors.inventary = "At least an Inventary of 0 is required";
  }

  return errors;
}

export default function UpdateProduct({
  setActiveUpdate,
  toEdit,
  refreshHandler,
}) {
  const dispatch = useDispatch();
  const allProductsRedux = useSelector((state) => state.allProducts);
  const allCategories = useSelector((state) => state.allCategories);
  const catsWithSubcats = allCategories.filter(
    (el) => el.subCategories.length !== 0
  );

  // const custom_config = {
  //   // extraPlugins: [ MyCustomUploadAdapterPlugin ],
  //   toolbar: {
  //     items: [
  //       "heading",
  //       "|",
  //       "bold",
  //       "italic",
  //       "|",
  //       "link",
  //       "|",
  //       "bulletedList",
  //       "numberedList",
  //       "|",
  //       "blockQuote",
  //       "|",
  //       "insertTable",
  //       "|",
  //       "imageUpload",
  //       "mediaEmbed",
  //       "|",
  //       "undo",
  //       "redo",
  //     ],
  //   },
  //   // table: {
  //   //   contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
  //   // }
  // };
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: toEdit.name,
    id: toEdit.id,
    maker: toEdit.maker,
    model: toEdit.model,
    SKU: toEdit.SKU,
    price: toEdit.price,
    offerPrice: toEdit.offerPrice,
    stock: toEdit.stock,
    inventary: toEdit.inventary,
    description: toEdit.description,
    featured: toEdit.featured,
    paused: toEdit.paused,
    status: toEdit.status,
    categoryId: toEdit.categoryId,
    subCategoryId: toEdit.subCategoryId,
  });

  function handleInputChange(e) {
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

  function handleSubmit(e) {
    e.preventDefault();
    //si existe otro producto con el mismo nombre dara true
    let itExist =
      allProductsRedux.filter(
        (p) =>
          p.name.toLowerCase() === input.name.toLowerCase() && input.id !== p.id
      ).length > 0;

    if (itExist) {
      alert("Name already exists! Please choose a different name");
      setErrors(
        validate({
          ...input,
          [e.target.name]: "Name already exists!",
        })
      );
      // history('/home');
    } else if (
      !Object.keys(errors).length &&
      window.confirm("This product will be updated, are you sure?")
    ) {
      updateProduct(dispatch, input);
      alert("Updated Succesfully!");
      setInput({
        name: "",
        maker: "",
        model: "",
        SKU: "",
        price: "",
        offerPrice: "",
        stock: "",
        inventary: "",
        featured: "",
        description: "",
        paused: "",
        status: "",
        categoryId: "",
        subCategoryId: "",
        // images: "",
      });
      refreshHandler();
      setActiveUpdate(false);
      //   history("/admin/home");
    } else {
      alert("Please review the form!");
    }
  }

  // function handleDelete(e){
  //     setInput({
  //         ...input,
  //         type: input.type.filter(t => t !== e)
  //     })
  // }

  return (
    <div className={styles.gral}>
      <div className={styles.main}>
        <form className={styles.uForm} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.closediv}>
            <button
              className={styles.close}
              onClick={() => setActiveUpdate(false)}
            >
              x
            </button>
          </div>
          <h3>Product Name *</h3>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.name}
              name="name"
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
            <h3>Model *</h3>
            <div className={styles.inputs}>
              <input
                type="text"
                value={input.model}
                name="model"
                className={styles.input}
                placeholder="E.g.: AS1234"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errors}>
                {errors.model && <span>{errors.model}</span>}
              </div>
            </div>

            <h3>SKU *</h3>
            <div className={styles.inputs}>
              <input
                type="text"
                value={input.SKU}
                name="SKU"
                className={styles.input}
                placeholder="E.g.: 12345678"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errors}>
                {errors.sku && <span>{errors.sku}</span>}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <h3>Price *</h3>
            <div className={styles.inputs}>
              <input
                type="text"
                value={input.price}
                name="price"
                className={styles.input}
                placeholder="E.g.: 100"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errors}>
                {errors.price && <span>{errors.price}</span>}
              </div>
            </div>
            {/* ------------Reduced Price---------------- */}
            <div className={styles.inputs1}>
              <h3 className={styles.reduced_price}>
                <span>Reduced Price</span>
              </h3>
              <div className={styles.inputs}>
                <input
                  type="text"
                  value={input.offerPrice}
                  name="offerPrice"
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

          <h3>Stock *</h3>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.stock}
              name="stock"
              className={styles.input}
              placeholder="E.g.: 100"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.stock && <span>{errors.stock}</span>}
            </div>
          </div>

          <h3>Stock Alert *</h3>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.inventary}
              name="inventary"
              placeholder="E.g.: 100"
              onChange={(e) => handleInputChange(e)}
            />
            <div className={styles.errors}>
              {errors.inventary && <span>{errors.inventary}</span>}
            </div>
          </div>

          <h3>Featured Product *</h3>
          <div className={styles.inputs}>
            <select
              value={input.featured}
              name="featured"
              className={styles.select}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <div className={styles.errors}>
              {errors.featured && <span>{errors.featured}</span>}
            </div>
          </div>
          {/* ------------------status----------------- */}
          <h3>Status *</h3>
          <div className={styles.inputs}>
            <select
              defaultValue={input.paused}
              name="paused"
              className={styles.select}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="true">Inactive</option>
              <option value="false">Active</option>
            </select>
            <div className={styles.errors}>
              {errors.paused && <span>{errors.paused}</span>}
            </div>
          </div>
          {/* ------------------slider----------------- */}
          <h3>Slider Home *</h3>
          <div className={styles.inputs}>
            <select
              defaultValue={input.status}
              name="status"
              className={styles.select}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <div className={styles.errors}>
              {errors.status && <span>{errors.status}</span>}
            </div>
          </div>
          {/* ------------------category----------------- */}
          <h3>Category *</h3>
          <div className={styles.inputs}>
            <select
                defaultValue={input.categoryId}
                name="categoryId"
                className={styles.select}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled>
                  Select
                </option>
                {catsWithSubcats?.map((el) => {
                  return (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            <div className={styles.errors}>
              {errors.categoryId && <span>{errors.categoryId}</span>}
            </div>
          </div>
          {/* ------------------subcategory----------------- */}
          <h3>Subcategory *</h3>
          <div className={styles.inputs}>
            <select
                defaultValue={input.subCategoryId}
                name="subCategoryId"
                className={styles.select}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled>
                  Select
                </option>
                {allCategories?.map((el) => {
                  return (
                    <>
                      <option value={el.id} key={el.id} disabled>
                        {el.name}
                      </option>
                      {catsWithSubcats
                        ?.filter((c) => c.subCategories === el.subCategories)
                        .map((s) =>
                          s.subCategories.map((el) => {
                            return (
                              <option value={el.id} key={el.id}>
                                • {el.name}
                              </option>
                            );
                          })
                        )}
                    </>
                  );
                })}
              </select>

            <div className={styles.errors}>
              {errors.subCategoryId && <span>{errors.subCategoryId}</span>}
            </div>
          </div>
          {/* -------------------Category------------------------- */}
          {/* <h3>Category *</h3>
          <div className={styles.inputs}>
            <select
              value={input.category}
              name="SubCategories"
              className={styles.select}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="" disabled>
                Mobile Phones
              </option>
              <option value="Mobile Phones">• Mobile Phones</option>
              <option value="Mobile Phones Accesories">
                • Mobile Phones Accesories
              </option>
              <option value="" disabled>
                Computing
              </option>
              <option value="Laptop Computers">• Laptop Computers</option>
              <option value="Desktop Computers">• Desktop Computers</option>
              <option value="Monitors">• Monitors</option>
              <option value="Printers">• Printers</option>
              <option value="Computing Accesories">
                • Computing Accesories
              </option>
              <option value="" disabled>
                Gaming
              </option>
              <option value="Consoles">• Consoles</option>
              <option value="Consoles Accesories">• Consoles Accesories</option>
            </select>
            <div className={styles.errors}>
              {errors.categorie && <span>{errors.categorie}</span>}
            </div>
          </div> */}

          {/* ---------------Description---------------- */}
          <h3>Description</h3>
          <div className={styles.description_box}>
            <textarea
              value={input.description}
              name="description"
              onChange={(e) => handleInputChange(e)}
            ></textarea>
            {/* <CKEditor
              data={toEdit.description}
              editor={ClassicEditor}
              config={custom_config}
            /> */}
          </div>
          {/* <h3>
            Upload your images <small>(jpg, png and gif formats)</small>
          </h3>
          <div className={styles.uploader}>
            <Uploader />
          </div> */}
          {/* -----------buttons---------------- */}
          <div className={styles.buttons_box}>
            <button className={styles.update} type="submit">
              Update Product
            </button>
          <button
            className={styles.cancel}
            onClick={() => setActiveUpdate(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

    </div>
  );
}
