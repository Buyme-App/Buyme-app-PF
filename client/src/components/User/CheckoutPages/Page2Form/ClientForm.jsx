import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from "./ClientForm.module.css";
import Logo from "../../../../assets/logo2.png";
// import {sendToMP} from "../../../../redux/actions/index.js"



function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name required"
    }
   return errors;
};


export default function ClientForm(){
const dispatch = useDispatch();
const urlMP = useSelector(state => state.urlMP);
console.log(urlMP)
const [errors,setErrors] = useState({});
const [input,setInput] = useState({
   email: "",
   namelastname: "",
   telephone: "",
   address: "",
   country: ""
})

const checkoutLS = JSON.parse(localStorage.getItem('checkout'));

 const handleMP  = async function (){
    let json = await axios.post(`http://localhost:3001/mp`,checkoutLS);
    console.log(json.data.url)
       window.location.assign(json.data.url)
        }   

function handleChange(e){
    setInput({
    ...input,
    [e.target.name] : e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name] : e.target.value
    }));
}

function handleSubmit(e){
    e.preventDefault();
 // dispatch(getTypes())   //Falta la ruta de datos de envío
    console.log(e)
    setInput({
        email: "",
        namelastname: "",
        telephone: "",
        address: "",
        country: ""
    })
}


return(
    <div className={style.main}>
        <img src={Logo} alt="logo"/>
        <form onSubmit={handleSubmit}>
            <div className={style.gral}>
            <h2>CONTACT INFORMATION</h2>
            <input className={style.input}
            type= "text"
            value= {input.email}
            name = "email"
            placeholder = "Email"
            onChange={e => handleChange(e)}
            />
            {errors.name && (
                <p className='error'>{errors.email}</p>
            )}
            </div>
        
            <div>
            <h2>CLIENT DATA</h2>
            <input className={style.input}
            type= "text"
            value= {input.name}
            name = "name"
            placeholder = "Name"
            onChange={e => handleChange(e)}
            />
            </div>

            <div>
            <input className={style.input}
            type= "number"
            value= {input.phone}
            name = "phone"
            placeholder = "Phone"
            onChange={e => handleChange(e)}
            />
            </div>

            <div>
            <h2>CUSTOMER ADDRESS</h2>
            <input className={style.input}
            type= "text"
            value= {input.address}
            name = "address"
            placeholder = "Address"
            onChange={e => handleChange(e)}
            />
            </div>

            <div>
            <input className={style.input}
            type= "text"
            value= {input.country}
            name = "country"
            placeholder = "Country"
            onChange={e => handleChange(e)}
            />
            </div>
            <Link to= '/cart'><button className={style.btnBack}>Go Back</button></Link>
            <button className={style.btnCreate} onClick={handleMP}type='submit'>Finish And Pay</button>
        </form>
      
    </div>
)

}


