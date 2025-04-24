import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            < div className='form-toggle' >
                <button className={isLogin ? " active " : ""} onClick={() => setIsLogin(true)}>
                    Login
                </button>
                <button className={!isLogin ? " active " : ""} onClick={() => setIsLogin(false)}>
                    SignUp
                </button>
            </ div>
            {isLogin ? <Login setIsLogin={setIsLogin} /> : <Signup />}
        </>
    )
}

export default Authorization;