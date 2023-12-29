import React, { useState } from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; // Import the CSS file

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least 8 characters, including an uppercase letter and a number. Special characters other than @ are not allowed.'
      );
      return;
    }

    // If both validations pass, you can proceed with further actions, like submitting the form or making an API call.
    alert('Form submitted successfully!');
  };

  return (
    <div className='main'>
      <div className='sub-main'>
        <img src={logo} alt='Logo' className='logo' />
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='email'
              placeholder='Username'
              className='form-control'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='mb-3'>
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='login'>
            <button className='login btn-success'>Login</button>
          </div>
          <center className='forgetpassword'>Forgot your password?</center>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
