
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Upi = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi'); 
  const [accountDetails, setAccountDetails] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === 'upi') {
      console.log(`Initiating UPI payment for UPI ID: ${accountDetails}`);
      
    } else if (paymentMethod === 'netbanking') {
      console.log(`Initiating Net Banking payment for account: ${accountDetails}`);
     
    }
    window.alert('Payment submitted successfully!');
    navigate('/success');
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
    <div className="payment-details-container">
      <header className="header">
        <h1>Payment Details</h1>
      </header>

      <main className="main-content">
        <section className="payment-section">
          <h2>Payment Information</h2>
          <p>Please enter your payment details to proceed.</p>
          <form className="payment-form" onSubmit={handlePayment}>
            <label htmlFor="paymentMethod">Select Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>

            <label htmlFor="accountDetails">UPI ID / Account Details:</label>
            <input
              type="text"
              id="accountDetails"
              name="accountDetails"
              value={accountDetails}
              onChange={(e) => setAccountDetails(e.target.value)}
              required
            />

            <button type="submit">Submit Payment</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p> © All Rights Reserved 2023 - 2024. SKCT</p>
      </footer>
    </div>
    </div>
  );
};

export default Upi;