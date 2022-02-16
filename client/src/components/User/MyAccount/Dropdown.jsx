import React, { useState} from 'react';
import styles from './Dropdown.module.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default function DropdownMyAccount(){
    
    const [dropdown, setDropdown] = useState(false);

    function handleDropdown(){
        setDropdown(!dropdown);
    };

    return(
        <div className={styles.dropdown}>
            <Dropdown isOpen={dropdown} toggle={() => {handleDropdown()}}>
                <DropdownToggle caret className={styles.myAccount}>
                    My Account
                </DropdownToggle>
                {
                    dropdown ? 
                        <DropdownMenu className={styles.content}>
                            <DropdownItem header className={styles.header}>Hi ClientName!</DropdownItem>
                            <DropdownItem className={styles.divider} divider />
                            <DropdownItem className={styles.item}>My Orders</DropdownItem>
                            <DropdownItem className={styles.item}>My Profile</DropdownItem>
                            <DropdownItem className={styles.item}>Favorites</DropdownItem>
                            <DropdownItem className={styles.item}>Log Out</DropdownItem>
                        </DropdownMenu>
                    : ''
                }
            </Dropdown>
        </div>
    )
}