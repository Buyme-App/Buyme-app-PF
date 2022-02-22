import React from "react";
import { Link, useParams } from "react-router-dom";
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
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [dropdown, setDropdown] = useState(false);
  const allCategories = useSelector((state) => state.allCategories);

  // const sortedCategories = allCategories.sort((a, b) => {
  //   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  //   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  //   return 0;
  // });

  const catsWithSubcats = allCategories.filter(
    (el) => el.subCategories.length !== 0
  );

  const sortedCategories = catsWithSubcats.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

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
            <Link to="/shop">
                    <DropdownItem className={styles.itemtop}>Shop All Categories</DropdownItem>
                </Link>
            {sortedCategories?.map((el) => {
              return (
                <Link to={"/category/" + el.id}>
                    <DropdownItem className={styles.items}>{el.name}</DropdownItem>
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
