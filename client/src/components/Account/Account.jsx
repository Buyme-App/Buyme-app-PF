import React from "react";
import Aside from "../asideDashboard/asideDashboard";
import styles from './Account.module.css';
import {MdOutlineDelete} from 'react-icons/md';

export default function Account (){

    return (
        <div className={styles.page}>
            <div><Aside></Aside></div>
            <h1 className={styles.title}>Account</h1>
            <div className={styles.box}>
                <button className={styles.button} type="submit">Change Email</button>
                <button className={styles.button} type="submit">Change Password</button>
                <button className={styles.button} type="submit">Add Users</button>
            </div>
            <div><table style={{'marginBottom': '10%'}}>
                    <tr className={styles.chart}>
                        <td>ID</td>
                        <td style={{'paddingLeft': '16%'}}>Name</td>
                        <td style={{'paddingLeft': '24%'}}>Email</td>
                    </tr>
                    <tr className={styles.details}>
                        <td>1</td>
                        <td>User1</td>
                        <td>user1@gmail.com</td>
                        <button className={styles.x} type="submit">{MdOutlineDelete}</button>
                    </tr>
                    <tr className={styles.details}>
                        <td>2</td>
                        <td>User2</td>
                        <td>user2@gmail.com</td>
                        <button className={styles.x} type="submit">{MdOutlineDelete}</button>
                    </tr>
                    <tr className={styles.details}>
                        <td>3</td>
                        <td>User3</td>
                        <td>user3@gmail.com</td>
                        <button className={styles.x} type="submit">{MdOutlineDelete}</button>
                    </tr>
                </table>
            </div>
        </div>
    )
}