import React, {useState} from 'react'
import style from './Signin.module.css';
import {
    Link,
  } from  "react-router-dom";

const Signin = () => {
    const [state, setState] = useState(
     {   email:"",
        password:""}
    )



    const handleOnChange = (event)=>{
        setState({...state,[event.target.name]:event.target.value});
    }

    const signIn = e => {
        e.preventDefault();
         console.log(state)
         setState({email:"",password:""})
        //some fancy firebase login shitttttttt..
    }

    const createAccount = e => {
        e.preventDefault();
        console.log("Register ")
        //do some fancy firebase register shitttt....
    }
    const forgotPassword = e => {
        e.preventDefault();
        console.log("forgotPassword ")
        //do some fancy firebase register shitttt....
    }
  return (
      <>
    <div className={style.glasslog}>

        <a href="/">
            <img className={style.login_logo} 
            src="/images/logo.png" 
            alt="logo" 
            />
        </a>

        <div className={style.login_container}>
            <h1>
                Log-in
            </h1>

            <form>
                <h5>
                    E-mail
                </h5>

                <input type="text" 
                 name="email" 
                 value={state.email} 
                 placeholder="Enter your email" 
                 onChange={handleOnChange}
                />

                <h5>
                    Password
                </h5>

                <input type="password" 
                 name="password" 
                 value={state.password}
                 placeholder="Enter your password"
                 onChange={handleOnChange} 
                />

                <button type='submit' onClick={signIn}
                     className={style.login__SignInButton}>Sign In
                </button>
            </form>

            <p>
                By signing-in you agree to Tasvee's Conditions of Use.
                Please see our Privacy Notice, Our Cookies Notice and
                our Interest-Based Ads Notice.
            </p>

            <button onClick = {createAccount}
                    className={style.login__registerButton}>
                        <Link className="nav-link" to="/createnewaccount">
                            Create Account
                            </Link>
             </button>

             <button onClick = {forgotPassword}
                    className={style.login__registerButton}>
                        <Link className="nav-link" to="/forgotpassword">
                            Forgot Password
                            </Link>
             </button>
        </div>
    </div>
</>
  )
}

export default Signin;
