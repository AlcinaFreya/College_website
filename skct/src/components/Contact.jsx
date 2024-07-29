import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import HeaderA from './HeaderA';
import Alert from '@mui/material/Alert';




const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setIsFormSubmitted(true);

    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 4000);
  };

  return (
    <div>
      <HeaderA/>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{color:'orange'}} >CONTACT US</h1>
      <hr></hr>
      <br></br>
      <table
        align='center'
        style={{ borderCollapse: 'separate', borderSpacing: '8px', border: '1px solid lightgray' }}
      >
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ color: 'red', paddingRight: '150px' }}>
              <h2>College-Skct</h2>
            </th>
            <th style={{ color: 'red', paddingLeft: '150px' }}>
              <h2>Administrative Trust office</h2>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ color: 'blue', paddingRight: '150px' }}>
              <h3>ADDRESS</h3>
            </th>
            <th style={{ color: 'blue', paddingLeft: '150px' }}>
              <h3>ADDRESS</h3>
            </th>
          </tr>
          <tr>
            <th style={{ paddingRight: '150px' }}>Sri Krishna College Technology,</th>
            <th style={{ paddingLeft: '150px' }}>VLB & Sri Krishna Trust,</th>
          </tr>
          <tr>
            <th style={{ paddingRight: '150px' }}>Kovaipudur,</th>
            <th style={{ paddingLeft: '150px' }}>Kovaipudur,</th>
          </tr>
          <tr>
            <th style={{ paddingRight: '150px' }}>Coimbatore - 641 042.</th>
            <th style={{ paddingLeft: '150px' }}>Coimbatore - 641 042.</th>
          </tr>
          <tr>
            <th style={{ color: 'blue', paddingRight: '150px' }}>
              <h3>CONTACT US</h3>
            </th>
            <th style={{ color: 'blue', paddingLeft: '150px' }}>
              <h3>CONTACT US</h3>
            </th>
          </tr>
          <tr>
            <th style={{ paddingRight: '150px' }}>Phone Number : 0422-2984567-68</th>
            <th style={{ paddingLeft: '150px' }}>Phone Number : 0422-2604545-49</th>
          </tr>
          <tr>
            <th style={{ color: 'blue', paddingRight: '150px' }}>
              <h3>E-CONTACT</h3>
            </th>
            <th style={{ color: 'blue', paddingLeft: '150px' }}>
              <h3>E-CONTACT</h3>
            </th>
          </tr>
          <tr>
            <th style={{ paddingRight: '150px' }}>Email : info@skct.edu.in</th>
            <th style={{ paddingLeft: '150px' }}>Email : info@srikrishna.ac.in, info@vlbkrishna.edu.in</th>
          </tr>
        </tbody>
      </table>
      <br></br>

      <div style={{ marginTop: '20px', textAlign: 'center', border: '1px solid lightgray', maxWidth: '400px', margin: 'auto', textAlign: 'left', padding: '20px' }}>
        <h2>Contact Form</h2>
        {isFormSubmitted && (
          <Alert severity="success" style={{ marginBottom: '15px' }}>
            Message sent successfully! We will get back to you soon.
          </Alert>
        )}
        <form style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px' }} required></textarea>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
