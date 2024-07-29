import React from "react";
import Slider from "react-slick";

const CardSliderA = () => {
  const sliderStyle = {
    width: '300px',
    margin: '20px',
    top: 0,
    left: 0,
  };

  const cardContainerStyle = {
    textAlign: 'center',
    width: '100%',
    height: '300px', 
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
  };

  const cardTextStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    flex: 1,
    boxSizing: 'border-box',
  };

  const headingStyle = {
    margin: '10px 0',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
  };

  const cards = [
    {
      image: "https://data.skct.edu.in/media/CSE_Sports_1_q6c3CBF.jpeg",
      heading: "THIRD POSITION IN CIETTROPHY FOOTBALLTOURNAMENT",
      text: "Department of CSE Congratulates Kishanth C, Jaya suriya, kalyan thiyagarajan of IV CSE B has Third position in CIET TROPHY FOOTBALL TOURNAMENT Held at CIET Coimbatore.",
    },
    {
      image: "https://data.skct.edu.in/media/IMG-20210313-WA0057.jpg",
      heading: "ANNA UNIVERSITY SPORTS BOARD ZONE 10 BASKETBALL MEN TOURNAMENT -SECOND POSITION",
      text: "Basketball men team has placed second position in Anna university sports board Zone 10 Basketball men tournament held at Sri Eshwar of Engineering Coimbatore on 12.03.2021.",
    },
    {
      image: "https://data.skct.edu.in/media/WhatsApp_Image_2023-03-02_at_8.11.49_PM.jpeg",
      heading: "YUGAM INDIA IDEATHON",
      text:"Second Year student Mr. NITHIN YJ ofMechanical department-Team lead. MrSHAHIN AHMED F Mr. SABARISH T, Mr.SANJAY KUMAR V-Team members ofSecond year EGE students have Won Firstplace with a cash prize of 50000 inYUGAM INDIA IDEATHON Organized atKCT Coimbatore, during Feb 28,March 182.  ",
     
    },
  ];

  return (
    <div style={sliderStyle}>
      <h1>NEWS</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} style={cardContainerStyle}>
            <div style={cardStyle}>
              <img src={card.image} alt={`Card ${index + 1}`} style={imageStyle} />
              <div style={cardTextStyle}>
                <h3 style={headingStyle}>{card.heading}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSliderA;
