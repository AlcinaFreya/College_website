import React from 'react'
import { Link } from 'react-router-dom';
import HeaderA from './HeaderA';

const Admission = () => {
    const tableStyle = {
      width: "100%",
      borderRadius: "10px",
      borderCollapse: "collapse",
  };
  const thTdStyle ={
      border: "0.5px solid #ddd",
      padding: "8px",
      textAlign: "center",
      color: "black",
  };
  const thStyle = {
    border: "0.5px solid #ddd",
      padding: "8px",
      backgroundColor: "white",
      color: "grey",
  };
  return (
    <div>
        <HeaderA/>
      <br></br>
      <br></br>
      <br></br>
        <h1 style={{color:'Orange'}}>PROGRAMES OFFERED</h1>
        <hr></hr>
  <h2 style={{color:'Blue'}}>UNDERGRADUATE PROGRAMMES</h2>
      
      <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Department</th>
                  <th style={thStyle}>Year of starting</th>
                  <th style={thStyle}>Sanctioned Intake</th>
                  <th style={thStyle}>NBA Accreditation</th>
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>B.E.Civil Engineering</th>
                  <th style={thTdStyle}>1985</th>
                  <th style={thTdStyle}>60</th>
                  <th style={thTdStyle}>Accredited by NBA for 3 Years till June 2025</th>
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>B.E.Mechanical Engineering</th>
                  <th style={thTdStyle}>1985</th>
                  <th style={thTdStyle}>60</th>
                  <th style={thTdStyle}>Accredited by NBA for 6 Years till June 2027</th>
              </tr>  
                
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>B.E.Electronics and Communication Engineering</th>
                  <th style={thTdStyle}>1985</th>
                  <th style={thTdStyle}>180</th>
                  <th style={thTdStyle}>Accredited by NBA for 3 Years till June 2025</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>5</th>
                  <th style={thTdStyle}>B.E.Computer Science and Engineering</th>
                  <th style={thTdStyle}>1988</th>
                  <th style={thTdStyle}>240</th>
                  <th style={thTdStyle}>Accredited by NBA for 3 Years till June 2025</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>6</th>
                  <th style={thTdStyle}>B.Tech.Information Technology</th>
                  <th style={thTdStyle}>1999</th>
                  <th style={thTdStyle}>180</th>
                  <th style={thTdStyle}>Accredited by NBA for 6 Years till June 2027</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>7</th>
                  <th style={thTdStyle}>B.E.Electrical and Electronics Engineering</th>
                  <th style={thTdStyle}>2000</th>
                  <th style={thTdStyle}>120</th>
                  <th style={thTdStyle}>Accredited by NBA for 3 Years till June 2025</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>8</th>
                  <th style={thTdStyle}>B.Tech Artificial Intelligence and Data Science</th>
                  <th style={thTdStyle}>2021</th>
                  <th style={thTdStyle}>120</th>
                  <th style={thTdStyle}>-</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>9</th>
                  <th style={thTdStyle}>B.E. Computer Science and Engineering (Cyber Security)</th>
                  <th style={thTdStyle}>2022</th>
                  <th style={thTdStyle}>60</th>
                  <th style={thTdStyle}>-</th>
              </tr>
              <tr>
                  <th style={thTdStyle}>10</th>
                  <th style={thTdStyle}>B.E. Computer Science and Engineering (Internet of Things)</th>
                  <th style={thTdStyle}>2022</th>
                  <th style={thTdStyle}>60</th>
                  <th style={thTdStyle}>-</th>
              </tr>
              <tr>
                  <th style={thTdStyle}>11</th>
                  <th style={thTdStyle}>B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)</th>
                  <th style={thTdStyle}>2022</th>
                  <th style={thTdStyle}>60</th>
                  <th style={thTdStyle}>-</th>
              </tr>
                

             
              </tbody>   
      </table>
          <div>
            <h2 style={{color:'Blue'}}>POSTGRADUATE PROGRAMMES</h2>
            <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Department</th>
                  <th style={thStyle}>Year of starting</th>
                  <th style={thStyle}>Sanctioned Intake</th>
                  <th style={thStyle}>NBA Accreditation</th>
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>Master of Business Administration</th>
                  <th style={thTdStyle}>1997</th>
                  <th style={thTdStyle}>120</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>M.E.Structural Engineering</th>
                  <th style={thTdStyle}>2002</th>
                  <th style={thTdStyle}>24</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr>  
                
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>M.E.Computer Science And Engineering</th>
                  <th style={thTdStyle}>2006</th>
                  <th style={thTdStyle}>9</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>M.E.Applied Electronics</th>
                  <th style={thTdStyle}>2006</th>
                  <th style={thTdStyle}>12</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr>  
              <tr>
                  <th style={thTdStyle}>5</th>
                  <th style={thTdStyle}>M.E.Engineering Design</th>
                  <th style={thTdStyle}>2011</th>
                  <th style={thTdStyle}>18</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr>
              <tr>
                  <th style={thTdStyle}>6</th>
                  <th style={thTdStyle}>M.E.Power Systems Engineering</th>
                  <th style={thTdStyle}>2011</th>
                  <th style={thTdStyle}>12</th>
                  <th style={thTdStyle}>Not Applied for Accreditation by NBA</th>
              </tr>

              </tbody>
              </table>
              </div>
              <div>
            <h2 style={{color:'Blue'}}>Ph.D RESEARCH PROGRAMMES</h2>
            <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Department</th>
                  <th style={thStyle}>Admissions</th>
                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>Computer Science and Engineering</th>
                  <th style={thTdStyle}>As Per Anna University Norms</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>Civil Engineering</th>
                  <th style={thTdStyle}>As Per Anna University Norms</th>
                  
              </tr>  
                
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>Electronics and Communication Engineering</th>
                  <th style={thTdStyle}>As Per Anna University Norms</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>Electrical and Electronics Engineering</th>
                  <th style={thTdStyle}>As Per Anna University Norms</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>5</th>
                  <th style={thTdStyle}>Mechanical Engineering</th>
                  <th style={thTdStyle}>As Per Anna University Norms</th>
                  
              </tr>
              
              
              </tbody>
              </table>
          </div>
          <div>
            <h1 style={{color:'Orange'}}>ELIGIBILITY FOR VARIOUS COURSES</h1>
            <hr></hr>
            <h2 style={{color:'Blue'}}>HSC(ACADEMIC)</h2>
            <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Community</th>
                  <th style={thStyle}>Overall Criteria</th>
                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>General Category</th>
                  <th style={thTdStyle}>Minimum average of 45% and above in Maths, Physics and Chemistry</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>Backward Class including Backward Class Muslims</th>
                  <th style={thTdStyle}>Minimum average of 40% and above in Maths, Physics and Chemistry</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>MBC & DNC</th>
                  <th style={thTdStyle}>Minimum average of 40% and above in Maths, Physics and Chemistry</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>SC / SCA / ST</th>
                  <th style={thTdStyle}>Minimum average of 40% in Qualifying Examination with Maths, Physics and Chemistry</th>
                  
              </tr> 
              </tbody></table>
              </div>
              <div>
            <h2 style={{color:'Blue'}}>HSC(VOCATIONAL)</h2>
            <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Community</th>
                  <th style={thStyle}>Overall Criteria</th>
                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>General Category</th>
                  <th style={thTdStyle}>Minimum average of 45% and above in the related subjects, Vocational Theory and Practicals</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>Backward Class including Backward Class Muslims</th>
                  <th style={thTdStyle}>Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>MBC & DNC</th>
                  <th style={thTdStyle}>Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>SC / SCA / ST</th>
                  <th style={thTdStyle}>Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals</th>
                  
              </tr> 
              </tbody></table>
              </div>
              <div>
                <h1 style={{color:'Orange'}}>CRITERIA</h1>
                <hr></hr>
                <ul>
                  <li>Calculation of Minimum eligible Marks - prescribed formula</li>
                  <li>Related subjects to be taken for calculation of minimum eligibility marks</li>
                  <li>Minimum pass prescibed by the respective board for a pass</li>
                  <li>Nationality / Nativity / Community of the candidate</li>
                  <li>Rounding off of minimum eligibility marks</li>
                  <li>Whether marks obtained in related subjects is through improvement examination</li>
                </ul>
              </div>
    </div>
   
    
  )
}

export default Admission;