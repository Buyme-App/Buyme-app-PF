import axios from "axios";
import React from "react";
// import {Dispatch} from 'react-redux';


export default function Success() {

    function OnSubmit(e){
        e.preventDefault();
    
        const payload = {
            clientId: 1,
            itemsHard: [ { id: 6, title: 'auto gorgo', unit_price: 300, quantity: 1 },
            { id: 2, title: 'auto matchbox', unit_price: 250, quantity: 2 },
            { id: 1, title: 'auto tomica', unit_price: 100, quantity: 10 } ],
            valor: 3000
        }
        axios.post('http://localhost:3001/MPsuccess',payload);
    }

    return (
   <div >
        <label>Success:</label>
        
        <button onClick={(e)=>OnSubmit(e)} >Facturar</button>
        
   </div>)    
}