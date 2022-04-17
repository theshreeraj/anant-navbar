    import React, { useState } from 'react'
    import style from './CreateNewAccount.module.css'
    import { Link } from 'react-router-dom'

    const CreateNewAccount = () => {
    const [state,setState] = useState({
        email:'',
        name:'',
        userName:'',
        passWord:''
    })

    const inputChangeHandeler = (event)=>{
            setState({...state, [event.target.name]:event.target.value})
    }

    const hanleOnClick =(e)=>{
        e.preventDefault();
            console.log(state);
            setState(({email:"",passWord:"", name:"", userName:""}))
        console.log(Math.floor(1000 + Math.random() * 9000))
    }
    return (
        <>
            <div className={style.main_content}>

                    <h1 className='heading' align="center">
                        Tasvee
                    </h1>

                    <p className={style.Text1}>
                        Sign up to see the photographer's and<br/>
                        their photographies from overall <br/>
                        India. 
                    </p>

                    <input type="email" 
                    name="email"
                    placeholder='Mobile Number or Email'
                    className={style.input1}
                    onChange={inputChangeHandeler}/><br/>

                    <input type="text" 
                    name="name"
                    placeholder='Full Name'
                    className={style.input2}
                    onChange={inputChangeHandeler}/><br/>

                    <input type="text"
                    name="userName" 
                    placeholder='Username'
                    className={style.input3}
                    onChange={inputChangeHandeler}/><br/>

                    <input type="password"
                    name="passWord" 
                    placeholder='Password'
                    className={style.input4}
                    onChange={inputChangeHandeler}/><br/>
                
                    <button className={style.button}
                    onClick={hanleOnClick}>
                        <Link className="nav-link" to="/loginotp">
                                Sign in
                        </Link>
                    </button>

                    <p className={style.Text2}>
                        By signing up, you agree to our Term,  Data
                        <br/>
                        Policy and Cookies Policy .
                    </p>
            </div>
        </>
    )
    }

    export default CreateNewAccount;
