import React from "react";
import GoogleLogin from 'react-google-login';
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginUser from "../../../components/User/Login/LoginUser";
import { createCustomer } from "../../../redux/actions";

export default function GoogleLogIn(){

    function responseGoogle(response){
        console.log(response);
    };
      
    return(
        <div>
            <br /><br />
            <GoogleLogin
                clientId="69239787903-1lpp1ei96rj6vvuv0r77nun5onmipsvl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}