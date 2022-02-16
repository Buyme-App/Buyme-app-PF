import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import {LoginClientGoogle} from '../../../middlewares/LoginWithGoogle';

// Id del usuario en la google console developers.
const clientId = "532893426828-r97cch5c0jid27g5ub373cu4n8kdo3qb.apps.googleusercontent.com";




export function LoginGoogle(props) {

    const dispatch = useDispatch();

    // Funcion onLoginSuccess que recibe los datos del login, los guarda en la variable y
    const onLoginSuccess = (res) => {
        
        console.log('Success login with Google');
        console.log(res);

        //Variable donde se almacenan los datos que google retorna.
        let  data = res.profileObj;

        LoginClientGoogle(data);

        
    };

    // Funcion onLoginFailire que recibe el error si no se pudo hacer login con google.
    const onLoginFailure = (res) => {

        console.log('Login Failed:', res);

        let  data = res.profileObj;

        LoginClientGoogle(data);
    };
        
    return (
        <div>
            
            { 
                // Componente del button login que da paso a la ventana de inicio de sesion.
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    
                /> 
                
            }
            
        </div>
    );
};

