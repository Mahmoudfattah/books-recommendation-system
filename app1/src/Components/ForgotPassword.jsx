import React, { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/forgotPassword', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container py-4">
      <h2>Change Password</h2>
      <form onSubmit={handleResetPassword} className="my-4">
        <div className="mb-3">
        <label htmlFor='password'>old Password:</label>
        <input type='text' className='form-control mb-3' id='password' name='password'  />

          
          <label htmlFor='password'>New Password:</label>
        <input type='text' className='form-control mb-3' id='password' name='password'  />

        <label htmlFor='password'> rePassword:</label>
        <input type='text' className='form-control mb-3' id='password' name='password'  />
        </div>
        {message && <p className="alert alert-success">{message}</p>}
        {error && <p className="alert alert-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
}
