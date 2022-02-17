import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { getAllCategories } from "../../../redux/actions";
import styles from "./Dropdown.module.css";

export default function DropdownMyAccount() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [dropdown, setDropdown] = useState(false);
  const allCategories = useSelector((state) => state.allCategories);
  const catsWithSubcats = allCategories.filter(
    (el) => el.subCategories.length !== 0
  );

  function handleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div>
      <Dropdown
        isOpen={dropdown}
        toggle={() => {
          handleDropdown();
        }}
      >
        <DropdownToggle caret className={styles.link}>
          Shop
        </DropdownToggle>
        {dropdown ? (
          <DropdownMenu left className={styles.content}>
            {catsWithSubcats?.map((el) => {
              return (
                <Link to={`/shop`}>
                    <DropdownItem className={styles.item}>{el.name}</DropdownItem>
                </Link>
              );
            })}
          </DropdownMenu>
        ) : (
          ""
        )}
      </Dropdown>
    </div>
  );
}
