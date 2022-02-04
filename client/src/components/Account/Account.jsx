import React from "react";
import styles from './Account.module.css';
import {MdOutlineDelete} from 'react-icons/md';
import { useState } from "react";
import ChangePassword from "../ChangePassword/ChangePassword";
import ChangeEmail from "../ChangeEmail/ChangeEmail";
import AddUser from "../AddUsers/AddUser";

export default function Account (){

    const [btnChangeP, setBtnChangeP] = useState(false);
    const [btnChangeE, setBtnChangeE] = useState(false);
    const [btnAddUser, setBtnAddUser] = useState(false);

    return (
        <div className={styles.page}>
            <h2>My Account</h2>
            <div className={styles.box}>
                <button onClick={() => setBtnChangeE(true)} className={styles.button} type="submit">Change Email</button>
                <button onClick={() => setBtnChangeP(true)} className={styles.button} type="submit">Change Password</button>
                <button onClick={() => setBtnAddUser(true)} className={styles.button} type="submit">Add User</button>
            </div>
            <ChangePassword 
                trigger={btnChangeP} 
                setTrigger={setBtnChangeP}>
            </ChangePassword>
            <ChangeEmail 
                trigger={btnChangeE} 
                setTrigger={setBtnChangeE}>
            </ChangeEmail>
            <AddUser 
                trigger={btnAddUser} 
                setTrigger={setBtnAddUser}>
            </AddUser>
            <h2>Users</h2>
            <div><table className={styles.table}>
                    <tr className={styles.chart}>
                        <td >ID</td>
                        <td style={{'paddingLeft': '16%'}}>Name</td>
                        <td style={{'paddingLeft': '24%'}}>Email</td>
                    </tr>
                    <tr className={styles.details}>
                        <td>1</td>
                        <td>User1</td>
                        <td>user1@gmail.com</td>
                        <button className={styles.delete} type="submit">{MdOutlineDelete}x</button>
                    </tr>
                    <tr className={styles.details}>
                        <td>2</td>
                        <td>User2</td>
                        <td>user2@gmail.com</td>
                        <button className={styles.delete} type="submit">{MdOutlineDelete}x</button>
                    </tr>
                    <tr className={styles.details}>
                        <td>3</td>
                        <td>User3</td>
                        <td>user3@gmail.com</td>
                        <button className={styles.delete} type="submit">{MdOutlineDelete}x</button>
                    </tr>
                </table>
            </div>
        </div>
    )
}