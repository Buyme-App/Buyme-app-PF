import React from "react";
import styles from './Account.module.css';
import {MdOutlineDelete} from 'react-icons/md';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangePassword from "./ChangePassword/ChangePassword";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import AddUser from "./AddUsers/AddUser";
import { getAllUsers } from "../../redux/actions";

export default function Account (){
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.allUsers);
    const [btnChangeP, setBtnChangeP] = useState(false);
    const [btnChangeE, setBtnChangeE] = useState(false);
    const [btnAddUser, setBtnAddUser] = useState(false);

    useEffect(() => {
        dispatch(getAllUsers());
    },[dispatch]);

    //console.log(allUsers);
    return (
        <div className={styles.page}>
            {/* <h2>My Account</h2> */}
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
                   
                    {
                allUsers.length?
                allUsers.map(el => {
                    return (
                        <tr key={el.id} className={styles.details}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.role}</td>
                            <button className={styles.delete} type="submit">{MdOutlineDelete}x</button>
                        </tr>
                    )
                }) : (<tr className={styles.details}>
                        <td>1</td>
                        <td>Juan Topo</td>
                        <td>juani@gmail.com</td>
                        <td>administrador</td>
                        <button className={styles.delete} type="submit">{MdOutlineDelete}x</button>
                     </tr>
                )
            }
                </table>
            </div>
        </div>
    )
}