import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [registerNo, setRegisterNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a simple authentication
    if (isValidUser(registerNo, password)) {
      onLogin(registerNo);
    } else {
      alert('Invalid registration number or password');
    }
  };

  const isValidUser = (regNo, pwd) => {
    // In a real application, you might want to check against a database
    // Here, a simple hard-coded check is done
    return regNo === 'user123' && pwd === 'password123';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>E-Library Login</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Registration Number"
          value={registerNo}
          onChange={(e) => setRegisterNo(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: '#f9f9f9',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  formContainer: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    background: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
