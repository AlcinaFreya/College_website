import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import HeaderA from './HeaderA';



const NewEvvents = () => {
  const [backgroundImage, setBackgroundImage] = useState();
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackgroundImage("https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=996&t=st=1709469430~exp=1709470030~hmac=37f8d999d5974eaf07c65d36f836d8fe009794883961102757fc175c3fe9088b");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const containerStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    textAlign: 'center',
    marginTop: '-35',
  };
  const searchContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    zIndex: '1', 
  };

  const toggleAdditionalCards = () => {
    setShowAdditionalCards(!showAdditionalCards);
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e5d73d', 
    color: '#fff', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <body style={containerStyle}>
        <HeaderA/>
        <br></br><br></br><br></br>
      <h1 className="stylish-font">ACHIEVEMENTS</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="card-container">
        <div className="travel-card">
          <img src="https://data.skct.edu.in/media/viswakarma.png" alt="Reykjavik" style={{ width: '50%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title"> AICTE Award</h3>
            <p className="card-description">“ The AICTE Award is a prestigious award received from 13th Vice President VENKAIAH NAIDU “.</p>
          </div>
        </div>

        <div className="travel-card">
          <img src="https://data.skct.edu.in/media/WhatsApp_Image_2021-03-19_at_7.04.10_PM.jpeg" alt="Great Wall of China" style={{ width: '50%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">NCOE Award</h3>
            <p className="card-description">“ The NCOE Award is given for building digital disruption practices in Education “.</p>
          </div>
        </div>

        {showAdditionalCards && (
          <>
            <div className="travel-card">
              <img src="https://www.covaichronicle.com/adminPanel/upload/lnxjzmy.jpg" alt="Great Wall of China" style={{ width: '50%', height: '50'}}></img>
              <div className="card-details">
                <h3 className="card-title">G20 Young Ambassador Summit 2023</h3>
                <p className="card-description">“ G20 Summit held at SKCT featuring Hon'ble Governor Of Tamil Nadu R.N.Ravi as Chief Guest “.</p>
              </div>
            </div>
            
            <div className="travel-card">
              <img src="https://data.skct.edu.in/media/AICTE_CII.jpg" alt="Great Wall of China" style={{ width: '50%', height: '50'}}></img>
              <div className="card-details">
                <h3 className="card-title">Best Industry Linked Civil & Allied Engineering</h3>
                <p className="card-description">“ Charles Leclerc presenting Best industry linked civil & allied engineering award to Mr.Peter Paul “.</p>
              </div>
            </div>
          </>
        )}

        <div className="centered-button-container horizontal-center">
          <button style={buttonStyle} onClick={toggleAdditionalCards}>
            {showAdditionalCards ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </body>
  );
}

export default NewEvvents;