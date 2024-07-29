import React from 'react';
import { Link } from 'react-router-dom';
import HeaderA from './HeaderA';
import BookReceiptPDF from './BookReceiptPage';
const CheckoutPage = ({ checkedOutBook }) => {
  return (
    <div style={styles.container}>
      <HeaderA />
      <br /><br /><br />
      <h1 style={styles.header}>Checkout</h1>
      {checkedOutBook ? (
        <div style={styles.checkoutContainer}>
          <h3 style={styles.bookTitle}>{checkedOutBook.title}</h3>
          <p style={styles.bookInfo}>Author: {checkedOutBook.author}</p>
          <p style={styles.bookInfo}>Availability: Checked out</p>
          <p style={styles.confirmationMessage}>
            Thank you for checking out {checkedOutBook.title}! Your book will be reserved for you.
          </p>
          <hr></hr>
          <BookReceiptPDF bookedBook={checkedOutBook} />
        </div>
      ) : (
        <p style={styles.errorMessage}>
          Oops! Something went wrong. Please go back to the E-Library and try again.
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  checkoutContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  bookTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  bookInfo: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#666',
  },
  confirmationMessage: {
    fontSize: '18px',
    color: '#28a745',
    marginBottom: '20px',
  },
  linkButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorMessage: {
    fontSize: '18px',
    color: '#dc3545',
  },
};

export default CheckoutPage;
