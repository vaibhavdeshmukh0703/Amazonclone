
import React, { useState,useEffect } from 'react'
import './Seller_Login.css'
import axios from 'axios';
import FormValidation,{handleSubmit} from '../Form_validation_Authorization/FormValidation';

function Seller_Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userRandomData, setUserRandomData] = useState('');

    useEffect(()=>{
         fetchData()
            .then((data)=>{
                setUserRandomData(data);
            })  
    },[])

    const fetchData =() =>{
        return axios.get('http://randomuser.me/api')
            .then((response) =>{
                return JSON.stringify(response.data.results,null,2);
               
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        console.log('inside handleSubmmit')
        e.preventDefault();
        console.log(email)
        if (email === '') {
            alert('Please Enter Your Email Address')
        }
        else if (password === "") {
               alert('Please Enter Your Password');
        }
    }

    const handleGoogleLogin = () => {
        alert('inside google login')
    }


    return (
        <div className="loginContainer">
            <div className='login'>
                <form method='POST' >
                    <h3>Login</h3>
                   <div className='login__email'>
                        <label> Email </label><br />
                        <input type="email" name="email" placeholder="Enter Email Id" onChange={(event)=>FormValidation(event)} />
                           
                    </div>
                   
                    <div className='login__password'>
                        <label> Password </label><br />
                        <input type="password" name="password" placeholder="Enter Password" onChange={(event)=>FormValidation(event)} />

                        
                    </div>
                    <button>SUBMIT</button>
                </form><br/>
                <p>--------------------OR---------------------</p>
                <button onClick={handleGoogleLogin}>Login Using Google</button><br />
                {/* <pre>{userRandomData} </pre> */}
            </div>
            
        </div>

    )
}

export default Seller_Login
