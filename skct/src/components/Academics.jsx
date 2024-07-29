import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Academics.css'; 
import HeaderA from './HeaderA';
import StarIcon from '@mui/icons-material/Star';

const Academics = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="academics-container">
      <HeaderA/>
      <br></br>
      <br></br>
      <br></br>
        
        <h1 style={{color:'orange'}} className="aca-h1">DEPARTMENT</h1>
        <hr className="hr-academics"></hr><br></br>
        <div className="academics-section">
        
          <h2 onClick={toggleDropdown} className="academics-h2">
            <StarIcon className="star-icon" style={{ color: 'black'}} />
            Civil Engineering
          </h2>
          
        </div>
        {isDropdownOpen && (
          <ul>
            <li>B.E Civil Engineering</li>
            <li>M.E Structural Engineering</li>
          </ul>
        )}
      
       
      <h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}}  />Computer Science and Engineering</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.E Computer Science and Engineering</li>
          <li>B.Tech Artificial Intelligence and Data Science</li>
          <li>B.E. Computer Science and Engineering (Cyber Security)</li>
          <li>B.E. Computer Science and Engineering (Internet of Things)</li>
          <li>B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)</li>
          <li>M.E Computer Science and Engineering</li>
        </ul>
      )}
      <h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}}  />Electronic and Communication Engineering</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.E Electronics and Communication Engineering</li>
          <li>M.E Applied Electronics</li>
        </ul>
      )}
      <h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}} />Electrical and Electronics Engineering</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.E Electrical and Electronics Engineering</li>
          <li>M.E Power System Engineering</li>
        </ul>
      )}
      
      < h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}} />Instrumentation & Control Engineering</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.E Instrumentation and Control Engineering</li>
          
        </ul>
      )}
      < h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}} />Mechanical Engineering</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.E Mechanical Engineering</li>
          <li>M.E Engineering Design Program</li>
        </ul>
      )}
      < h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}} />Information Technology</h2>
      {isDropdownOpen && (
        <ul>
          <li>B.Tech Information Technology</li>
        </ul>
      )}
      < h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon"style={{ color: 'black'}} />Science and Humanities</h2>
      {isDropdownOpen && (
        <ul>
          
        </ul>
      )}
      < h2 onClick={toggleDropdown} className="academics-h2"><StarIcon className="star-icon" style={{ color: 'black'}} />Master of Business Administration</h2>
      {isDropdownOpen && (
        <ul>
          
        </ul>
      )}
      
    </div>
  );
};

export default Academics;
