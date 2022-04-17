import { useState } from 'react';
import style from './ForgotPassword.module.css'
import { Link } from 'react-router-dom'
const ForgotPassword = ()=>{
    const[id,setId]=useState([])



    const handleOnChange=(event)=>{
        setId(event.target.value)
    }
    const handleOnClick = ()=>{
        console.log(Math.floor(1000 + Math.random() * 9000))
    }
    
    return (
    <>
        <div className={style.container}>
            <div>
                <h5 align="center">
                    Trouble Logging in? 
                </h5> 
            </div>
            <div>
                <p className={style.para}>
                     Enter your email, or phone and we'll send
                <br/>
                     you a link to get back into your account.
                </p>
                <input className={style.input}
                 type="text" value={id}
                 onChange={handleOnChange}
                 placeholder='Email, PhoneNo.'
                 />
                 <button className={style.button}
                 disabled={((id.length)<10 && (id.length)>10)}
                 onClick={handleOnClick}>
                     <Link className="nav-link" to="/otp">
                            Send OTP
                     </Link>
                 </button>
                    <span className={style.divider}>
                        <hr className={style.divider1}/>
                            <p className={style.text}>OR</p>
                        <hr className={style.divider2}/>
                    </span>
                    <button className={style.button}>
                        <Link className='nav-link' to="/createnewaccount">
                     Create new account
                     </Link>
                 </button>
             </div>
             <button className={style.button3}>
             <Link className='nav-link' to="/login">
                     Back to login
                     </Link>
                 </button>
        </div>
      
    </>
    )
}
export default ForgotPassword;


