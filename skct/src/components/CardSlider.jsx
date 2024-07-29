import React from "react";
import Slider from "react-slick";

const CardSlider = () => {
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
      image: "https://data.skct.edu.in/media/udgam_QOl6zH2.jpg",
      heading: "TEAM IONIX WON CASH PRIZE OF 25000",
      text: "Department of CSE, Sri Krishna College of Technology congratulates team, IONIX, ARUN V S and HARSITA B of III CSE for achieving a remarkable feat at the Disrupt'23 event of UDGAM hosted by IIT Guwahati. They have received a cash prize of 25000.",
    },
    {
      image: "https://data.skct.edu.in/media/WhatsApp_Image_2021-05-29_at_9.26.16_PM.jpeg",
      heading: "MS.PRASEETHA ECE (2016- 2020) WILL BE COMMISSIONED AS NAVAL OFFICER -SUB LIEUTENANT (RANK)",
      text: "Ms.Praseetha ECE (2016-2020) will be commissioned as Naval officer -Sub lieutenant (rank) and will be joining the Asia's largest naval academy for training. She is one among 30 female candidates selected for the service.",
    },
    {
      image: "https://data.skct.edu.in/media/IMG-20230926-WA0010.jpg",
      heading: "REGIONAL PRE-FINALIAST OF ICT ACADEMY YOUTH TALK 2023",
      text:"Sri Krishna College of Technology,Coimbatore congratulates Mr Krishna Prajvin P, Student of the Department ofCSE, for getting selected in Regional Pre-finals of ICT Academy Youth Talk 2023under the mentorship of Ms B Pavithra,Asst. Professor (English), Department ofS&H, organised at Hindustan College ofArts and Science, Coimbatore on23.09.2023",
     
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

export default CardSlider;
