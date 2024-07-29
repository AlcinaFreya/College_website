import React from 'react';

const BookReceiptPDF = ({ bookedBook }) => {
  const calculateNextDay = () => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return nextDay.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1>Booking Receipt</h1>
      {bookedBook ? (
        <div>
          <h3>{bookedBook.title}</h3>
          <p>Reg No: 727822TUEC007</p>
          <p>Author: {bookedBook.author}</p>
          <p>Thank you for booking {bookedBook.title}! Your book has been successfully booked.</p>
          <p>Expected Delivery Date: {calculateNextDay()}</p>
          <button onClick={handlePrint} style={styles.printButton}>
            Print Receipt
          </button>
        </div>
      ) : (
        <p>Oops! Something went wrong. Please go back to the E-Library and try again.</p>
      )}
    </div>
  );
};

const styles = {
  printButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BookReceiptPDF;
