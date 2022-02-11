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
        dispatch(getAllUsers());// Estaba configurado como componentDidMunt no como update
    }); // Para update no debe llevar los corchetes

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
                    <thead>
                        <tr className={styles.chart}>
                            <th style={{'margin-left': '-8%'}} >ID</th>
                            <th style={{'margin-left': '-8%'}}>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}