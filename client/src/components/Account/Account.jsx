import React from "react";
import styles from './Account.module.css';
import {MdOutlineDelete} from 'react-icons/md';
import { Link } from "react-router-dom";

export default function Account (){

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Account</h1>
            <h2>My Account</h2>
            <div className={styles.box}>
                <Link to='/admin/home/changeEmail'><button className={styles.button} type="submit">Change Email</button></Link>
                <Link to='/admin/home/changePassword'><button className={styles.button} type="submit">Change Password</button></Link>
                <Link to='/admin/home/addUser'><button className={styles.button} type="submit">Add User</button></Link>
            </div>
            <h2>Users</h2>
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