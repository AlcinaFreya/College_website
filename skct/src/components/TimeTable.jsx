import React from 'react';

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px 5px', 
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'background-color 0.3s',
};

const TimeTable = () => {
  return (
    <div>
      <center>
        <img src='https://skct.edu.in/images/skctlogo.png' alt='SKCT Logo' />
        <h2>Nov/Dec 2023 UG/PG Regular Examination Timetable</h2>
      </center>
      <ul style={{ fontSize: '18px' }}>
        <li>Batch - 2023 UG(Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2023%20Batch/2023%20Batch%20Regular%20SEM%20I.pdf'><button style={buttonStyle}>Semester I</button></a>
        <br /><br />
        <li>Batch - 2022 UG(Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2023%20Batch/2023%20Batch%20Regular%20SEM%20I.pdf'><button style={buttonStyle}>Semester III</button></a>
        <br /><br />
        <li>Batch - 2021 UG(Regulation 2021):</li>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021%20BATCH%20UG%20SEM%20V%20REGULAR.pdf'><button style={buttonStyle}>Semester V</button></a>
        <br /><br />
        <li>Batch - 2023 PG(Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2023%20Batch/2023%20BATCH%20PG%20SEM%20I%20REGULAR.pdf'><button style={buttonStyle}>Semester I (MBA)</button></a>
        <a href='https://skct.edu.in/ESS/2023%20Batch/PG%20REG%20I%20SEM%202023%20Batch.pdf'><button style={buttonStyle}>Semester I(M.E.SE)</button></a>
        <br /><br />
        <li>Batch - 2022 M.E, Ph.D and MBA:</li>
        <a href='https://skct.edu.in/ESS/2022%20Batch/PG%20REG%20III%20SEM%202022%20Batch.pdf'><button style={buttonStyle}>Semester III</button></a>
      </ul>

      <center>
        <h2>Nov/Dec 2023 UG/PG Arrear Examinations Timetable</h2>
      </center>
      <ul style={{ fontSize: '18px' }}>
        <li>Batch - 2023 UG(Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2022%20Batch/2022%20Batch%20Arrear%20SEM%20I.pdf'><button style={buttonStyle}>Semester I</button></a>
        <a href='https://skct.edu.in/ESS/2022%20Batch/2022%20Batch%20Arrear%20SEM%20II.pdf'><button style={buttonStyle}>Semester II</button></a>
        <br /><br />
        <li>Batch - 2021 UG(Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021%201st%20sem%20arrear.pdf'><button style={buttonStyle}>Semester I</button></a>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021%202nd%20sem%20arrear.pdf'><button style={buttonStyle}>Semester II</button></a>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021%203rd%20sem%20arrear.pdf'><button style={buttonStyle}>Semester III</button></a>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021%204th%20sem%20arrear.pdf'><button style={buttonStyle}>Semester IV</button></a>
        <br /><br />
        <li>Batch - 2022 M.E, and MBA Arrear Batch (Regulation 2022):</li>
        <a href='https://skct.edu.in/ESS/2022%20Batch/PG%20ARR%20I%20SEM%202022%20Batch.pdf'><button style={buttonStyle}>Semester I</button></a>
        <a href='https://skct.edu.in/ESS/2022%20Batch/PG%20ARR%20II%20SEM%202022%20Batch.pdf'><button style={buttonStyle}>Semester II</button></a>
        <br /><br />
        <li>Batch - 2021 PG(Regulation 2021):</li>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021_PG_1.pdf'><button style={buttonStyle}>Semester I</button></a>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021_PG_2.pdf'><button style={buttonStyle}>Semester II</button></a>
        <a href='https://skct.edu.in/ESS/2021%20Batch/2021_PG_3.pdf'><button style={buttonStyle}>Semester III</button></a>
      </ul>
    </div>
  );
};

export default TimeTable;