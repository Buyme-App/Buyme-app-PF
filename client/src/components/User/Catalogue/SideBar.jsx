import React from 'react';
import styles from './SideBar.module.css';
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import {FiChevronRight} from 'react-icons/fi'


export default function SideBar(){
    return (
        <div className={styles.sideComponent}>
      <h2 className="d-flex justify-content-center mt-5 categories p-4">
        Categories
      </h2>
      <div className={styles.allcontent}>
        <span>All Products</span>
        <span>Button</span>
      </div>
      <div className={styles.sidecontent}>
        
      </div>
      <div className={styles.mt5}>
        <h5 className="d-flex justify-content-center title-price">
          Order by Price
        </h5>
        <div>
          <div className="d-flex justify-content-center">
            <label className="mr-3 mb-3">Highest</label>
            <button
              className="ml-3 d-flex align-self-center mb-3 highest"
              type="checkbox"
            //   onClick={() => orderByHigherPrice()}
            >
              <AiOutlineArrowUp />
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <label className="mr-3 p-1">Lowest</label>
            <button
              className="ml-3 d-flex align-self-center mb-1 lowest"
              type="checkbox"
            //   onClick={() => orderByLowerPrice()}
            >
              <AiOutlineArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}
