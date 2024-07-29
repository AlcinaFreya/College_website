import React, { useState } from 'react';

const Result = () => {
  const [registerNumber, setRegisterNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [resultsReleased, setResultsReleased] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Regular expression to match the required register number format
    const registerNumberRegex = /^[0-9]{6}[a-zA-Z]{4}[0-9]{3}$/;

    // Check if the register number matches the required format
    if (!registerNumberRegex.test(registerNumber)) {
      alert('Register number must be in the format: 123456ABCD789');
      return; // Stop further execution if the register number format is incorrect
    }

    // Check if results are released (dummy condition)
    if (registerNumber === 'yourRegisterNumber' && dateOfBirth === 'yourDateOfBirth') {
      // Results are released, you can set resultsReleased to true and show the results
      setResultsReleased(true);
      // You can perform additional actions here like fetching results from an API
    } else {
      // Results are not released, show a message to the user
      alert('Results are not yet released.');
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
        }} className="login-box">
          <h2 style={{ color: 'brown' }}>RESULT LOGIN</h2>
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
            <div style={{
              marginBottom: '20px',
            }} className="form-group">
              <label htmlFor="date">DOB:</label>
              <input type="date" id="date" name="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }} required />
            </div>
            <button type="submit" style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}>Sign In</button>
          </form>
          {resultsReleased && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <h3>Results:</h3>
              {/* Display results here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;