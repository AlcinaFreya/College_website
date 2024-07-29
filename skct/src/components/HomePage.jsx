import React  from 'react';
import { Link } from 'react-router-dom';
import HeaderA from './HeaderA';
import Home from './Home';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CardSlider from './CardSlider';
import CardSliderA from './CardSliderA';

const HomePage = () => {
  const [blinkVisible, setBlinkVisible] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlinkVisible((prevVisible) => !prevVisible);
    }, 900); 

    return () => clearInterval(intervalId);
  }, []);

  const blinkStyle = {
    visibility: blinkVisible ? 'visible' : 'hidden',
    color: blinkVisible ? 'white' : 'blue',
    backgroundColor: '#72A0C1',
  };
  

  return (
    <div>
      <HeaderA/>
      <br></br>
      <br></br><br></br>
      
    
    <div style={{ position: 'relative' }}>
  <img src='https://www.srikrishna.ac.in/images/Slider/Slide2.jpg' alt="skct" width="1520px" height="600px" />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
    <h1 style={{ fontSize: '4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>WELCOME TO SKCT</h1>
    
  </div>
</div>


      <br></br>
      <div style={{ backgroundColor: 'purple', color: 'white', padding: '10px', marginTop: '20px', textAlign: 'center', width: '30%', margin: 'auto' }}>
        TNEA CODE 2722
      </div>
      <br></br><br></br>
      <div  style={{ marginLeft: '20px' }}>
      <div style={{ display: 'flex', justifyContent:  'space-evenly' }}>

<a href="https://data.skct.edu.in/media/SKCT_Information_Bulletin_cDdPGLI.pdf" target="_blank" rel="noopener noreferrer">
  <button className="pdf-link"   style={blinkStyle}>
  2023-2024 BROCHURE
    </button></a>

    <a href="https://data.skct.edu.in/media/SKCT_CUT_OFF_UG_GQ_2023-2024.pdf" target="_blank" rel="noopener noreferrer">
  <button className="pdf-link"   style={blinkStyle}>
  2023-2024 CUTOFF MARKS
    </button></a>

</div>
      
        <br></br>
        <br></br>
        <Home/>

        <br></br>
        <br></br>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <CardSlider />
  <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
    <h1>ABOUT SKCT</h1>
    <p>
      Nestled at the foothills of the Western Ghats, located in a sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna College of Technology (SKCT) is a vibrant institute of higher education established in 1985 promoted by Sri Krishna Institutions. An extraordinary freedom of opportunity—to explore, to collaborate and to challenge oneself is the hallmark of the Institute. Being an autonomous institute, affiliated to Anna University, Chennai, and approved by AICTE, New Delhi, SKCT lays strong emphasis on collaborative research and stands apart from other institutes by its participatory work culture, student care programmes and high industry interaction. In a span of 38 years, it has emerged as one of the premier engineering colleges for learning, discovery and innovation due to the dynamic leadership of the Chairperson and Managing Trustee Smt S Malarvizhi. Being an acclaimed educationalist, she continues to contribute profusely for the glory and happiness of advancing generations. The college is accredited with A Grade by NAAC and eligible undergraduate programs are accredited by the National Board of Accreditation (NBA), New Delhi. The college offers 11 undergraduate programmes and 6 postgraduate programmes in engineering, technology, and Management Studies.
    </p>
  </div>
  <CardSliderA />
</div>
        <br></br>
        <br></br>
        <h1>INSTITUTE ACCOMPLISHMENTS</h1>
        <Carousel/>
      </div>
    </div>
  );
};

export default HomePage;
