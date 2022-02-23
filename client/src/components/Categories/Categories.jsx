import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Categories.module.css';
import AddCategories from "./AddCategories";
import { deleteCategory, deleteSubcategory, getAllCategories } from "../../redux/actions";
import PopAppDeleteCat from "./PopAppDeleteCat";
import PopAppDeleteSub from "./PopAppDeleteSub";

export default function Categories(){
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allCategories);
    const filterCategories = allCategories.filter(el => el.subCategories.length !== 0); // filtra solo los que tienen alguna subcategoria

    const [btnAddCat, setBtnAddCat] = useState(false);
    const [btnDeleteCat, setBtnDeleteCat] = useState(false);
    const [btnDeleteSub, setBtnDeleteSub] = useState(false);

    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch]);

    function handleDeleteCat(id){
        setBtnDeleteCat(true);
        dispatch(deleteCategory(id));
        dispatch(getAllCategories());
    };

    function handleDeleteSubcat(id){
        setBtnDeleteSub(true);
        dispatch(deleteSubcategory(id));
        dispatch(getAllCategories());
     };

    console.log(allCategories);
    return (
        <div className={styles.page}>
            <button onClick={() => setBtnAddCat(true)} className={styles.addCat} type="submit">Add Categories/Subcategories</button>
            <AddCategories
                    trigger={btnAddCat} 
                    setTrigger={setBtnAddCat}>
            </AddCategories>
            { allCategories?.map(el => { //mostrame las categorias
                        return (
                            <div className={styles.divCats} key={el.id}>
                                <div className={styles.btnCat}>
                                    {/* <button onClick={() => {setBtnDeleteCat(true)}} className={styles.delete} type="submit">x</button> */}
                                    <div className={styles.category} value={el.id}>{el.name}</div>
                                    {/* <PopAppDeleteCat
                                        trigger={btnDeleteCat} 
                                        setTrigger={setBtnDeleteCat}
                                        id={el.id}
                                        handleDeleteCat={handleDeleteCat}
                                        >
                                    </PopAppDeleteCat> */}
                                </div>
                                {
                                    filterCategories?.filter(c => c.subCategories === el.subCategories).map(s => s.subCategories.map(el => { //mostrame la sc que pertenece a la categoria actual
                                        // mostrame por cada sub un boton          
                                        return (
                                            <div className={styles.btnSub} key={el.id}>
                                                {/* <button onClick={() => {setBtnDeleteSub(true)}} className={styles.delete} type="submit">x</button> */}
                                                <div className={styles.subcat} type="submit">{el.name}</div>
                                                {/* <PopAppDeleteSub
                                                    trigger={btnDeleteSub} 
                                                    setTrigger={setBtnDeleteSub}
                                                    id={el.id}
                                                    handleDeleteSubcat={handleDeleteSubcat}
                                                    >
                                                </PopAppDeleteSub> */}
                                            </div>
                                        )
                                    })
                                    )
                                }
                            </div> 
                        )
                    })
                } 
        </div>
    )
};
