import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";


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

    // dispatch() Aqui el dispatch con la action que envie los datos del state userData al backend.

};