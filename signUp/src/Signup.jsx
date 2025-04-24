
import React, { useState } from 'react';
import "./style.css";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate()
    const [Input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        coPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Input.password === Input.coPassword){
            localStorage.setItem("user", JSON.stringify(Input));
            alert("You have registered!");
        }else{
            alert("password is not match")
        }
        navigate('/')
    };


    return (
        <div className='container'>
            <div className='form-container'>
                    <h2>Sign Up Page</h2>
                    <form onSubmit={handleSubmit} className='form' >
                        <input
                            name="name"
                            type="text"
                            placeholder='Username'
                            value={Input.name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={Input.email}
                            onChange={handleChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder='Password'
                            value={Input.password}
                            onChange={handleChange}
                        />
                        <input
                            name="coPassword"
                            type="password"
                            placeholder='Confirm Password'
                            value={Input.coPassword}
                            onChange={handleChange}
                        />
                       <button type="submit">Sign Up</button>
                    </form>
                    <p>Already a user? <Link to='/'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;