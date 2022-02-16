import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginGoogle } from "../components/User/GoogleLogin/GoogleLogin";
import GoogleLogIn from "../components/User/Login/GoogleLogin";
import LoginUser from "../components/User/Login/LoginUser";
import { createCustomer } from "../redux/actions";


// Funcion invicada en el componente de GoogleLogin que recibe la data que retorna Google.
export async function LoginClientGoogle(data){

    const [userData, setUserData] = useState({});

    const dispatch = useDispatch();

    const {givenName, familyName, email, googleId} =  await data;

    if(googleId){ //Se verifica el Id para asegurar el exito del login con Google.
        setUserData({
            // Informacion a enviar al back.
            firstName: givenName,
            lastName: familyName,
            email: email,
        });
        
    }else{
        setUserData({Error: 'Impossible to login with Google'})
    }

    console.log(userData);


    // return(
    //     <div>
    //         { 
    //             data.onSuccess && <div>
    //                 <span>{givenName.iY}</span>
    //                 <span>{email.zV}</span>
    //             </div>
    //         }
    //     </div>
    // )
};