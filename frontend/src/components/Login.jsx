import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const requestOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/send-otp', { email });
      setMessage(response.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/verify-otp', { email, otp });
      setMessage(response.data.message);
      navigate('/home');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error verifying OTP');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>OTP Login</h2>
      {step === 1 && (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={requestOtp} style={styles.button}>Send OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          <button onClick={verifyOtp} style={styles.button}>Verify OTP</button>
        </div>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    fontSize: '1.1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  message: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#f44336',
    fontSize: '1rem',
  },
};

export default Login;
