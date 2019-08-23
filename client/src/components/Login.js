import React, { useState } from "react";
import axios from 'axios'

const Login = (props) => {

  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblespage')
      })
      .catch(err => console.log(err.response))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        name='username'
        placeholder='enter username'
        onChange={handleChange}
        value={credentials.username} />
      <input type='password'
        name='password'
        placeholder='enter password'
        onChange={handleChange}
        value={credentials.password} />
      <button type='submit'>Log In</button>
    </form>
  );
};

export default Login;
