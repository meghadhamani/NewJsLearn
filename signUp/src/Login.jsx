import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('user'));

    if (
      data &&
      username === data.name &&
      password === data.password
    ) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type="text"
            placeholder='Username'
            onChange={handleUsername}
          />
          <input
            type="password"
            placeholder='Password'
            onChange={handlePassword}
          />
          <button type="submit">Login</button>
          <p>
            Not a user?
            <Link to='/signup'> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
