import React, { useState } from 'react';
import HeaderA from './HeaderA';
import CheckoutPage from './CheckoutPage';

const booksData = [
  { id: 1, title: 'Linear Integrated Circuits', author: 'S.Salivahanan', available: true },
  { id: 2, title: 'Microelectronic Circuits', author: 'Adel S. Sedra', available: false },
  { id: 3, title: 'Applications and Design with Analog Integrated Circuits', author: 'J.Michael Jacob,', available: false },
  { id: 4, title: 'Signals and Systems', author: 'Ramakrishna Rao P', available: true },
  { id: 5, title: 'Power Electronics', author: 'Bimbhra P S', available: true },
  { id: 6, title: 'The Art of Electronics', author: 'Paul Horowitz', available: true },
];

const useBookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = () => {
    if (isLoggedIn) {
      const results = searchQuery
        ? booksData.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : booksData;
      setSearchResults(results);
    } else {
      alert('You need to login first before searching.');
    }
  };

  const handleCheckout = (bookId) => {
    if (isLoggedIn) {
      const updatedResults = searchResults.map(book =>
        book.id === bookId ? { ...book, available: false } : book
      );
      setSearchResults(updatedResults);
    } else {
      alert('You need to login first before checking out a book.');
    }
  };

  return { searchQuery, setSearchQuery, searchResults, handleSearch, handleCheckout, isLoggedIn, setIsLoggedIn };
};

const LoginModal = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validUsernameFormat = /^[0-9]{6}[a-zA-Z]{4}[0-9]{3}$/; 
    if (validUsernameFormat.test(username) && password === 'password123') {
      onLogin();
      onClose();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.modalContent}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username (e.g., 727822tuec007)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

const ELibrary = () => {
  const { searchQuery, setSearchQuery, searchResults, handleSearch, handleCheckout, isLoggedIn, setIsLoggedIn } = useBookSearch();
  const [checkedOutBook, setCheckedOutBook] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCheckoutClick = (book) => {
    if (isLoggedIn) {
      handleCheckout(book.id);
      setCheckedOutBook(book);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <HeaderA />
      <br /><br /><br />
      <h1 style={styles.header}>E-Library</h1>

      {!isLoggedIn && (
        <div style={styles.loginContainer}>
          <button onClick={() => setIsLoginModalOpen(true)} style={styles.loginButton}>
            Login
          </button>
        </div>
      )}

      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Search</button>

      {checkedOutBook ? (
        <CheckoutPage checkedOutBook={checkedOutBook} />
      ) : (
        <div style={styles.resultsContainer}>
          {searchResults.map(book => (
            <div key={book.id} style={styles.bookContainer}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <p style={styles.bookInfo}>Author: {book.author}</p>
              <p style={styles.bookInfo}>Availability: {book.available ? 'Available' : 'Checked out'}</p>
              {book.available && (
                <button onClick={() => handleCheckoutClick(book)} style={styles.checkoutButton}>
                  Checkout
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {isLoginModalOpen && (
        <LoginModal onLogin={handleLogin} onClose={handleLoginModalClose} />
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
  loginContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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
  resultsContainer: {
    marginTop: '20px',
  },
  bookContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  bookTitle: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#333',
  },
  bookInfo: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#666',
  },
  checkoutButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

export default ELibrary;
