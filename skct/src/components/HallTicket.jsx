import React from 'react'
import { Link } from 'react-router-dom';

    const buttonStyle = {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '15px 20px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '10px 0',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    };
    const ulStyle = {
        fontSize: '18px',
        listStyleType: 'none', 
        padding: '0',
      };
    
      const liStyle = {
        marginBottom: '10px', 
        position: 'relative',
        paddingLeft: '20px',
      };
    
      const tickIconStyle = {
        position: 'absolute',
        left: '0',
        top: '0',
        fontSize: '18px',
        color: 'black', 
      };
const HallTicket = () => {
  return (
    <div>
       <center> <img src='http://apps.skct.edu.in:804/assets/pics/logo.png'></img>
       <h2>INSTRUCTIONS TO CANDIDATES</h2></center>
       <br></br><br></br>
       <ul style={ulStyle}>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Admission to the Examination is Provisional.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Hall Ticket is issued subject to the candidates satisfying the Attendance and other requirement as per Rules, Regulations and Instructions issued by the Institution from time to time. If later, it is found that the candidate fails to comply with the above requirements, the Examinations taken up the candidate will stand cancelled.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Hall Ticket should be kept safe till the end of Semester Examinations. Candidates are not permitted to enter the Examination Hall without the Hall Ticket and College ID card and the same shall be produced to the Invigilator, Chief Superintendent or any other Competent Authority on demand.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidates will not be permitted to enter the Examination Hall after 30 minutes from the commencement of the Examination and leave the Examination Hall during the first 30 minutes of examination.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidates should write their Register Number on the Question Paper immediately after receiving it. Also candidates should ensure that they have written their register number in the Answer Sheet as in Hall Ticket.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidates suffering from infectious diseases have to inform Chief Superintendent in advance, who will make special arrangements for such candidates to take up Examination.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidates should keep their things safe prior to the Examination. Institution will not be responsible for any loss.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidate in case of any emergency or sickness has to inform the respective Hall Invigilator who will provide an assistant to go out and come back.</li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Candidates found violating the following guidelines shall be booked for malpractices as per Anna University/SKCT guidelines.
        <ol style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>Any transaction or exchange of Calculator or any other materials with other Candidates inside the Hall is not permitted.</li>
          <li>Programmable calculator, mobile phones, smart watch, pagers, laptop computers, palmtop computers and digital diary are strictly prohibited inside the examination hall.</li>
          <li>Any marking or writing in the answer book or additional sheets, which can be construed as an attempt to reveal their identity to the examiner is prohibited.</li>
        </ol>
      </li>
      <li style={liStyle}><span style={tickIconStyle}>✔</span> Any untoward activities by the candidates shall be governed by the malpractices guidelines published on the institutions official website/Notice board.</li>
    </ul>
     <center>
     <label for="agree" style={{ color: 'red' ,fontSize:'15px'}}>
    <input type="checkbox"  id="agree" name="agree" required/> I agree that I have read the instruction completely and carefully.
  </label>
  <br></br>
  <br></br>

<Link to="/logina">
  <button style={buttonStyle}>CLICK TO PROCEED TO HALLTICKET LOGIN</button></Link>
     </center>
    </div>

  )
}

export default HallTicket