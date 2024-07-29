import React, { useState,useEffect } from 'react';
import HeaderA from './HeaderA';

const ProfessionalAssociation = () => {
  const initialData = [
    { sno: 1, association: 'IETE', year: 2023, activity: 'One day workshop on Basics of Arduino Programming' },
    { sno: 2, association: 'IETE', year: 2023, activity: 'One day workshop on Basics of Arduino ProgrammingSkill Development Training program on Digital Image Processing using MATLAB' },
    { sno: 3, association: 'CSI', year: 2023, activity: 'Seminar on "Impact of Artificial Intelligence on Innovation"' },
    { sno: 4, association: 'IEEE', year: 2022, activity: 'Product Design and Development in Automotive Industry' },
    { sno: 5, association: 'IETE', year: 2022, activity: 'Workshop on Design Thinking in Combinational VLSI Circuits' },
    { sno: 6, association: 'IETE', year: 2022, activity: 'Guest Lecture on Empowering minds with the Colossal cloud environment' },
    { sno: 7, association: 'IETE', year: 2022, activity: 'International FDP on Disruptive Technologies for Next Gen Computing' },
    { sno: 8, association: 'CSI', year: 2022, activity: 'Webinar on Automation Testing tool -Selenium' },
    { sno: 9, association: 'IEEE', year: 2022, activity: 'Product Design and Development in Automotive Industry' },
    { sno: 10, association: 'IEEE', year: 2021, activity: 'Energy conservation and Electrical safty' },
    { sno: 11, association: 'CSI', year: 2021, activity: 'Webinar on INTO the world of Automation' },
    { sno: 12, association: 'CSI', year: 2021, activity: 'Webinar on Industrial Trends on New Normal' },
    { sno: 13, association: 'CSI', year: 2021, activity: 'Workshop on Java Script 101' },
    { sno: 14, association: 'CSI', year: 2021, activity: 'Webinar on Opportunities Through GATE/ESE/PSU' },
    { sno: 15, association: 'CSI', year: 2020, activity: 'Guest lecture on Cyber Security in India' },
    { sno: 16, association: 'CSI', year: 2020, activity: 'Industry Expectations and How to Crack Interviews' },
    { sno: 17, association: 'CSI', year: 2020, activity: 'Webinar on Trends in Data analytics and Data Engineering' },
    { sno: 18, association: 'CSI', year: 2019, activity: 'Webinar on Django Web Development With Python' },
    { sno: 19, association: 'CSI CHAPTER', year: 2018, activity: 'Techfest - 2k18, Coding Competition for Students' },
    { sno: 20, association: 'FERROCEMENT SOCIETY OF INDIA', year: 2016, activity: 'Celebration of Ferrocement day' },
    { sno: 21, association: 'ICI STUDENT CHAPTER', year: 2016, activity: 'Technical Event on "Techxtreme16"' },
    { sno: 22, association: 'IETE', year: 2015, activity: 'One day workshop on concrete mix design' },
    { sno: 23, association: 'CSI CHAPTER', year: 2015, activity: 'Intercollege Coding Contest and Technical quiz (Adroid - 2k15)' },
    { sno: 24, association: 'ICI STUDENT CHAPTER', year: 2013, activity: 'Inaguration' },
   

];
  const [data, setData] = useState(initialData);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {
    setData((prevData) => (ascendingOrder ? [...prevData].sort((a, b) => a.sno - b.sno) : [...prevData].sort((a, b) => b.sno - a.sno)));
  }, [ascendingOrder]); 

  const toggleOrder = () => {
    setAscendingOrder((prevOrder) => !prevOrder);
  };


  return (
    <div>
      <HeaderA />
      <br></br> <br></br> <br></br>
      <h2 style={{ color: 'orange' }}>PROFESSIONAL ASSOCIATION</h2>
      <hr></hr>
      <br></br>
      
      <table style={{ borderCollapse: 'collapse', width: '98%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>S.NO<button onClick={toggleOrder}>{ascendingOrder ? '↑' : '↓'}</button></th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Name of Association</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Year</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Activity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.sno}>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.sno}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.association}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.year}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </div>
  );
};

export default ProfessionalAssociation;
