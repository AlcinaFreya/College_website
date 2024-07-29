import React, { useState } from 'react';

const LoginA = () => {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [hallTicketReleased, setHallTicketReleased] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault(); 
    
    
    const registerNumberRegex = /^[0-9]{6}[a-zA-Z]{4}[0-9]{3}$/;

    if (!registerNumberRegex.test(registerNumber)) {
      alert('Register number must be in the format: 727822AAAA999');
    } else if (!/^\d+$/.test(password)) {
      alert('Password must contain only numbers.');
    } else if (registerNumber === 'yourRegisterNumber' && password === 'yourPassword') {
      setHallTicketReleased(true);
    } else {
      alert('Hall ticket is not yet released.');
    }
  };

  return (
    <div>
      <center>
        <img src='http://apps.skct.edu.in:804/assets/pics/logo.png' alt='SKCT Logo' />
      </center>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}>

        <div style={{
          width: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          animation: 'shiningBorder 2s infinite linear', 
        }} className="login-box">
          <h2 style={{ color: 'brown' }}>HALL-TICKET LOGIN</h2>
          <form onSubmit={handleSignIn}>
            <div style={{
              marginBottom: '20px',
            }} className="form-group">
              <label htmlFor="registerNumber">Register Number:</label>
              <input type="text" id="registerNumber" name="registerNumber" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }} required />
            </div>
            <div  Style={{
              marginBottom: '20px',
            }} className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password"   value={password} onChange={(e) => setPassword(e.target.value)} style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }} required />
            </div>
            <br></br>
            <button type="submit" style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}>Go</button>
          </form>
          {hallTicketReleased && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <h3>Hall Ticket:</h3>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginA;