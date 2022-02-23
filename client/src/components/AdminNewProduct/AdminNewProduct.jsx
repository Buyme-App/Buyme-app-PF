import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  getAllCategories,
  createProduct,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminNewProduct.module.css";
// import Uploader from "./Uploader";
// import Editor from "./CKEditor";

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
  const validName = /^[0-9A-Za-z -"]*(?<!\.)$/;
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

  if (input.SKU.length > 0 && input.SKU < 0) {
    errors.sku = "Positive numbers only, max 8 digits";
  }
  if (input.SKU.length !== 8) {
    errors.sku = "SKU must contain 8 digits";
  }
  if (input.SKU % 1 !== 0 || input.SKU.includes(".")) {
    errors.sku = "Integer numbers only";
  }
  if (!input.SKU) {
    errors.sku = "SKU is required";
  }

  const validNumber = /^[0-9.]*(?<!\.)$/;
  if (input.price.length > 0 && input.price < 0) {
    errors.price = "Positive numbers only";
  }
  if (!input.price) {
    errors.price = "Price is required";
  }
  // if (input.price.includes(',')) {
  //   errors.price = 'Only dot allowed for decimal numbers'
  // }
  if (input.price.length > 0 && !validNumber.test(input.price)) {
    errors.price = "Numbers and dot (.) only for decimals";
  }

  if (
    input.offerPrice !== null &&
    input.offerPrice.length > 0 &&
    input.offerPrice < 0
  ) {
    errors.offerPrice = "Positive numbers only";
  }

  // if (input.offerPrice.includes(',')) {
  //   errors.offerPrice = 'Only dot allowed for decimal numbers'
  // }
  if (
    input.offerPrice !== null &&
    input.offerPrice.length > 0 &&
    !validNumber.test(input.offerPrice)
  ) {
    errors.offerPrice = "Numbers and dot (.) only for decimals";
  }

  if (input.stock.length > 0 && input.stock < 0) {
    errors.stock = "Positive numbers only";
  }
  if (input.stock % 1 !== 0 || input.stock.includes(".")) {
    errors.stock = "Integer numbers only";
  }
  if (!input.stock) {
    errors.stock = "At least a Stock of 0 is required";
  }

  if (input.inventary.length > 0 && input.inventary < 0) {
    errors.inventary = "Positive numbers only";
  }
  if (input.inventary % 1 !== 0 || input.inventary.includes(".")) {
    errors.inventary = "Integer numbers only";
  }
  if (!input.inventary) {
    errors.inventary = "At least an Inventory of 0 is required";
  }

  if (!input.featured) {
    errors.featured = "Featured is required";
  }

  if (!input.paused) {
    errors.paused = "Status is required";
  }

  if (!input.status) {
    errors.status = "Slider Home is required";
  }

  if (!input.categoryId) {
    errors.categoryId = "Category is required";
  }

  if (!input.subCategoryId) {
    errors.subCategoryId = "Subcategory is required";
  }

  return errors;
}

export default function AdminNewProduct({ setPanelActive }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [offer, setOffer] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  const allProdutcs = useSelector((state) => state.allProducts);
  const allCategories = useSelector((state) => state.allCategories);
  const catsWithSubcats = allCategories.filter(
    (el) => el.subCategories.length !== 0
  );

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    maker: "",
    model: "",
    SKU: "",
    price: "",
    offerPrice: "",
    stock: "",
    inventary: "",
    description: "",
    featured: "",
    paused: "",
    status: "",
    categoryId: "",
    subCategoryId: "",
    image: [],
  });

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setInput((prev) => ({ ...prev, image: [...prev.image, base64] }));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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

  function handleSelectChange(e) {
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
    const errors = validate(input);
    if (
      allProdutcs.length &&
      allProdutcs.find((p) => p.name.toLowerCase() === input.name.toLowerCase())
    ) {
      alert("Name already exists! Please choose a different name.");
      // setInput({
      //     name: '',
      //   });
      setErrors(
        validate({
          ...input,
          [e.target.name]: "Name already exists!",
        })
      );
      // history('/home');
    } else if (!Object.keys(errors).length) {
      //set to null to not have errors
      if (!input.offerPrice.length) input.offerPrice = null;
      dispatch(createProduct(input));
      alert("Product created succssesfully!!");
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
        image: [],
      });
      dispatch(getAllProducts());

      setPanelActive({
        home: false,
        sales: false,
        newProduct: false,
        products: true,
        categories: false,
        customers: false,
        queries: false,
        account: false,
      });
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
    <div className={styles.main}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <div className={styles.errorsContainer}>
            {errors.name && (
              <span className={styles.errors}>{errors.name}</span>
            )}
          </div>
        </div>

        {/* <h3>Brand *</h3>
        <div className={styles.inputs}>
          <input
            type="text"
            value={input.maker}
            name="maker"
            className={styles.input}
            placeholder="E.g.: Apple"
            onChange={(e) => handleInputChange(e)}
          />
          <div className={styles.errorsContainer}>
            {errors.maker && (
              <span className={styles.errors}>{errors.maker}</span>
            )}
          </div>
        </div> */}

        <div className={styles.row}>
          <div className={styles.inputs1}>
              <h3>Brand *</h3>
              <div className={styles.inputs2}>
                <input
                  type="text"
                  value={input.maker}
                  name="maker"
                  className={styles.input}
                  placeholder="E.g.: Apple"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className={styles.errorsContainer}>
                  {errors.maker && (
                    <span className={styles.errors}>{errors.maker}</span>
                  )}
                </div>
              </div>
            </div>

          <div className={styles.inputs1}>
            <h3>Model *</h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.model}
                name="model"
                className={styles.input}
                placeholder="E.g.: Airpods"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.model && (
                  <span className={styles.errors}>{errors.model}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>SKU *</h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.SKU}
                name="SKU"
                className={styles.input}
                placeholder="E.g.: 12345678"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.sku && (
                  <span className={styles.errors}>{errors.sku}</span>
                )}
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
                name="price"
                className={styles.input}
                placeholder="E.g.: 100"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.price && (
                  <span className={styles.errors}>{errors.price}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>
              Reduced Price
              <input
                id="isoffer"
                type="checkbox"
                defaultChecked={offer}
                className={`${styles.checkbox}`}
                onClick={(e) => setOffer(e.target.checked)}
              />
            </h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.offerPrice}
                name="offerPrice"
                className={`${styles.input} ${!offer ? styles.off : null}`}
                placeholder="E.g.: 100"
                // disabled="disabled"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.offerPrice && (
                  <span className={styles.errors}>{errors.offerPrice}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>Stock *</h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.stock}
                name="stock"
                className={styles.input}
                placeholder="E.g.: 100"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.stock && (
                  <span className={styles.errors}>{errors.stock}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputs1}>
            <h3>Featured Product *</h3>
            <div className={styles.inputs2}>
              <select
                defaultValue=""
                name="featured"
                className={styles.select}
                onChange={(e) => handleSelectChange(e)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              <div className={styles.errorsContainer}>
                {errors.featured && (
                  <span className={styles.errors}>{errors.featured}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>Status *</h3>
            <div className={styles.inputs2}>
              <select
                defaultValue=""
                name="paused"
                className={styles.select}
                onChange={(e) => handleSelectChange(e)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="true">Inactive</option>
                <option value="false">Active</option>
              </select>
              <div className={styles.errorsContainer}>
                {errors.paused && (
                  <span className={styles.errors}>{errors.paused}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>Stock Alert *</h3>
            <div className={styles.inputs2}>
              <input
                type="text"
                value={input.inventary}
                name="inventary"
                className={styles.input}
                placeholder="E.g.: 100"
                onChange={(e) => handleInputChange(e)}
              />
              <div className={styles.errorsContainer}>
                {errors.inventary && (
                  <span className={styles.errors}>{errors.inventary}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputs1}>
            <h3>Category *</h3>
            <div className={styles.inputs2}>
              <select
                defaultValue=""
                name="categoryId"
                className={styles.select}
                onChange={(e) => handleSelectChange(e)}
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
              <div className={styles.errorsContainer}>
                {errors.categoryId && (
                  <span className={styles.errors}>{errors.categoryId}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>Subcategory *</h3>
            <div className={styles.inputs2}>
              <select
                defaultValue=""
                name="subCategoryId"
                className={styles.select}
                onChange={(e) => handleSelectChange(e)}
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
              <div className={styles.errorsContainer}>
                {errors.subCategoryId && (
                  <span className={styles.errors}>{errors.subCategoryId}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputs1}>
            <h3>Slider Home *</h3>
            <div className={styles.inputs2}>
              <select
                defaultValue=""
                name="status"
                className={styles.select}
                onChange={(e) => handleSelectChange(e)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              <div className={styles.errorsContainer}>
                {errors.status && (
                  <span className={styles.errors}>{errors.status}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <h3>Category *</h3>
        <div className={styles.inputs}>
          <select
            defaultValue=""
            name="categoryId"
            className={styles.select}
            onChange={(e) => handleSelectChange(e)}
          >
            <option value="" disabled>
              Select
            </option>
            {allCategories?.map((el) => {
              //mostrame las categorias
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
          <div className={styles.errorsContainer}>
            {errors.categorie && (
              <span className={styles.errors}>{errors.categorie}</span>
            )}
          </div>
        </div> */}

        <h3>Description</h3>
        <div className={styles.textarea}>
          <textarea
            value={input.description}
            name="description"
            placeholder="Insert the product description here"
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>
        {/* <div className={styles.ckeditor}>
            <Editor />
          </div> */}
        <h3>
          Upload your images <small>(jpg, png and gif formats)</small>
        </h3>
        <div className={styles.inputs}>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            className={styles.input}
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <div className={styles.imgdata}>
            <input
              type="text"
              value={input.image[0]}
              name="image"
              className={styles.input}
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </div>
        {/* <div className={styles.uploader}>
            <Uploader />
          </div> */}
        <button className={styles.create} type="submit" disabled={!input.name}>
          {/* disabled={!input.name || !input.maker || !input.model || !input.SKU || !input.price}> */}
          Create Product
        </button>
      </form>
    </div>
  );
}
