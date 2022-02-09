import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Categories.module.css';
import AddCategories from "./AddCategories";
import { deleteCategory, deleteSubcategory, getAllCategories } from "../../redux/actions";

export default function Categories(){
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allCategories);
    const filterCategories = allCategories.filter(el => el.subCategories.length !== 0); // filtra solo los que tienen alguna subcategoria

    const [btnAddCat, setBtnAddCat] = useState(false);

    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch]);

    function handleDeleteCat(id){
       dispatch(deleteCategory(id));
    };

    function handleDeleteSubcat(id){
        dispatch(deleteSubcategory(id));
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
                                    <button onClick={() => {handleDeleteCat(el.id)}} className={styles.delete} type="submit">x</button>
                                    <div className={styles.category} value={el.id}>{el.name}</div>
                                </div>
                                {
                                    filterCategories?.filter(c => c.subCategories === el.subCategories).map(s => s.subCategories.map(el => { //mostrame la sc que pertenece a la categoria actual
                                        // mostrame por cada sub un boton          
                                        return (
                                            <div className={styles.btnSub} key={el.id}>
                                                <button onClick={() => {handleDeleteSubcat(el.id)}} className={styles.delete} type="submit">x</button>
                                                <div className={styles.subcat} type="submit">{el.name}</div>
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
