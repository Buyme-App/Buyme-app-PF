import React, { Fragment, useEffect, useState } from 'react';
import styles from './Dropdown.module.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOG_OUT } from '../../../redux/actions';

export default function DropdownMyAccount() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dropdown, setDropdown] = useState(false);
    const customer = useSelector((state) => state.customer);

    let client = JSON.parse(localStorage.getItem('cliente'));
    let ctm = client ? client.result : null;

    function handleDropdown() {
        setDropdown(!dropdown);
    };

    function handleLogOut() {
        dispatch({ type: LOG_OUT });
        navigate('/');
    };

    return (
        <div className={styles.dropdown}>
            <Dropdown isOpen={dropdown} toggle={() => { handleDropdown() }}>
                <DropdownToggle caret className={styles.myAccount}>
                    My Account
                </DropdownToggle>
                {
                    dropdown ?
                        <DropdownMenu className={styles.content}>
                            {
                                ctm ?
                                    <div>
                                        <DropdownItem header className={styles.header}>Hi {ctm.firstName}!</DropdownItem>
                                        <DropdownItem className={styles.divider} divider />
                                        <Link to='/myOrders'><DropdownItem className={styles.item}>My Orders</DropdownItem></Link>
                                        <Link to='/myProfile'><DropdownItem className={styles.item}>My Profile</DropdownItem></Link>
                                        <DropdownItem onClick={(e) => { handleLogOut(e) }} className={styles.item}>Log Out</DropdownItem>
                                    </div>
                                    :
                                    <div>
                                        <DropdownItem header className={styles.header}>Welcome!</DropdownItem>
                                        <DropdownItem className={styles.divider} divider />
                                        <Link to='/login'><DropdownItem className={styles.item}>Sign In</DropdownItem></Link>
                                        <Link to='/login/signUp'><DropdownItem className={styles.item}>Sign Up</DropdownItem></Link>
                                    </div>
                            }
                        </DropdownMenu>
                        : ''
                }
            </Dropdown>
        </div>
    )
}