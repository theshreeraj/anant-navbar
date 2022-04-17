    import React, { useState } from 'react'
    import style from './LoginOtp.module.css'

    const LoginOtp = () => {
        const [otp, setOtp] = useState()

        const handleonChange=(event)=>{
            setOtp(event.target.value)
        }
        const eventOnClick = ()=>{
            console.log(otp)
        }
    return (
        <> 
            <div className={style.main_content_box}>

                <h4 className={style.heading1} align="center">
                    Just one step away
                </h4>

                <p className={style.text}>
                    Enter the 4-digit code we sent to your number
                </p>

                <br/>

                <input className={style.input_tag}
                onChange={handleonChange}
                type="text" placeholder="####"/>

                <br/>

                <button className={style.login}
                onClick={eventOnClick}>
                    confirm
                </button>

                <br/>
                <br/>
                <br/>

            <a href="/" className={style.a}>
                Change Phone Number
            </a>
            
            <a href="/" className={style.a}>
                Request New Otp
            </a>
            </div>
        </>
    )
    }

    export default LoginOtp
