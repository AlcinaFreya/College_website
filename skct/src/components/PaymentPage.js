import React, { useState } from 'react';
//import './PaymentPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const FeePaymentPage = () => {
  const [studentId, setStudentId] = useState('');
  const [amount, setAmount] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  
  const handlePayment = () => {
   
    console.log(`Processing payment for Student ID: ${studentId}, Amount: ${amount}`);
    navigate('/upi');
  };

  return (
    <div>
      <style>
        {`body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f7f7f7;
}

header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
  margin-bottom: 20px;
}

h2 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  color: #555;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  color: white;
}

/* Media query for responsiveness */
@media (max-width: 600px) {
  main {
    padding: 10px;
  }
}`}
      </style>
    <div className="fee-payment-container">
      <header className="header">
        <h1>Online Fee Payment</h1>
      </header>

      <main className="main-content">
        <section className="payment-section">
          <h2>Payment Information</h2>
          <p>Welcome to the online fee payment system. Please fill in the required information to proceed with the payment.</p>
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />

            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <button type="submit">Proceed to Payment</button>
          </form>
        </section>

        <section className="instructions-section">
          <h2>Instructions</h2>
          <p>Make sure to provide accurate information to ensure successful payment processing.</p>
          
          <div className="checkbox-section">
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              I agree to the terms and conditions
            </label>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© All Rights Reserved 2022 - 2024. SKCT</p>      </footer>
    </div>
    </div>
  );
};

export default FeePaymentPage;